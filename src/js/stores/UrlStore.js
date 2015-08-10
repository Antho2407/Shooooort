var AppDispatcher = require('../dispatcher/AppDispatcher');
var EventEmitter = require('events').EventEmitter;
var assign = require('object-assign');
var UrlConstants = require('../constants/UrlConstants.js');

var CHANGE_EVENT = 'change';

var _url = [
      ];

Storage.prototype.setObject = function(key, value) {
    this.setItem(key, JSON.stringify(value));
}

Storage.prototype.getObject = function(key) {
    var value = this.getItem(key);
    return value && JSON.parse(value);
}

function initialize(){
    _url = [];
    
    // Get cached URL if possible
    var resultCache = localStorage.getObject('url');
    if(resultCache !=null)
      _url = resultCache;
    
    // Inform Views
    UrlStore.emitChange();
}

// Add a new URL
function create(url) {
    _url.unshift(url);
    UrlStore.emitChange();
}

// Clear the URL list
function clearList(){
    _url = [];
    UrlStore.emitChange();
}

// Store basic class - URL
var UrlStore = assign({}, EventEmitter.prototype, {

  updateCache: function(){
      localStorage.setObject('url', _url);
  },

  getAll: function() {
      return _url;
  },

  emitChange: function() {
    this.updateCache();
    this.emit(CHANGE_EVENT);
  },

  /**
   * @param {function} callback
   */
  addChangeListener: function(callback) {
    this.on(CHANGE_EVENT, callback);
  },

  /**
   * @param {function} callback
   */
  removeChangeListener: function(callback) {
    this.removeListener(CHANGE_EVENT, callback);
  },

  // Check action type
  dispatcherIndex: AppDispatcher.register(function(action) {

    switch(action.actionType) {

      case UrlConstants.URL_ADD:
        create(action.url);
        break;

      case UrlConstants.URL_CLEAR:
        clearList();
        break;

      case UrlConstants.INIT_ACTION:
        initialize();
        break;
    }

    return true; // No errors. Needed by promise in Dispatcher.
  })

});

module.exports = UrlStore;