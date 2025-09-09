const fs = require('fs');
const input = fs.readFileSync(0, 'utf-8').trim().split("\n");

const [n,m] = input[0].split(" ").map(Number)
let arr = new Array()
let ans = new Array()
for(let i=0;i<n;i++){
    ans[i] = []
}
for(let i=1;i<=n*2;i++){
    arr[i-1] = input[i].split(" ").map(Number)
}
for(let i=0;i<n;i++){
    for(let j=0;j<m;j++){
        ans[i][j] = arr[i][j]+arr[i+n][j]
    }
}
for(let i=0;i<ans.length;i++){
    console.log(ans[i].join(" "))
}
