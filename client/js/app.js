var app = angular.module("myApp", ["ngRoute", "ngSanitize"]);
app.config(function($routeProvider) {
    $routeProvider
        .when("/searchbar", {
            templateUrl: "client/html/searchbar.html"
        })
        /*Auth*/
        .when("/signup", {
            templateUrl: "client/html/auth/signup.html"
        })
        .when("/login", {
            templateUrl: "client/html/auth/login.html"
        })
        .when("/logout", {
            controller: 'AuthController',
            templateUrl: "client/html/auth/logout.html"
        })
        /*Blog*/
        .when("/makepost", {
            templateUrl: "client/html/blog/makepost.html"
        })
        .when("/posts", {
            templateUrl: "client/html/blog/posts.html"
        })
        .when("/:slug", {
            templateUrl: "client/html/blog/post.html"
        });
});