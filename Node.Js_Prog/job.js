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
connection.query("select * from jobs where id=516",function(err,row){
	
	console.log('Result received: Err =' + err + 'Result' +row)
	
	if(err) {
		console.log("cannot get data");
	} else {
		console.log(row);
	}
	
	});
