app.controller('BlogController', function(postsFactory, singlePostFactory, $scope, $location, $http, $sce, $route, $routeParams, $window) {
    $scope.ctlr = 'Blog';
    var homepage = 'localhost/rama/';

    $scope.data = {};

    //posts
    postsFactory.async().then(function(response) {
        $scope.data.posts = response.data.Posts;
        console.log($scope.data.posts);
    });

    //post
    if ($routeParams.slug) {
        singlePostFactory.async().then(function(response) {
            if (typeof response.data.Post[0] !== undefined && response.data.Post[0] !== null) {
                $scope.post = response.data.Post[0];
            };
        });
    };
    /*if ($routeParams.slug) {
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
    };*/


    $scope.ngHTML = function(html) {
        return $sce.trustAsHtml(html);
    };

    $scope.search = function(query) {
        $http.get('server/blog/searchposts.php?q=' + query)
            .success(function(data) {
                if (data.Search) {
                    $scope.posts = data.Search;
                };
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
        $scope.FormSubmit = 'ngMake()'
    };
    if ($location.path().indexOf('update') !== -1) {
        $scope.FormTitle = 'Update a Post';
        $scope.FormAction = null;
        $scope.FormMethod = 'POST';
        $scope.FormSubmit = 'ngUpdate()';
    };

    $scope.clicked = function() {
        console.log($scope.data.posts.length);
        $scope.data.posts = $scope.data.posts;
        /*
            postFactory.async().then(function(response) {
                $scope.posts = response.data.Posts;
            });
            $scope.pushPost = function (item) {
            console.log(item);
            $scope.posts = $scope.post[item];
        };*/
    };

    $scope.chooseSubmit = function() {
        if ($scope.FormSubmit) {
            if ($scope.FormSubmit === 'ngMake()') {
                $scope.ngMake();
            } else {
                $scope.ngUpdate();
            };
        }
    };

    $scope.ngMake = function() {
        var data = {
            Title: $scope.post.Title,
            Content: $scope.post.Content,
            UserID: $scope.user.ID
        };
        $http.post('server/blog/makepost.php', JSON.stringify(data))
            .success(function(data) {
                postsFactory.async().then(function(response) {
                    $scope.posts = response.data.Posts;
                });
                $location.path("/");
            })
            .error(function(error, status) {
                $scope.data.error = { message: error, status: status };
                console.log($scope.data.error.status);
            });

    };

    $scope.ngUpdate = function() {
        var redirect = homepage + '#/' + $scope.post.Slug + "/";
        var data = {
            ID: $scope.post.ID,
            Title: $scope.post.Title,
            Content: $scope.post.Content
        };
        $http.post('server/blog/updatepost.php', JSON.stringify(data))
            .success(function(data) {
                $location.path("/");
            })
            .error(function(error, status) {
                $scope.data.error = { message: error, status: status };
                console.log($scope.data.error.status);
            });
    };

    $scope.ngDelete = function() {
        var data = {
            ID: $scope.post.ID,
            Slug: $scope.post.Slug
        };
        $http.post('server/blog/deletepost.php', JSON.stringify(data))
            .success(function(result) {
                $location.path("/");
                $scope.deleted = 'The post has been deleted';
            })
            .error(function(error, status) {
                $scope.data.error = { message: error, status: status };
                console.log($scope.data.error.status);
            });
    };

});
