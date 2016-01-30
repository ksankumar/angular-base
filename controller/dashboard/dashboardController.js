/**
 * Created with JetBrains WebStorm.
 * User: santhosh_kumar_krishnan
 * Date: 11/27/13
 * Time: 8:12 PM
 * To change this template use File | Settings | File Templates.
 */

app.controller('dashboardController', function($scope, API) {

    $scope.dashboardMsg = constants.dashboardMsg;
    appConfig.serviceAPI.dashboardAPI(API, function(res) {
        $scope.dashboardData = res.data;
    });

    $scope.toggle = function() {
        this.contacts.state = !this.contacts.state;
    };
});
