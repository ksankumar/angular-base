/**
 * Created with JetBrains WebStorm.
 * User: santhosh_kumar_krishnan
 * Date: 12/09/13
 * Time: 7:46 PM
 * To change this template use File | Settings | File Templates.
 */
var appConfig = {
    'appName': 'myApp',
    'landing': 'dashboard',
    'views': {
        dashboard: {
            'templateUrl': 'view/dashboard/dashboard.html',
            'url': '/dashboard',
            'controller': 'dashboardController',
            'serviceConfig': {
                method: 'GET',
                url: 'data/dashboard-data.json?timestamp=' + new Date().getTime(),
                dataType: 'json',
                data: '',
                headers: {
                    'Content-Type': 'application/json'
                }
            }
        },
        contact: {
            'templateUrl': 'view/contact/contact.html',
            'url': '/contact',
            'controller': 'contactInfoController'
        },
        error: {
            'templateUrl': 'error.html',
            'url': '/error'
        }
    },
    'components': {
        API: {
            name: 'ServiceAPI'
        },
        headerBar: {
            name: 'headerBar',
            templateUrl: 'view/common/header.html'
        },
        footerBar: {
            name: 'footerBar',
            templateUrl: 'view/common/footer.html'
        }
    },
    'serviceAPI': {
        'dashboardAPI': function(API, _successCallback, _errorCallback) {
            API.getAPI(appConfig.views.dashboard.serviceConfig, _successCallback, _errorCallback);
        }
    }
};
