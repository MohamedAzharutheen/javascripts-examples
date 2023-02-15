 
for(let i=0; i<=10; i++ ){
    
    if(i %2 !==0){
       console.log ("ODD NUMBER #" +i);
    }
   else{
    console.log("even number" +i);
   }
}

// let promise = new promise(function(resolve,rejected){
//     resolve("process is successfull");
//     rejected("something went wrong");
// });

// promise
// .then((value)=>{
//     console.log(value);
// })
// .catch((error)=>{
//     console.log(error);
// });


/// for loop multiplecation
a = 7

for(i=1;i<=10;i++){
    console.log(a-i);
};



for (let i=1;i<=10;i++){

    for(let j=1; j<=10;j++){
        let k =i*j;
        console.log(k)
    }
}