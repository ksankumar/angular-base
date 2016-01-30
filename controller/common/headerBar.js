/**
 * Created with JetBrains WebStorm.
 * User: santhosh_kumar_krishnan
 * Date: 12/27/13
 * Time: 7:47 PM
 * To change this template use File | Settings | File Templates.
 */
var headerComp = appConfig.components.headerBar;
var headerBar = headerBar || angular.module(headerComp.name, []);

headerBar.directive(headerComp.name, function() {
    return {
        restrict: 'E',
        scope: true,
        templateUrl: headerComp.templateUrl,
        controller: function($scope, $location) {

        }
    };
});
