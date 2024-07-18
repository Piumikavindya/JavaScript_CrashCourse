// Comparision Operators
/*   == -> checks equality of value
     === -> checks equality of value and data type
*/

// if-else conditions
let totalPrice = 19;
let shippingCost;

if(totalPrice > 20){
    shippingCost =0;
}else{
    shippingCost =5;
}

console.log(shippingCost);

// if else if else 
if(totalPrice <= 10){
    shippingCost = 5;
} else if(totalPrice  <=20){
    shippingCost = 3;
}else{
    shippingCost = 0;
}
console.log(shippingCost);


// conditions with not eqaul !==
let userMembership;

if(userMembership !== 'premium'){
    // show user non premium conntents
} else{
    // show user premium contents
}