/**
 * Created with JetBrains WebStorm.
 * User: santhosh_kumar_krishnan
 * Date: 12/27/13
 * Time: 7:56 PM
 * To change this template use File | Settings | File Templates.
 */
'use strict';

angular.module('ServiceAPI', []).factory('API', function($http) {
    var resData = null;
    return {
        /**
         * this method is used to send the request to web service.
         * @param callbackFunction is the method sent to handle the response.
         */
        getAPI: function(serviceConfig, callbackFunction) {
            $http.defaults.useXDomain = true;

            $http(serviceConfig).success(function(response) {
                if (callbackFunction) {
                    if (response) {
                        this.resData = response;
                        callbackFunction(response);
                    }
                }
            }.bind(this)).error(function(response, status, headers, config) {
                if (callbackFunction) {
                    callbackFunction(null);
                }
            });
        },
        getData: function() {
            return this.resData;
        }
    };
});
