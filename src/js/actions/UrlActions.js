var AppDispatcher = require('../dispatcher/AppDispatcher');
var UrlConstants = require('../constants/UrlConstants.js');
var Api = require('../api/Api.react');

var UrlActions = {
  add: function (input) {
        Api.getShort(input);
  },
  clear: function(type) {
    AppDispatcher.dispatch({
      actionType: UrlConstants.URL_CLEAR
    });
  },
	init: function() {
    AppDispatcher.dispatch({
      actionType: UrlConstants.INIT_ACTION
    });
  },
}

module.exports = UrlActions;