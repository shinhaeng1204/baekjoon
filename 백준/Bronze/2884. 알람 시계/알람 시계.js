const fs=require('fs');
const input=fs.readFileSync(0, 'utf-8').trim().split(" ")

let h=Number(input[0]);
let m=Number(input[1]);
let newh;
let newm;

if(m<45){
    if(h===0){
        newh=23;
    } else{
        newh=h-1;
    }
    newm=60+(m-45);
}
if(m>=45){
    newm=m-45;
    newh=h;
}
console.log(newh, newm);