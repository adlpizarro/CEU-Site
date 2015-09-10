ceuSite.controller('HomeController', ['$scope', function($scope){
	//Header variables
    $scope.page_title = "Home"

    //Home page
}])

ceuSite.controller('NewsController', ['$scope', function($scope){
	//Header variables
    $scope.page_title = "News"

    //Home page
}])
ceuSite.controller('MainController', ['$scope', '$rootScope', '$route', '$location', '$templateCache', 
	function($scope, $route, $location, $templateCache){
    console.log('it works!')
}])
//# sourceMappingURL=controllers.js.map