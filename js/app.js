/**
 * Created with JetBrains WebStorm.
 * User: santhosh_kumar_krishnan
 * Date: 12/09/13
 * Time: 7:47 PM
 * To change this template use File | Settings | File Templates.
 */
'use strict'
var $j = jQuery.noConflict();

var components = [],
    compo = appConfig.components;
for (var i in compo) {
    components.push(compo[i].name);
}

var app = angular.module(appConfig.appName, components).
config(['$routeProvider', '$httpProvider', function($routeProvider, $httpProvider) {
    delete $httpProvider.defaults.headers.common['X-Requested-With'];

    for (var view in appConfig.views) {

        var views = appConfig.views[view];
        $routeProvider.when(views.url, {
            templateUrl: views.templateUrl,
            controller: views.controller
        });
    }
    // Root URL should go to landing page as defined in appConfig
    var landingUrl = appConfig.views[appConfig.landing].url;
    $routeProvider.when('/', {
        redirectTo: landingUrl
    });
    $routeProvider.when('/index.html', {
        redirectTo: landingUrl
    });
    $routeProvider.otherwise({
        redirectTo: appConfig.views.error.url
    });

}]);
