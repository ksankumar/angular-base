/**
 * Created with JetBrains WebStorm.
 * User: santhosh_kumar_krishnan
 * Date: 12/11/13
 * Time: 7:47 PM
 * To change this template use File | Settings | File Templates.
 */
var footerCompo = appConfig.components.footerBar;
var footerBar = footerBar || angular.module(footerCompo.name, []);

footerBar.directive(footerCompo.name, function() {
    return {
        restrict: 'E',
        scope: true,
        templateUrl: footerCompo.templateUrl,
        controller: function($scope, $location) {

            $scope.pageClick = function() {
                var page_url = this.page.link;
                $location.url(page_url);
            };
            $scope.footerLink = constants.footerLink;
        }
    };
});
