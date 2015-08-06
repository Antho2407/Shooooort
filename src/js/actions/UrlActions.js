var AppDispatcher = require('../dispatcher/AppDispatcher');
var UrlConstants = require('../constants/UrlConstants.js');

var UrlActions = {
	add: function(type) {
   	AppDispatcher.dispatch({
   		actionType: UrlConstants.URL_ADD,
   		type : type
   	});
   },
   clear: function(type) {
    AppDispatcher.dispatch({
      actionType: UrlConstants.URL_CLEAR,
      type : type
    });
   },
	init: function() {
    AppDispatcher.dispatch({
      actionType: UrlConstants.INIT_ACTION
    });
  },
}

module.exports = UrlActions;