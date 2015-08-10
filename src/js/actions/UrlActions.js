var AppDispatcher = require('../dispatcher/AppDispatcher');
var UrlConstants = require('../constants/UrlConstants.js');
var Api = require('../api/Api.react');

// Handle URL actions
var UrlActions = {
  
  // Add URL
  add: function (input) {
        Api.getShort(input);
  },
  
  // Clear List
  clear: function(type) {
    AppDispatcher.dispatch({
      actionType: UrlConstants.URL_CLEAR
    });
  },

  // Init Store - Retrieve cache information
	init: function() {
    AppDispatcher.dispatch({
      actionType: UrlConstants.INIT_ACTION
    });
  },
}

module.exports = UrlActions;