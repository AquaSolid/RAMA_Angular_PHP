app.controller("AuthController", function($scope, $http, $rootScope, $window) {

    $scope.ctlr = 'Auth';

    $scope.ngPOSTLogin = function() {
        var data = {
            UserName: $scope.UserName,
            Password: $scope.Password
        }
        $http.post('server/auth/login.php', JSON.stringify(data))
            .then(function(result) {
                $rootScope.user = result.data;
                //$window.sessionStorage['$rootScope.user'] = JSON.stringify($rootScope.user);
            });
    };
});
