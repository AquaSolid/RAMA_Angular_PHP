app.factory('postFactory', function($http) {
    var postFactory = {
        async: function() {
            // $http returns a promise, which has a then function, which also returns a promise
            var promise = $http.get('server/blog/posts.php')
                .success(function(response) {
                    return response;
                })
                .error(function(error, status) {
                    $scope.response.error = { message: error, status: status };
                    console.log($scope.response.error.status);
                });
            // Return the promise to the controller
            return promise;
        }
    };
    return postFactory;
});
