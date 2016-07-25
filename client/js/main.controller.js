app.controller('MainController', function($scope, $location, $http) {

    $scope.brand = 'Brand';
    
    /*Get Data from 'people' Table*/
    $http.get("http://localhost/rama/server/api.php/people/")
        .then(function(response) {
            $scope.people = response.data;
        });

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

});
