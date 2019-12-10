import angular from 'angular'
import 'angular-route'
// import 'jquery/dist/jquery.mim.js'
import * as $ from "jquery";
import 'bootstrap/dist/css/bootstrap.min.css'
import './phoneList/phoneList.module.js'
import './Delites/delites.module.js'
const app = angular.module('app', ['ngRoute','phoneList','delites']);
app.config(['$routeProvider',function($routeProvider){
    $routeProvider.when('/',{
        template:require('./phoneList/phoneList.html'),
        controller:'pCtrl'
    }).when('/Delites/:id',{
        template:require('./Delites/delites.html'),
        controller:'cCtrl'
    })
    // .otherwise({
    //     template:require('./notfound/nf.html')
    // })
}])