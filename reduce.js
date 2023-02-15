// const arr =[1,2,3,4,5];


// let intialValue =0;

// const sum =arr.reduce((previousValue,currentValue)=>{
//     return previousValue + currentValue;
// },intialValue);

// console.log(sum);



const arr=[1,2,3,4,5,6,7,8];

let intialValue =10;

const sum =arr.reduce((previousValue,currentValue)=>{

     return previousValue + currentValue;

});
// previousvalue =0 intialvalue = 0 currentvalue =1;
// previousvalue =1 intialvalue = 0 currentvalue =2;
// previousvalue =3 intialvalue = 0 currentvalue =3;
// previousvalue =6 intialvalue = 0 currentvalue =4;
// previousvalue =10 intialvalue = 0 currentvalue =5;
// previousvalue =15 intialvalue = 0 currentvalue =6;
// previousvalue =21 intialvalue = 0 currentvalue =7;
// previousvalue =28 intialvalue = 0 currentvalue =8;
// previousvalue =36
console.log(sum);




const num=[22,3,44,55,66,7];
let total = num.reduce((previousValue,currentValue)=>{
    return previousValue * currentValue;
});

console.log(total);

