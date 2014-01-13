module.exports = function () {
    'use strict';

    var mongoose = require('mongoose');

    mongoose.connect('mongodb://localhost/test');

    var dbConnect = mongoose.connection;

    dbConnect.on('error', console.error.bind(console, 'connection error:'));

    //Schema and Models
    var newUserSchema, NewUserModel,
        employeeSchema, EmployeeModel;

    dbConnect.once('open', function callback() {

        //Creating a new User schema
        newUserSchema = mongoose.Schema({
            username: String,
            password: String,
            firstName: String
        });

        //Creating New User Model 
        NewUserModel = mongoose.model('NewUsers', newUserSchema);

        //Creating an employee Schema
        employeeSchema = mongoose.Schema({
            username: String,
            submissionDate: {
                type: Date,
                default: Date.now
            },
            workedOn: String,
            planForTommorow: String,
            hurdles: String
        });

        //Creating Employee Model
        EmployeeModel = mongoose.model('Employee', employeeSchema);


    });

    return {

        registerNewUser: function (empData, responseObj) {
            //TODO: Code for registering new user

            var newEmployee = new NewUserModel({
                username: empData.name,
                password: empData.password,
                firstName: empData.fName

            });

            newEmployee.save(function (error) {
                if (error) {
                    responseObj.send({
                        registerSuccess: 'no',
                        errorMessage: 'User Not Registered'
                    });
                } else {
                    responseObj.send({
                        registerSuccess: 'yes',
                        errorMessage: 'User Registered'
                    });
                }
            });

        },

        getAllUsers: function () {
            //TODO: Code to get all registered Users
        },

        authenticateUser: function (username, password, resObj) {
            //TODO: Code to get Username and Password and Authenticate

            var query = NewUserModel.findOne({
                'username': username
            });


            query.exec(function (err, result) {

                if (!err) {
                    console.log(result);
                    if (result) {
                        if (result.password === password) {
                            resObj.send({
                                loginSuccess: 'yes',
                                token: 'sdbfabaskda@#@#$'
                            });
                        } else {
                            resObj.send({
                                loginSuccess: 'no',
                                token: null
                            });
                        }
                    } else {
                        resObj.send({
                            loginSuccess: 'no',
                            token: null
                        });
                    }


                } else {
                    console.log('Error in query');
                }
            });
        },

        getUserStatus: function () {
            //TODO: Get the status of a user for a desired date
        },

        setUserStatus: function () {
            //TODO: Record a user EOD status.
        }

    };
};