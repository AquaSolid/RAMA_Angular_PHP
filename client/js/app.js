var app = angular.module("myApp", ["ngRoute"]);
app.config(function($routeProvider) {
    $routeProvider.when("/love", {
        templateUrl: "love.html"
    }).when("/hate", {
        templateUrl: "hate.html"
    }).when("/form", {
        templateUrl: "client/html/form.html"
    }).when("/searchbar", {
        templateUrl: "client/html/searchbar.html"
    });

});
