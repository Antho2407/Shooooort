var URL_API = "http://gymia-shorty.herokuapp.com/";
var URL_API_ADD = "shorten/";
var request = require('request');
var ServerActions = require('../actions/ServerActions.js');

var url_call = "";

var ApiUrl = {
    getShort: function (_url) {
        url_call = URL_API + URL_API_ADD;
        console.log(url_call);
        jQuery.ajax( {
            url: url_call,
            contentType: "application/json; charset=utf-8",
            type: 'POST',
            data: { url: _url },
            success: function (data, status, jqXHR) {
              ServerActions.add(data);
            },
            error: function (jqXHR, status) {
              ServerActions.error(data);
            }  
        } );
    }
}; 

module.exports = ApiUrl;