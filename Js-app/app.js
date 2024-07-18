
let userName = "piumi"  //value can be chage dynamically
console.log(`User Name is ${userName}`);


// functions
// fuctions without parameter assigning
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


// fuctions with parameter assigning
function calculateShippingCost1(totalPriceParam){


    let shippingCost;

    if(totalPriceParam <= 10){
        shippingCost = 5;
    } else if(totalPriceParam  <=20){
        shippingCost = 3;
    }else{
        shippingCost = 0;
    }

    console.log(`Shipping Cost is ${shippingCost}`);
    console.log(`for total price of ${totalPriceParam}`);
}

// calling the function
calculateShippingCost1(totalPrice1 = 19);