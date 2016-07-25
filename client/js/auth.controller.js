app.controller("AppCtrl", ['$rootScope', 'Session', function($rootScope, Session) {
    Session.then(function(response) {
        $rootScope.session = response;
    });
}]);

app.factory('Session', function($http) {
    return $http.get('/session.php').then(function(result) {
        return result.data;
    });
});
