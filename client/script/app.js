/**
 * Created by samuelmoss on 11/10/15.
 */

var myApp = angular.module('myApp', []);

myApp.controller('FormController', ['$scope', '$http', function($scope, $http){
    $scope.note = {};
    //$scope.nameArray=[];

    var defaultForm = {
        name : "",
        email : "",
        message: "",
        otherContact: ""
    };

    //POST
    $scope.clickButton = function(note){
        $http.post('/submit', note).then(function(response){

        console.log("Response.data", response.data);

            $scope.note = defaultForm;

        });
    };

}]);