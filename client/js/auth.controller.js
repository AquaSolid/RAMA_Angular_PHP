app.controller("AuthController", function($scope, $http, $rootScope, $window, $location, $timeout) {

    $scope.ctlr = 'Auth';
    var auth = this;

    // auth.logout = 'You are currently logged in';
    if (!$rootScope.user) {
        auth.logout = 'You have logged out successfully';
    }
    var watcher = $scope.$on('newLogOut', function() {
        auth.logout = 'You have logged out successfully';
    });
    $scope.$on('$destroy', function() {
        watcher();
    });

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
                $rootScope.$broadcast('newLogOut');
            })
            .error(function(status) {
                $scope.logout = 'There was an error while trying to log out';
            });
        $location.path('/logout')
    };

});
