module.exports = function() {
  return {
      authenticateUser: function(username, password) {
          console.log('authenticateUser hit');
          if(username ==='haani' && password==='haani@786'){
              return { loginSuccess: 'yes', token: 'kajhlkDJHALKDAJD' };
          }else{
              return { loginSuccess: 'no', token: null };
          }
      },
      
      registerUser: function(username, password, firstName){
          //TODO: Interact with a DataBase here
      },
      
      submitEODStatus: function(username, date, workDone, planforTom, anyHurdle) {
            //TODO: Interact with the database here.
      
      }
    
      
  };
};