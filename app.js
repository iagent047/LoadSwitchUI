var demo = angular.module('app', ['uiSwitch'])

demo.controller('MyController', function($scope) {
  $scope.onOff = true;
  $scope.changeCallback = function() {
    console.log('This is the state of my model ' + $scope.enabled);
  };
});
demo.controller('CountryCtrl', function ($scope, $http){
  $http.get('countries.json').success(function(data) {
    $scope.countries = data;
  });
  $http.get('countries1.json').success(function(data) {
    $scope.countries1 = data;
  });
});
demo.controller('AppCtrl', function($scope) {

});