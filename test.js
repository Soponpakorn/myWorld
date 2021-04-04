const jq = require('json-query');
const fs = require('fs');
const input_data = require('./data.json');

var oof = jq('nmaprun.scaninfo[0].$', {data: input_data}).value;
let pt = JSON.stringify(oof, null, 4);
fs.writeFileSync('result.json', pt, (err) => {
    if (err) throw err;
    console.log('Json file issued');
});

function search(term) {
    return input_data.filter(({username, firstName, lastName}) => {
      return username.toLowerCase() === term.toLowerCase() ||
            firstName.toLowerCase() === term.toLowerCase() ||
            lastName.toLowerCase() === term.toLowerCase()
    })
  }