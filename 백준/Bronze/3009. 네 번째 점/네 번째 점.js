const fs = require('fs');
const { createContext } = require('vm');
const input = fs.readFileSync(0, 'utf-8').trim().split("\n");

let cx = new Array()
let cy = new Array()
let depth
for(let i=0;i<3;i++){
    let [x,y] = input[i].split(" ").map(Number)
    cx.push(x)
    cy.push(y)
}

let cxpop=cx[0]
let cypop = cy[0]
let ans = new Array()
for(let i=1;i<cx.length;i++){
    if(cxpop===cx[i]){
        cx = cx.filter(num => num!==cxpop)
        ans.push(cx[0])
        break
    } else{
        continue
    }
}
if(ans.length===0){
    ans.push(cxpop)
}
for(let i=1;i<cy.length;i++){
    if(cypop===cy[i]){
        cy = cy.filter(num=>num!==cypop)
        ans.push(cy[0])
        break
    } else{
        continue
    }
}
if(ans.length===1){
    ans.push(cypop)
}
console.log(ans.join(" "))

