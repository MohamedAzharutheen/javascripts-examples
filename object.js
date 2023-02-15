let person ={
    name:"azhar",
    gender:"male",
    age:"22"
};

person.address= 141;// object outside adding in object

person.greetUser= function(){}

delete person.greetUser;     // delet object syntax;

console.log(person);