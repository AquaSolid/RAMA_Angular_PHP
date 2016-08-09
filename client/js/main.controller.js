app.controller('MainController', function($scope, $location, $http) {

    $scope.ctlr = 'Main';
    $scope.brand = 'RAMA';

    $scope.foo = function() {
        $location.path('/');
    };

});
