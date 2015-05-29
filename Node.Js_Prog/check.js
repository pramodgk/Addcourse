var fs = require('fs');
//console.log(fs)
var obj;
fs.readFile('cand.json', 'utf8', function (err, data) {
  if (err) throw err;
   obj = JSON.parse(data);});
  //var exports=module.exports={};
  exports.sortStudOnPercent=function()
  {
  	fs.readFile('cand.json', 'utf8', function (err, data) {
  if (err) throw err;
   obj = JSON.parse(data);
  	console.log("Students who got 75% and above");
  		for(var i=0;i<obj.length;i++)
  		{    if(obj[i].percent>=75)
  			console.log(obj[i].name+' '+obj[i].percent);
  		}
  		});
  };
  exports.sortStudOnDegree=function()
  {
  	fs.readFile('cand.json', 'utf8', function (err, data) {
  if (err) throw err;
   obj = JSON.parse(data);
  	console.log("Students who got MCA");
  		for(var i=0;i<obj.length;i++)
  		{    if(obj[i].degree=='MCA')
  			console.log(obj[i].name+' '+obj[i].degree);
  		}
  		});
  };
