var app = angular.module("myApp",[]);
          app.controller("myCtrl",function($scope){
            $scope.items=["AngularJs","ReactJs","WonderCoreJs"];
            $scope.newItem=" ";
            $scope.pushItem = function(){
                if($scope.newItem !=" "){
                    $scope.items.push($scope.newItem);
                    $scope.newItem=" ";
                }   
            }
            //deletion
            $scope.deleteItem = function(index){
                $scope.items.splice(index,1);
            }
          })