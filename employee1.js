var express = require('express');
var app = express();


var employeeController=function (req, res) {
  console.log("CAlling rest api");
  var employee=[
            {id:1,firstName:'Tejashri',lastName:'Sawant',age:23,unit:1,workinghrs=9,mailId:'t@gmail'},
            {id:2,firstName:'Aishwarya',lastName:'Nagtilak',age:24,unit:1,workinghrs=9,mailId:'a@gmail'},
            {id:3,firstName:'Pooja',lastName:'Chavan',age:24,workinghrs=9,mailId:'p@gmail'},
            {id:4,firstName:'Samyeka',lastName:'Kumar',age:25,workinghrs=9,mailId:'s@gmail'},
            {id:5,firstName:'Manoj',lastName:'Pande',age:23,workinghrs=9,mailId:'s@gmail'}
      ];
  res.send(employee);
};



app.get('/employee',employeeController );

var server = app.listen(8088, function () {
  var host = server.address().address
  var port = server.address().port

  console.log("server listening at http://localhost:8088", host, port)
})