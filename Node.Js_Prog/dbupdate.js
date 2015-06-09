var mysql=require('mysql');
var connection=mysql.createConnection({
	host:"10.0.3.7",
	user:"appserver",
	password:"data",
	database:"testappserver_core"
});
connection.connect(function(){
	console.log("connected");
});
connection.query("UPDATE salary_packages SET fixed_pay=500000 WHERE id!=''",function(err,row) {
    console.log('Result Received : Err = ' + err + ' Row = ' + row);
    if(err==null)
    {
    	console.log("UPDATED");
    }
   });
