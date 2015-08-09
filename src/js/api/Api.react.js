var URL_API = "http://gymia-shorty.herokuapp.com/";
var URL_API_ADD = "shorten/";
var URL_API_STATS = "stats/"
var request = require('request');
var ServerActions = require('../actions/ServerActions.js');

var url_call = "";

var ApiUrl = {
    getShort: function (_url) {
        var that = this;
        url_call = URL_API + URL_API_ADD;
        jQuery.ajax( {
            url: url_call,
            contentType: "application/json",
            type: 'post',
            data: JSON.stringify({"url":_url}) ,
            processData: false,
            success: function (data, status, jqXHR) {
              data.original = _url;
              ApiUrl.getStats(data);
            },
            error: function( jqXhr, textStatus, errorThrown ){
              ServerActions.error(errorThrown);
            }  
        } );
    },

    getStats: function(_result){
        url_call = URL_API + _result.shortcode + "/" + URL_API_STATS;
        jQuery.ajax( {
            url: url_call,
            contentType: "application/json",
            type: 'get',
            processData: false,
            success: function (data, status, jqXHR) {
                _result.startDate = data.startDate;
                _result.lastSeenDate = data.lastSeenDate;
                _result.redirectCount = data.redirectCount;
                ServerActions.add(_result); 
            },
            error: function( jqXhr, textStatus, errorThrown ){
              ServerActions.error(errorThrown);
            }  
        } );
    }
}; 

module.exports = ApiUrl;