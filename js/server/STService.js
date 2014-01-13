module.exports = function() {
    'use strict';
    var STXLSExporter = require('../exporter/STExcelExporter.js'),
        DatabaseServer = require('../database/mongoDatabaseFile.js'),
        dbInstance = new DatabaseServer();
    
  return {
      authenticateUser: function(username, password, resObj) {
            dbInstance.authenticateUser(username,password,resObj);
      },
      
      registerUser: function(empData, responsObj){
          //TODO: Interact with a DataBase here
            dbInstance.registerNewUser(empData, responsObj);     
      },
      
      submitEODStatus: function(username, date, workDone, planforTom, anyHurdle) {
            //TODO: Interact with the database here.
      
      },
      
      viewStatus: function(date, username){
            //TODO: Connect to DB to get the status.
      },
      
      exportToExcel: function(responseObject, username, date, workDone, planforTom, anyHurdle){
            var excelInstance = new STXLSExporter();
            excelInstance.createStatusExcel(responseObject, username, date, workDone, planforTom, anyHurdle);
      }
            
    
      
  };
};