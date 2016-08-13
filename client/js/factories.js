app.factory('postsFactory', function($http) {
    var postsFactory = {
        async: function() {
            var promise = $http.get('server/blog/posts.php')
                .then(function(response) {
                    return response;
                });
            return promise;
        }
    };
    return postsFactory;
});

app.factory('singlePostFactory', function($http, $routeParams) {
    var singlePostFactory = {
        async: function() {
            var promise = $http.get('server/blog/post.php?p=' + $routeParams.slug)
                .then(function(response) {
                    return response;
                });
            return promise;
        }
    };
    return singlePostFactory;
});