const fs=require('fs');
const input=fs.readFileSync(0, 'utf-8').trim();

if(input>=90 && input<=100){
    console.log('A');
}
if(input>=80 && input<=89){
    console.log('B');
}
if(input>=70 && input<=79){
    console.log('C');
}
if(input>=60 && input<=69){
    console.log('D');
}
if(input<60){
    console.log('F');
}
