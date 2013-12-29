'use strict'
$.mockjax({
    url: '/authenticate',
    dataType: 'json',
    responseTime: 2500,
    response: function (settings) {
        var userCredentials = settings.data;

        if (userCredentials.username === "haani" && userCredentials.password === "haani@786") {
            this.responseText = { loginSuccess: 'yes', token: 'kajhlkDJHALKDAJD' };
        } else {
            this.responseText = { loginSuccess: 'no' };
        }

    }
});

$.mockjax({
    url: '/register',
    dataType: 'json',
    responseTime: 2500,
    response: function (settings) {
        var newUserData = settings.data;

        if (newUserData.username === "haani") {
            this.responseText = { registerSuccess: 'no', errorMessage: 'Username exist! Please use diifferent' };
        } else {
            this.responseText = { registerSuccess: 'yes', errorMessage: 'User Registered'};
        }

    }
});
