app.controller("AuthController", function($rootScope, $scope, $http) {

    $scope.ctlr = 'Auth';

    $scope.ngPOSTLogin = function() {
      var data = {
        UserName: $scope.UserName,
        Password: $scope.Password
      }
      $http.post('http://localhost/rama/server/auth/login.php', JSON.stringify(data)).then(function(result) {
            $rootScope.logins = result.data;
            $scope.logTest = result;
        });
    };
    /*$scope.ngPOSTLogin = function() {
        alert('hel');
        var data = {
            username = $scope.UserName,
            password = $scope.Password
        }
        alert(data);
        $http.post('rama/server/auth/login.php', {
            UserName: username,
            Password: password
        }).then(function(result) {
            $rootScope.logins = result.data;
            $scope.logTest = result;
        });
    };*/

    //$scope.ngGETLogin = function() {};
    /*     $http.get('http://localhost/rama/server/auth/login.php')
             .then(function(result) {
                 $rootScope.logins = result.data;
                 $scope.logTest = result;
             });
     */
}); 
/*
app.factory("authenticationSvc", function($http, $q, $window) {
  var userInfo;

  function login(userName, password) {
    var deferred = $q.defer();

    $http.post('server/auth/login.php', {
      userName: userName,
      password: password
    }).then(function(result) {
      userInfo = {
        accessToken: result.data.access_token,
        userName: result.data.userName
      };
      $window.sessionStorage["userInfo"] = JSON.stringify(userInfo);
      deferred.resolve(userInfo);
    }, function(error) {
      deferred.reject(error);
    });

    return deferred.promise;
  }

  return {
    login: login
  };
});
*/