/*var compareTo = function() {
    return {
        require: "ngModel",
        scope: {
            otherModelValue: "=compareTo"
        },
        link: function(scope, element, attributes, ngModel) {
             
            ngModel.$validators.compareTo = function(modelValue) {
                return modelValue == scope.otherModelValue;
            };
 
            scope.$watch("otherModelValue", function() {
                ngModel.$validate();
            });
        }
    };
};
module.directive("compareTo", compareTo);*/

app.directive('signup', function() {
    return {
        restrict: "E",
        templateUrl: 'client/html/signup.html'
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