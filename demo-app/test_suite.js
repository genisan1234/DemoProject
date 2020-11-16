describe('Test_Suite-1',function(){
    const { JSDOM } = require('jsdom');
    const jsdom = new JSDOM('<!doctype html><html><body></body></html>');
    const { window } = jsdom;
    const $ = global.jQuery = require('jquery')(window);
    const expect = require('chai').expect;
    it('should be true',function(done){
        var n=5;
     $.get('http://127.0.0.1:8080/employees',function(data){
         var employeesData = data;
         var s = employeesData.length;
         $.post("http://localhost:8080/",
         {
           EmployeeNo:'14567',
           FullName: 'Steven Smith',
           DOB: '2020-02-15',
           Country: 'Angolia',
           Gender: 'Male',
           Salary: '12000'
         });
         $.get('http://127.0.0.1:8080/employees',function(data){
             var ed = data;
             var t = ed.length;
             var u =(t==(s+1));
             expect(u).to.equal(false);
             done();
        });
     });
    });
});