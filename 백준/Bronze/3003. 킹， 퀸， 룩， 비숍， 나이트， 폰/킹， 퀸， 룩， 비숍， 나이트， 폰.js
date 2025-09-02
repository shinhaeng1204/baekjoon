const fs = require('fs');
const input = fs.readFileSync(0, 'utf-8').trim() .split(/\s+/) .map(Number);

const [k,q,l,b,n,f] = [1,1,2,2,2,8]

const [ik,iq,il,ib,inn,iff] = input

const [ak,aq,al,ab,an,af] = [k-ik,q-iq,l-il,b-ib,n-inn,f-iff]
console.log(ak, aq, al, ab, an, af)