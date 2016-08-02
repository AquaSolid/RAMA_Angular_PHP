var app = angular.module("myApp", ["ngRoute", "ngSanitize"]);

var position = 'position';

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
            templateUrl: "client/html/auth/logout.html"
        })
        /*Blog*/
        .when("/makepost", {
            templateUrl: "client/html/blog/makepost.html",
            position: "makepost"
        })
        .when("/posts", {
            templateUrl: "client/html/blog/posts.html"
        })
        .when("/:slug", {
            templateUrl: "client/html/blog/post.html"
        })
        .when("/:slug/update", {
            templateUrl: "client/html/blog/makepost.html",
            position: "updatepost"
        })
        .otherwise({ redirectTo: '/' });
});