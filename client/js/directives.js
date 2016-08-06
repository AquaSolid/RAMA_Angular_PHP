/*From Blog*/
app.directive('postObserver', function() {
    return function(scope, element, attrs) {
        attrs.$observe('postObserver', function(newValue) {
            console.log('Observe: new=' + newValue);
        });
    };
});

app.directive('searchposts', function() {
    return {
        restrict: "E",
        templateUrl: 'client/html/blog/searchposts.html'
    };
});

app.directive('posts', function() {
    return {
        scope: false,
        restrict: "E",
        templateUrl: 'client/html/blog/posts.html'
    };
});

/*From Auth*/
app.directive('signup', function() {
    return {
        restrict: "E",
        templateUrl: 'client/html/auth/signup.html'
    };
});

/*From Utils*/
app.directive('lorem', function() {
    return {
        restrict: "E",
        templateUrl: 'client/html/utils/lorem.html'
    };
});


app.directive('navbar', function() {
    return {
        restrict: "E",
        templateUrl: 'client/html/navbar.html'
    };
});

app.directive('searchbar', function() {
    return {
        restrict: "E",
        templateUrl: 'client/html/searchbar.html'
    };
});

app.directive('printpeople', function() {
    return {
        restrict: "E",
        templateUrl: 'client/html/printpeople.html'
    };
});

app.directive('printsearch', function() {
    return {
        restrict: "E",
        templateUrl: 'client/html/printsearch.html'
    };
});
