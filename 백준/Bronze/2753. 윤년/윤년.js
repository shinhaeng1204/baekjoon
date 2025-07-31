const fs=require('fs');
const input=fs.readFileSync(0, 'utf-8').trim();

if(input%4===0){
    if(input%100!==0 || input%400===0){
        console.log('1');
        return;
    } else{
        console.log('0');
        return;
    }
} else{
    console.log('0');
}