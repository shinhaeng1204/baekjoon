const fs = require('fs');
const input = fs.readFileSync(0, 'utf-8').trim().split(/\s+/);

const str = String(input)
const anstr = String(input)
if(anstr === str.split("").reverse().join("")){
    console.log("1")
} else{
    console.log("0")
}