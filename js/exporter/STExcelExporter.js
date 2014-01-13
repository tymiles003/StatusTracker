module.exports = function () {

    var excelbuilder = require('msexcel-builder');

    return {

        createStatusExcel: function (responseObject, username, date, workDone, planforTom, anyHurdle) {
            console.log('createStatusExcel called');
            // Create a new workbook file in current working-path
            var workbook = excelbuilder.createWorkbook('./', 'sample.xlsx')

            // Create a new worksheet with 10 columns and 12 rows
            var sheet1 = workbook.createSheet('sheet1', 10, 12);

            // Fill some data
            sheet1.set(1, 1, 'I am title');
            for (var i = 2; i < 5; i++)
                sheet1.set(i, 1, 'test' + i);

            // Save it
            workbook.save(function (err) {
                if (err){
                    workbook.cancel();
                    console.log('Error')
                    return {result: 'error'}
                }
                else{
                    console.log('congratulations, your workbook created');
                    //return {result: 'success'}
                    responseObject.send({result: 'success'});
                    
                }
                    
                
            });
        }

    };
};