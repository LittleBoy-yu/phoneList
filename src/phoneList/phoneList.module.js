import angular from 'angular'
import './phoneList.css'

angular.module('phoneList',[]).controller('pCtrl',['$scope','$http','$filter', function(scope,$http,$filter){
    scope.pList=[]
    $http({
        method: 'get',
        url:'static/data/phones.json'
    }).then(resp=>{
        scope.pList=resp.data
    }).catch(error=>{
        console.log(error);
    })
    
}])