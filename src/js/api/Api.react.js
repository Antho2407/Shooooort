var URL_API = "http://gymia-shorty.herokuapp.com/";
var URL_API_ADD = "shorten/";
var request = require('request');

var url_call = "";

var ApiUrl = {
    getShort: function (url) {
        url_call = URL_API + URL_API_ADD + "?url=" + url;
        console.log(url_call);
        return new Promise(function (resolve, reject) {
            request
                .post(url_call)
                .end(function (res) {
                    console.log(res.status);
                    if (res.status === 404) {
                        reject();
                    } else {
                        resolve(JSON.parse(res.text));
                    }
            });
        });
    }
}; 

module.exports = ApiUrl;