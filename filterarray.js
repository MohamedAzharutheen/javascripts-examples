/// filter array


let adult =[12,18,45,34,54]; 

let result = adult.filter(  (value) => {

    return value >=18;
}  );

console.log("adult:",result);




const numbers =[1,2,3,4,5,6];

let evenNumbers = numbers.filter(  (value1) => {
   
    return value1 % 2 == 0;

} );

console.log("Even Numbers",evenNumbers);


let oddNumbers = numbers.filter(  (value1) => {
   
    return value1 % 2 !== 0;

} );


console.log("Odd Number",oddNumbers);


// first name and last name is show in output

const name1 = "Mohamed Azharutheen";

const userName = name1.split(" ");

let firstName = userName[0];
let lastName =userName[1];
 
console.log(`My first name is ${firstName} and last name is ${lastName}`);

