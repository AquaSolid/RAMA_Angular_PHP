app.controller('mainCtrl', function($scope, $location, $http) {

    $scope.brand = 'Brand';

    $scope.changeDiv = function() {
        $scope.signin = "<p>HA!</p>"
    };








    /*Get Data from 'people' Table*/
    $http.get("http://localhost/rama/server/api.php/people/")
        .then(function(response) {
            $scope.people = response.data;
        });

    $scope.search = function(query) {
        //alert(query);
        var url = "http://localhost/rama/server/search.php?q=" + query;
        $http.get(url)
            .then(function(response) {
                $scope.searchResults = response.data;
            });
    };
/*
    $scope.deletePerson = function(query) {
        var urli = "http://localhost/rama/delete.php?q=" + query;
        $http({
            method: 'DELETE',
            url: urli
        }).then(function successCallback(response) {
            alert("Successful Delete");

        }, function errorCallback(response) {
            alert("Unsuccessful Delete");
        });
    };          
*/
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

    /*Post Data to 'people' Table*/
    //$http.post('http://localhost/rama/', data, config).then(successCallback, errorCallback);

});
//http://localhost/rama/api.php/people/
//http://www.w3schools.com/angular/customers.php
//http://rest-service.guides.spring.io/greeting
