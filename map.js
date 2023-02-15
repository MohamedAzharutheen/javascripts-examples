//// filter ()

const num =[1,2,5,7,9,];

const result = num.filter(age => age >5);
console.log(result);



//// map function
const  mult =[1,2,3,4,5,6,7,8];

const res = mult.map( item => item *2 );

console.log(res);



const userData=[
   { name:"azhar",
    contact:8124289972,
    age:21
},

{
    name:"mohamed",

    age:21,

    contact:814890700,

},

{
    name:"mohamed azhar",
    contact:3242567743,
    age:21
}


];


userData.map((data)=>{

    console.log(data.age);
});