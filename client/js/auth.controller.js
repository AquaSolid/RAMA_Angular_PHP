app.controller("AuthController", function($rootScope, $scope, $http) {

    $scope.ngPOSTLogin = function() {
        var data = {
            username = $scope.UserName,
            password = $scope.Password
        }
        alert(data);
        /*$http.post('http://localhost/rama/server/auth/login.php', {
            UserName: username,
            Password: password
        }).then(function(result) {
            $rootScope.logins = result.config.data;
            $scope.logTest = result;
        });*/
    };

    //$scope.ngGETLogin = function() {};
    /*     $http.get('http://localhost/rama/server/auth/login.php')
             .then(function(result) {
                 $rootScope.logins = result.data;
                 $scope.logTest = result;
             });
     */
}); 
