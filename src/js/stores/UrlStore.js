var AppDispatcher = require('../dispatcher/AppDispatcher');
var EventEmitter = require('events').EventEmitter;
var assign = require('object-assign');
var UrlConstants = require('../constants/UrlConstants.js');

var CHANGE_EVENT = 'change';

var _url = [
      ];

function initialize(){
    _url = [];
    UrlStore.emitChange();
}

function create(url) {
    _url.unshift(url);
    UrlStore.emitChange();
}

function clearList(){
    _url = [];
    UrlStore.emitChange();
}

var UrlStore = assign({}, EventEmitter.prototype, {

  getAll: function() {
      return _url;
  },

  emitChange: function() {
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