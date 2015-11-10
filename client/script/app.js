/**
 * Created by samuelmoss on 11/10/15.
 */

var myApp = angular.module('myApp', []);

myApp.controller('FormController', ['$scope', '$http', function($scope, $http){
    $scope.note = {};
    //$scope.nameArray=[];

    //POST
    $scope.clickButton = function(note){
        $http.post('/submit', note).then(function(response){

        console.log("Script works!");

            //$scope.getPeople();
        });
    };

    ////GET
    //$scope.getPeople = function(){
    //    $http.get('/post/data').then(function(response){
    //        $scope.nameArray = response.data;
    //    });
    //};
    //
    //$scope.getPeople();

}]);