const fs=require('fs');
const input=fs.readFileSync(0, 'utf-8').trim().split(/\s+/)

let h=Number(input[0]);
let m=Number(input[1]);
let dur=Number(input[2]);
let newh;
let newm;
if(dur+m>=60){
    num=Math.floor((dur+m)/60)
    newh=h+num;
    newm=(m+dur)-(num*60);
    if(newh>=24){
        newh=newh-24;
    }
} else{
    newh=h;
    newm=m+dur;
}
console.log(newh, newm);


