//service for the controllers to pass data
app.service('sharedProperties', function() {
    var firstname='ari';
	var birthplace='dha';
    
    return {
        getFirstName: function() {
			console.log(firstname);
            return firstname;
        },
		getBirthPlace: function() {
			console.log(birthplace);
            return birthplace;
        },
        setBirthPlace: function(value) {
            birthplace = value;
			console.log(birthplace);
        },
		setFirstName: function(value){
			firstname = value;
			console.log(firstname);
		},
		
        getObject: function() {
            return objectValue;
        }
    }
});

//contorllers that change routes and pass data between each other
app.controller("dhakaCtrl", function ($scope, sharedProperties) {
    $scope.msg = "I love Bangladesh";
	$scope.firstname = sharedProperties.getFirstName();
	$scope.setBirthPlace = function(newValue) {
        sharedProperties.setBirthPlace(newValue);
    };
	
});
app.controller("chittagongCtrl", function ($scope, sharedProperties) {
    $scope.msg = "I love Bangladesh";
	$scope.birthplace = sharedProperties.getBirthPlace();
	$scope.setFirstName = function(newValue) {
		console.log(newValue);
        sharedProperties.setFirstName(newValue);
    };
});
//controller which filter and order by name
app.controller("namesCtrl", function ($scope) {
	$scope.names = [{id: 3, name: "rahaman"},
					{id: 1, name: "bashar"},
					{id: 2, name: "anwar"}]; 
 
});