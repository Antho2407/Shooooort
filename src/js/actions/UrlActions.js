var AppDispatcher = require('../dispatcher/AppDispatcher');
var UrlConstants = require('../constants/UrlConstants.js');
var Api = require('../api/Api.react');

var UrlActions = {
  add: function (input) {
        Api
            .getShort(input)
            .then(function (result) {

                console.log("url " + url);
                console.dir(result);
                // Dispatch an action containing the categories.
                AppDispatcher.dispatch({
                    actionType: UrlConstants.URL_ADD,
                    result: result
                });
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