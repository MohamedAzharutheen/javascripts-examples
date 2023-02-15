const userData =[{
    name:"azhar",
    age:21,
    contact:1234567890
},

{
    name:"mohamed",
    age :22,
    contact:32344865848
}
];

userData.map((item)=>{
    console.log(item.contact);
})


const fruits =["apple","orange","mango","grapes"];

fruits.forEach((items)=>{

       console.log(items);
    
    
})



const arr = prompt("enter the numer");
if(arr<10){
let res1=arr.filter(arr=>arr %2!==0)
console.log(res1);
}
