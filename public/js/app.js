angular.module('App', ['ui.router', 'Home', 'Store'])
  .config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
    $urlRouterProvider
      .otherwise('/home');

    $stateProvider
      .state('home', {
        url: '/home',
        templateUrl: '/views/home.html',
        controller: 'HomeController'
      })
      .state('store', {
        url: '/store',
        templateUrl: '/views/store.html',
        controller: 'StoreController'
      })
  }])

angular.module('Home', [])
  .controller('HomeController', function($scope){
    $scope.name = "Damon";
  })

angular.module('Store', [])
  .controller('StoreController', function(){

  })
