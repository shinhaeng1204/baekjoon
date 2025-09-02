const fs = require('fs');
const input = fs.readFileSync(0, 'utf-8').trim().split(/\s+/);

let data = {
    2:['A','B','C'],
    3:['D','E','F'],
    4:['G','H','I'],
    5:['J','K','L'],
    6:['M','N','O'],
    7:['P','Q','R','S'],
    8:['T','U','V'],
    9:['W','X','Y','Z']
}

const str = input[0].split("")
let num=0;
for(let i=0;i<str.length;i++){
    num += Number(Object.keys(data).find(k=>data[k].includes(str[i])))+1
}
console.log(num)
