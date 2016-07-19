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
/*
app.directive('dbprint', function() {
	return {
		restrict: "E",
		template:   "<p>Person.id: {{person.id}}</p>" +
					"<p>Person.name: {{person.name}}</p>" +
					"<p>Person.email: {{person.email}}</p>" + "<hr>"
	};
});*/
