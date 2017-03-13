var fileX= {
	"records" : [
	{
		"Name":"Greeshma",
		"Age":"23",
		"State":"Andhra pradesh"
	},
	{
		"Name":"Snigdha",
		"Age":"20",
		"State":"Telangana"
	},
	{
		"Name":"Sathvik",
		"Age":"21",
		"State":"Maharashtra"
	},
	{
		"Name":"Siripriya",
		"Age":"13",
		"State":"Kerala"
	},
	{
		"Name":"Bhagya",
		"Age":"24",
		"State":"Goa"
	},
	]
}

var app= angular.module('mainApp', []);

app.controller('people', function($scope){
	$scope.persons = fileX.records;
})