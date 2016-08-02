app.controller('BlogController', function($scope, $location, $http, $sce, $route, $routeParams) {

    $scope.ctlr = 'Blog';

    $http.get('server/blog/posts.php')
        .success(function(data) {
            $scope.posts = data.Posts;
        })
        .error(function(error, status) {
            $scope.data.error = { message: error, status: status };
            console.log($scope.data.error.status);
        });

    if ($routeParams.slug) {
        $http.get('server/blog/post.php?p=' + $routeParams.slug)
            .success(function(data) {
                if (typeof data.Post[0] !== undefined && data.Post[0] !== null) {
                    $scope.post = data.Post[0];
                };
            })
            .error(function(error, status) {
                $scope.data.error = { message: error, status: status };
                console.log($scope.data.error.status);
            });
    };


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
    /*
        if ($route.current.$$route.position == null) {
            if ($route.current.$$route.position !== undefined || $route.current.$$route.position !== null) {
                var position = String($route.current.$$route.position);
                alert(position);
            };
        };
        if (typeof position === 'string' || position instanceof String) {};
    */

    if ($location.path() === '/makepost') {
        $scope.FormTitle = 'Make a Post';
        $scope.FormAction = 'server/blog/makepost.php';
        $scope.FormMethod = 'POST';
    };
    if ($location.path().indexOf('update') !== -1) {
        $scope.FormTitle = 'Update a Post';
        $scope.FormAction = null;
        $scope.FormMethod = null;
    };

    $scope.ngUpdate = function() {
        var data = {
            ID: $scope.post.ID,
            Title: $scope.post.Title,
            Content: $scope.post.Content
        };
        alert(data.ID + " " + data.Title);
        $http.post('server/blog/updatepost.php', JSON.stringify(data))
            .success(function(data) {
                $scope.post = data.Update;
            })
            .error(function(error, status) {
                $scope.data.error = { message: error, status: status };
                console.log($scope.data.error.status);
            });
    };


});
