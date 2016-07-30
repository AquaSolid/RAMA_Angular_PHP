app.controller('BlogController', function($scope, $location, $http, $sce, $routeParams) {

    $scope.ctlr = 'Blog';
    $scope.makepost = 'Make a Post';

    $http.get('server/blog/posts.php')
        .success(function(data) {
            $scope.posts = data.Posts;
        })
        .error(function(error, status) {
            $scope.data.error = { message: error, status: status };
            console.log($scope.data.error.status);
        });

    $http.get('server/blog/post.php?p=' + $routeParams.slug)
        .success(function(data) {
            $scope.post = data.Post[0];
        })
        .error(function(error, status) {
            $scope.data.error = { message: error, status: status };
            console.log($scope.data.error.status);
        });

    $scope.ngHTML = function(html) {
        return $sce.trustAsHtml(html);
    }

    $scope.search = function(query) {
        $http.get('server/blog/searchposts.php?q=' + query)
            .success(function(data) {
                $scope.posts = data.Search;
            })
            .error(function(error, status) {
                $scope.data.error = { message: error, status: status };
                console.log($scope.data.error.status);
            });
    };

    $scope.update = function(query) {
        $http.get('server/blog/updatepost.php?q=' + query)
            .success(function(data) {
                $scope.post = data.Update;
            })
            .error(function(error, status) {
                $scope.data.error = { message: error, status: status };
                console.log($scope.data.error.status);
            });
    };
});