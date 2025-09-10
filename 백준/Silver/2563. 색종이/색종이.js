const fs = require('fs');
const input = fs.readFileSync(0, 'utf-8').trim().split("\n");

const test = input[0]
let board = Array.from({length:100}, ()=>Array(100).fill(0))
let arr = new Array()
let ans = test*100
for(let i=1;i<=test;i++){
    arr[i-1] = input[i].split(" ").map(Number)
}
for(let n=0;n<arr.length;n++){
    let x=Number(arr[n][0])
    let y=Number(arr[n][1])
    for(let i=x;i<x+10;i++){
        for(let j=y;j<y+10;j++){
            board[i][j] = 1
        }
    }
}
let count=0
for(let i=0;i<board.length;i++){
    for(let j=0;j<board[0].length;j++){
        if(board[i][j]===1){
            count++
        }
    }
}
console.log(count)
