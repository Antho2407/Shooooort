var AppDispatcher = require('../dispatcher/AppDispatcher');
var UrlConstants = require('../constants/UrlConstants.js');

// Handle Server actions
// Mostly API relative actions
var ServerActions = {
  
  // Add URL
  add: function (data) {
      // Dispatch an action containing the categories.
      AppDispatcher.dispatch({
          actionType: UrlConstants.URL_ADD,
          url: data
      });
  },

  // Handle API error
  error: function (status) {
      alert("Error Server : code " + status);
  }
}

module.exports = ServerActions;