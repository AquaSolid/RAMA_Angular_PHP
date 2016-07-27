var app = angular.module("myApp", ["ngRoute"]);
app.config(function($routeProvider) {
    $routeProvider
        .when("/searchbar", {
            templateUrl: "client/html/searchbar.html"
        })
        .when("/signup", {
            templateUrl: "client/html/auth/signup.html"
        })
        .when("/login", {
            templateUrl: "client/html/auth/login.html"
        })
        .when("/logout", {
            controller: 'AuthController',
            templateUrl: "client/html/auth/logout.html"
        });

});
