var statusModule = angular.module('Status', []);

statusModule.controller('statusController', function ($scope) {
    $scope.workedOn;
    $scope.roadBlock;
    $scope.tmrPlan;

    $scope.goBackToLeavePage = function () {
        //Ajax Query to save for that user
        window.location = "leaves.html"
    };

    $scope.submitEODStatus = function () {
        console.log('Status submitted');
    };

})