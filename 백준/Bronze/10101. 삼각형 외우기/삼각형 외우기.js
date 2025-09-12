const fs = require('fs');
const input = fs.readFileSync(0, 'utf-8').trim().split("\n");

const a = Number(input[0])
const b = Number(input[1])
const c = Number(input[2])

function solution(a,b,c){
    if(a+b+c!==180){
        return "Error"
    }
    if(a===b&& b===c&& c===60){
        return "Equilateral"
    }
    if(a===b || b===c | a===c){
        return "Isosceles"
    }
    if(a!==b && b!==c  && a!==c){
        return "Scalene"
    }
}
console.log(solution(a,b,c))
