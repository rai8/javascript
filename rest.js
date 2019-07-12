/*if you want to output the entire array, add the spread operator(..)*/
function add(...nums){
    let total=nums.reduce((x,y)=>x+y);/*arrow functon*/
    
    console.log(total);
}
add(4,5,6,7,8);