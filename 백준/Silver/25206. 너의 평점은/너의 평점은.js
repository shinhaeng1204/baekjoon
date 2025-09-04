const fs = require('fs');
const input = fs.readFileSync(0, 'utf-8').trim().split("\n");

let sumweight=0
let sumscore=0
let score = {
    "A+" : "4.5",
    "A0" : "4.0",
    "B+" : "3.5",
    "B0" : "3.0",
    "C+" : "2.5",
    "C0" : "2.0",
    "D+" : "1.5",
    "D0" : "1.0",
    "F" : "0.0"
}
for(let i=0;i<20;i++){
    const [subject, weight, s_score] = input[i].split(" ")
    if(String(s_score)!=="P"){
        sumweight += Number(weight)
    }

    if(Object.keys(score).includes(s_score)){
        sumscore += Number(score[s_score]) * Number(weight)
    }

}
let ans = sumscore/sumweight
console.log(ans.toFixed(6))