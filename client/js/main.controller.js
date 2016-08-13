app.controller('MainController', function($scope, $location, $http) {

    $scope.ctlr = 'Main';
    $scope.brand = 'RAMA';

    $scope.emailSubmit = function() {
        var data = {
            YourEmail: $scope.user.Email,
            YourMessage: $scope.main.YourMessage,
            YourUserName: $scope.user.UserName
        };
        //console.log(JSON.stringify(data));
        $http.post('server/email.php', JSON.stringify(data))
            .success(function(response) {
            	console.log('Successful email');
            })
            .error(function(error, status) {
                $scope.data.error = { message: error, status: status };
                console.log($scope.data.error.status);
            });

    }
});
