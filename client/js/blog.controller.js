app.controller('BlogController', function($scope, $location, $http, $sce, $routeParams) {

    $scope.ctlr = 'Blog';

    $http.get('server/blog/posts.php')
        .success(function(data) {
            $scope.posts = data.Posts;
            //alert(data.Posts[0]['Content']);
        })
        .error(function(error, status) {
            $scope.data.error = { message: error, status: status };
            console.log($scope.data.error.status);
        });

    $http.get('server/blog/post.php?p=' + $routeParams.slug)
        .success(function(data) {
            $scope.post = data.Post[0];
            $scope.ngdata = data;
        })
        .error(function(error, status) {
            $scope.data.error = { message: error, status: status };
            console.log($scope.data.error.status);
        });

    $scope.ngHTML = function (html) {
        return $sce.trustAsHtml(html);
    }
    /*
        $scope.search = function(query) {
            var url = "http://localhost/rama/server/search.php?q=" + query;
            $http.get(url)
                .then(function(response) {
                    $scope.searchResults = response.data;
                });
        };

        $scope.deletePerson = function(query) {
            var url = "http://localhost/rama/server/delete.php?q=" + query;
            $http.delete(url)
                .then(
                    function(response) {
                        alert("Successful Delete");
                    },
                    function(response) {
                        alert("Unsuccessful Delete");
                    }
                );
        };
    */
});
