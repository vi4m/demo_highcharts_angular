angular.module('charts', []).
config(function($routeProvider) {
    $routeProvider.
    when('/main', {controller:MainCtrl, templateUrl:'views/main.html'}).
    when('/zoom', {controller:ZoomCtrl, templateUrl:'views/zoom.html'}).
    otherwise({redirectTo:'/main'});
});


function MainCtrl($rootScope, $scope, $location, $routeParams, $http) {
	$scope.app_title = 'Main view';
	$http.get("data/simple.json").success(function(data) {
		$scope.chart_1 = data;
	});
	$http.get("data/example.json").success(function(data) {
		$scope.chart_2 = data;
	});

}

function ZoomCtrl($scope) {
	// todo.
}


