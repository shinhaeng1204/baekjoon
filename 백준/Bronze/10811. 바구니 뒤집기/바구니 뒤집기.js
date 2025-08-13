const fs = require('fs');
const input = fs.readFileSync(0, 'utf-8').trim().split('\n');

const [n, m] = input[0].split(" ").map(Number)
let arr = new Array(n)

for(let i=0;i<n;i++){
    arr[i] = i+1
}

for(let i=1;i<=m;i++){
    const [j, k] = input[i].split(" ").map(Number)
    let reversepart = arr.slice(j-1, k).reverse()
    arr.splice(j-1, k-j+1, ...reversepart)
}
console.log(arr.join(" "))