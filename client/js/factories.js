app.factory('postFactory', function($http) {
    var postFactory = {
        async: function() {
            var promise = $http.get('server/blog/posts.php')
                .success(function(response) {
                    return response;
                })
                .error(function(error, status) {
                    $scope.response.error = { message: error, status: status };
                    console.log($scope.response.error.status);
                });
            return promise;
        }
    };
    return postFactory;
});