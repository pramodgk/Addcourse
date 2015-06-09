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
connection.query("select * from salary_packages ",function(err,row) {
    console.log('Result Received : Err = ' + err + ' Row = ' + row);
    console.log("ID\tName\t\tSalary Package From\tSalary Package To");
	for(var i=0;i<row.length;i++)
	{   
    	console.log(row[i].id +"\t"+row[i].name+"\t\t"+row[i].salary_package_from+"\t\t\t"+row[i].salary_package_to);
    }
    connection.end();
   });