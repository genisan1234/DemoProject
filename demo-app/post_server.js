var express = require('express');
var bodyParser = require('body-parser');
var app     = express();
const fs = require('fs');
var cors = require('cors')  
app.use(bodyParser.urlencoded({ extended: true })); 
const employees = require("/Users/juryc/Desktop/demo_project/demo-app/src/js/store_data.json");
app.post('/',function(req, res) {
const employees = require("/Users/juryc/Desktop/demo_project/demo-app/src/js/store_data");
let raw_data = req.body;
raw_data.EmployeeNo = parseInt(raw_data.EmployeeNo);
raw_data.Salary = parseInt(raw_data.Salary);
var known=-1;
for(var idx in employees){
    if(employees[idx].EmployeeNo == raw_data.EmployeeNo){
           known=idx;
           break;
    }
}
if(known>=0){
employees.splice(known,1,raw_data);
}
else{
    employees.push(raw_data);
}
fs.writeFile("/Users/juryc/Desktop/demo_project/demo-app/src/js/store_data.json", JSON.stringify(employees), err => { 
    if (err) throw err;  
   
    
}); 
});
app.get('/employees',cors(),function(req,res){
    
    res.send(employees);
});
app.get('/employees/name/:name',cors(),function(req,res){
    var emp = req.params['name']
    var result=[];
    for(var info of employees){
        if(info.FullName.includes(emp)) result.push(info);
    }
    res.send(result);
})
app.get('/',function(req,res){
    res.send('<h1>Hello</h1>');
});
app.listen(8080, function() {
  console.log('Server running at http://127.0.0.1:8080/');
});