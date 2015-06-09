var mysql = require('mysql');
var connection = mysql.createConnection({
    host: "10.0.3.7",
    user: "appserver",
    password: "data",
    database: 'testappserver_core'
});
connection.connect(function() {
    console.log('Connected');
});
connection.query("show tables from testappserver_core",function(err,tables){
	
	console.log('Result received: Err =' + err + 'Result' +tables)
	
	if(err) {
		console.log("cannot get data");
	} else {
		console.log(tables);
	}
	
	});
