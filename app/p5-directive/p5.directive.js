/**
 * Created by akwilliams on 2/27/17.
 */
'use strict';

angular.module('p5-directive', [])
    .controller('p5Ctrl', ['$scope', '$rootScope', function($scope,$rootScope) {

    }])
    .directive("sketchDisplay", function(){
       return {
          restrict: "E",
          templateUrl: 'p5-directive/p5.html',
          controller: 'p5Ctrl'
       };
    });