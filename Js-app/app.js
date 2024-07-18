
let userName = "piumi"  //value can be chage dynamically
console.log(`User Name is ${userName}`);


// functions

function calculateShippingCost(){

    let totalPrice = 19;
    let shippingCost;

    if(totalPrice <= 10){
        shippingCost = 5;
    } else if(totalPrice  <=20){
        shippingCost = 3;
    }else{
        shippingCost = 0;
    }

    console.log(`Shipping Cost is ${shippingCost}`);
}

// calling the function
calculateShippingCost();