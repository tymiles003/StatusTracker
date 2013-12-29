var loginModule = angular.module('statusTracker', []);

loginModule.controller('loginController', function ($scope) {
    $scope.userName;
    $scope.password;
    $scope.errorMessage;
    $scope.projectName;

    $scope.validate = function () {
        if ($scope.userName && $scope.password) {
            $("#CredentialError").addClass("hidden");
            $("#requireWarning").addClass("hidden");
            $('#signInBtn').addClass('disabled');
            $("#progress").removeClass("hidden");
            $('#bar').width('100%');
             $.ajax({
                url: 'http://localhost:8081/login',
                type: 'POST',
                data: { username: $scope.userName, password: $scope.password },
                dataType: 'json',
                success: function (json) {
                    if (json.loginSuccess === 'yes') {
                      
                        //TODO: Code in server call back
                        setTimeout(function () {
                            window.location = "status.html";
                        }, 2000);

                        //Session information.
                        sessionStorage.setItem("userName", $scope.userName);
                        sessionStorage.setItem("Token", json.token);
                    } else {
                        $('#signInBtn').removeClass('disabled');
                        $('#bar').width('0%');
                        $("#progress").addClass("hidden");
                        $("#CredentialError").removeClass("hidden");
                    }

                }
            });

        } else {

            $("#requireWarning").removeClass("hidden");
            $("#CredentialError").addClass("hidden");
        }

    };

    $scope.redirectNewUser = function () {
        window.location = 'register.html';
    };

});

