function Person (name){ // First letter start in Caps that name is pascal ex:Person
  
    this.name =name;
    
    this.greetUser =function(){

        console.log(`my name is ${this.name}`);
    } 

}

let person = new Person("azhar"); // new is empty object create

person.greetUser();




let name = new String("aZhar"); // <-  let name ="azhar";  
let age = new Number (21);         // <-  let name = 21 ;  
let marks = new Boolean(true);  // <-  let boolean= true ; 

console.log(name,age,marks);


let name1 = new Number(21);

console.log(name1);