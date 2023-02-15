function createPerson(name){
   
    return{

        name,
      
       greetUser(){

       let msg =(`my name is ${this.name}`);
        
       console.log(msg);
     

       }


    };

}

let azhar =createPerson("azhar");

azhar.greetUser();