import angular from 'angular'
import { stripColor } from '_ansi-colors@3.2.4@ansi-colors';

angular.module('delites', []).controller('cCtrl', ['$scope', '$http', '$routeParams', function (scope, http, $routeParams) {
    http({
        method: 'get',
        url: `static/data/${$routeParams.id}.json`
    }).then(resp => {
        scope.delitesList = resp.data
        scope.imgs = scope.delitesList.images;
        scope.selectImg = scope.imgs[0];
        scope.setImage = function (i) {
            scope.selectImg = scope.imgs[i];
        }
    }).catch(error => {
        console.log(error);
    })




}])