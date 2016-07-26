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
        $http.post('server/auth/logout.php')
            .then(function(result) {
                $scope.logout = result.data;
            });
        /*
        $timeout(function() {
            $location.path('/');
        }, 10000);
        */
    };

});
