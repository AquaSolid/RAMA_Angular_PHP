app.controller("AuthController", function($scope, $http, $rootScope, $window, $location, $timeout) {

    $scope.ctlr = 'Auth';

    if ($window.sessionStorage['user'] != null) {
        $rootScope.user = JSON.parse($window.sessionStorage['user']);
    }

    $scope.ngPOSTLogIn = function() {
        var data = {
            UserName: $scope.UserName,
            Password: $scope.Password
        }
        $http.post('server/auth/login.php', JSON.stringify(data))
            .then(function(result) {
                $rootScope.user = result.data;
                $window.sessionStorage['user'] = JSON.stringify($rootScope.user);
            });
    };

    $scope.ngPOSTLogOut = function() {
        if ($rootScope.user) {
            $rootScope.user = null;
        }
        if ($window.sessionStorage) {
            $window.sessionStorage.clear();
        }
        $http.get('server/auth/logout.php')
            .success(function(status) {
                $scope.logout = 'You have logged out successfully';
                $scope.num = 1;
            })
            .error(function(status) {
                $scope.logout = 'There was an error while trying to log out';
            });
        $location.path('/logout')
    };

});