//primitive data type                    // reference data type
                                      
                                         //  object
// string 
// integer                              //  array
// null,undefined
// boolean                              //function






//primitive

let x=10;
let y = x;
x=20;
console.log(y);


//Reference data type

let x1={value:10};
let y1 = x1;
x1.value=20;
console.log(y1);


// Reference data type

let card ={
    value:5
};

function updateCard(){
    card.value++;
}
updateCard(card);

console.log(card);