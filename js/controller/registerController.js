var newUserModule = angular.module('Register', []);

newUserModule.controller('registerController', function ($scope) {
    $scope.userName;
    $scope.password;
    $scope.rePassword;
    $scope.firstName;
    $scope.errorMessage;
    $scope.register = function () {
        $('#registerSucces').addClass('hidden');
        $('#alreadyExists').addClass('hidden');
        if ($scope.userName === "" || $scope.userName === undefined || $scope.password === "" || $scope.password === undefined || $scope.rePassword === "" || $scope.rePassword === undefined || $scope.firstName === "" || $scope.firstName === undefined) {
            $('#CredentialError').removeClass('hidden');
            $scope.errorMessage = 'Enter a required field';
        } else if ($scope.password !== $scope.rePassword) {
            $('#CredentialError').removeClass('hidden');
            $scope.errorMessage = 'Password do not match. Enter again';
        } else {
            $('#registerBtn').addClass('disabled');
            $('#CredentialError').addClass('hidden');
            $('#progress').removeClass('hidden');
            $('#bar').width('100%');
            
            $.ajax({
                url: 'http://localhost:8081/register',
                type: 'POST',
                data: { username: $scope.userName, password: $scope.password, firstName: $scope.firstName },
                dataType: 'json',
                success: function (json) {
                    $('#CredentialError').removeClass('hidden');
                    $('#registerBtn').removeClass('disabled');
                    if (json.registerSuccess === 'yes') {
                       
                        $('#progress').addClass('hidden');
                        $('#CredentialError').addClass('hidden');
                        $('#registerSucces').removeClass('hidden');
                    } else if (json.registerSuccess === 'no') {
                        $('#CredentialError').addClass('hidden');
                        $('#alreadyExists').removeClass('hidden');
                        $('#progress').addClass('hidden');
                    }

                }.bind(this)
            });
        }

    };

    $scope.backToLogin = function () {
        window.location = 'login.html';
    };
});