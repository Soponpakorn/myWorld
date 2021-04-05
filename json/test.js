//const jq = require('json-query');
const fs = require('fs');
const input_data = require('./data.json');


//var oof1 = jq('nmaprun.verbose[0].$', {data: input_data}).value;
//var oof = jq('nmaprun.scaninfo[0].$', {data: input_data}).value;
delete input_data.nmaprun.scaninfo;
delete input_data.nmaprun.verbose;
delete input_data.nmaprun.debugging;
delete input_data.nmaprun.taskbegin;
delete input_data.nmaprun.taskend;
delete input_data.nmaprun.taskprogress;
input_data.nmaprun.host.slice(0,1)
for(i=0;i<input_data.nmaprun.host.length;i++){
  if(input_data.nmaprun.host[i]==null){
    //
  }
  else if(!input_data.nmaprun.host[i].status[0].$.state=="down"){
    input_data.nmaprun.host[i].slice(i,1)
  }
}

let pt = JSON.stringify(input_data, null, 4);
fs.writeFileSync('data.json', pt, (err) => {
    if (err) throw err;
    console.log('Json file issued');
});

//function search(term) {
//    return input_data.filter(({username, firstName, lastName}) => {
//        return username.toLowerCase() === term.toLowerCase() ||
//            firstName.toLowerCase() === term.toLowerCase() ||
//            lastName.toLowerCase() === term.toLowerCase()
//    })
//}