// let name1 = "azhar";

// let age  = 21;



// let interest =[" I learning New Technologies"];

// let address = {

//     distric:"Tirunelveli",

//     state : "TamilNadu",

// }


// function greetUser(){
//     //method 1 + name1
//     let msg1 = "My name is : " + name1 +" <br> age is : " + age + " <br> Interested :" + interest;
   
//     // method 2 ${name1}
//     let msg2 = `my name is : ${name1}  <br> I Am From : ${address.distric}`
//     document.getElementById("demo1").innerHTML= msg1;
//     document.getElementById("demo").innerHTML =msg2;
// }

// greetUser();



//object oriended programing;

  let person ={

      //key : "value",
      
      name1     :"Mohamed Azharutheen",

      gender :"male",

      age : 21,


      address :{
        
          Distric : "Tirunelveli",

          State  : "TamilNadu",

      },
      
      degree : "BCA",

      Passout : 2022,





      greetUser:function(){

        let msg3 = `my name is  : ${this.name1} <br>  I Am From : ${this.address.Distric} <br> I am Complete : ${this.degree}<br> PassOut Year : ${this.Passout}`;

      document.getElementById("demo1").innerHTML=msg3;
   }

  };

  person.greetUser();

