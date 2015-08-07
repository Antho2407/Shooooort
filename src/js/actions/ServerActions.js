var AppDispatcher = require('../dispatcher/AppDispatcher');
var UrlConstants = require('../constants/UrlConstants.js');

var ServerActions = {
  add: function (data) {
      console.dir(data);
      // Dispatch an action containing the categories.
      AppDispatcher.dispatch({
          actionType: UrlConstants.URL_ADD,
          result: data
      });
  },
  error: function (status) {
      alert("Error Server : code " + status);
  }
}

module.exports = ServerActions;