var degreeColl = [{'Id' : 1,'Value': 'Btech'},{'Id' : 2,'Value': 'Mtech'}];
var barnchColl = [{'Id' : 1,'Value': 'CS'},{'Id' : 2,'Value': 'EC'}];
//Above collection will be binded into drop-downs respectively

function add(){
    //fetch degreeId
    //Fetch branchIds. 'coz degree --> branch will have 1:n relation
    var mappingObject =[{'DegreeId': 1,'BrancheIds': '[1,2]' }, {'DegreeId': 2,'BrancheIds': '[1,2]' }];
}

function getBranchNameFromId(branchId){
    angular.forEach(branchColl,function(value,index){
        if(branchId == index)
            return value;    
    });
}