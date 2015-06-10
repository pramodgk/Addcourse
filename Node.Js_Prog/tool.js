var mysql=require('mysql');
var fs= require('fs');
var lodash=require('lodash');

var connection = mysql.createConnection({
    host: "10.0.3.7",
    user: "appserver",
    password: "data",
    database: 'testappserver_core'
});

connection.connect(function() {
    console.log('Connected');
});
connection.query("desc salary_packages",function(err,row){
	var pqr=[];
	console.log('Result received: Err =' + err + 'Result' +row)
	
	if(err) {
		console.log("cannot get data");
	} else {
		console.log(row);
	}
	var salary_packages=row;
	var abc=lodash.pluck(salary_packages, 'Field');
	var xyz=lodash.pluck(salary_packages, 'Type');
	for(var i=0;i<abc.length;i++)
	{
	pqr[i]=lodash.zipObject([abc[i]], [xyz[i]]);

	//console.log(pqr);
	}
	//console.log(pqr);
	
	/*var abc=lodash.pluck(salary_packages,'Field');*/

	//console.log(abc);
	//console.log(xyz);
//var obj = Obj.parse(pqr);
//for(var j=0;j<pqr.length;j++)
fs.appendFile('JsonFile.json',JSON.stringify(pqr), function (err) {
  if (err) return console.log(err);
  console.log('Hello World > helloworld.txt');
});

	console.log("JSON Format");
	console.log(pqr);
	
	connection.end();
	});