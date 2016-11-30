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
  .controller('StoreController', function($scope, RetrieveData){
    $scope.items;
    //Retrieve the data that I want.
    function parseData(items) {
      return items.map(function(item) {
        return {
          id: item.id,
          name: item.name,
          penny: item.defaultPriceInCents,
          image: item.mainImage.ref
        }
      });
    }
    RetrieveData.getItems().success(function(response) {
      $scope.items = parseData(response.products);
      console.log('$scope.items:', $scope.items);
    });
  })
  .service('RetrieveData', function($http) {
    this.getItems = function() {
      return $http.get('https://sneakpeeq-sites.s3.amazonaws.com/interviews/ce/feeds/store.js')
    }
  })
