//routes
app.config(function($routeProvider) {
    $routeProvider
    /*.when("/", {
        templateUrl : "angularJS.htm"
    })*/
    .when("/dhaka", {
        templateUrl : "link1.htm",
        controller : "dhakaCtrl"
    })
    .when("/chittagong", {
        templateUrl : "link2.htm",
        controller : "chittagongCtrl"
    });
});