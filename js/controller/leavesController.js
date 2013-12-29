var statusModule = angular.module('Leaves', []);

statusModule.controller('leavesController', function ($scope) {
    'use strict';

    $scope.date;
    $scope.reason;
    //$scope.tmrPlan;

    $scope.goBacktoStatusPage = function () {
        window.location = "status.html";
    };
    

});