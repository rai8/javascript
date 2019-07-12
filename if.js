let number=5;
if(number===5){
    console.log("Runs");
}
else{
    console.log('Not the same');
}
/*switch statements- checking finite amount of answers*/
let answer="F";
switch(answer){
    case "A":console.log("A is wrong.");
    break;
    case "B":console.log("B is wrong.");
    break; 
    case "C":console.log("C is correct.");
    break; 
    default: console.log("Not even near the answer");
}
/*using loop statements
prompt("Enter passcode"); 
/*for loop usage */
let total=0;
for (let i=0;i<5;i++){
 total +=i;  
}
console.log(total);/*sum of the total 1+2+3+4*/