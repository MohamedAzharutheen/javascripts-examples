let favColor = ["red", "white", "yellow", "orange"]

let res =favColor.push("blue");

console.log(favColor);




const fruits = ["apple", "orange", "mango"]

//push   array element add in lastz

fruits.push("banana");

console.log(fruits);


//unshift     array element add in first

const fruits1 = ["apple", "orange", "mango"]

fruits1.unshift("gauva");
console.log(fruits1);

//splice   array element add in center  (1, 1)  1st array add and 1st array remove


const fruits2 = ["apple", "orange", "mango"]

fruits2.splice(1, 1, "watermelon", "grapes")

console.log(fruits2);

// indexof   

const number = [1, 2, 3, 4, 5]

console.log(number.indexOf(3));


// array value find  includes()   value irrunthuchuna true show illana false

const fruits3 = ["apple", "orange", "mango"]

console.log(fruits3.includes("orange"))


// find()

const arr = [{ id: 1, name: "sakthi" }, {
    id: 2, name: "azhar"
}]


const result = arr.find((item) => {
    return item.name == "azhar"
})


console.log("resullt",result)


// pop array last element remove 

const fruits4 = [1,2,3,4,5,];

fruits4.pop()



// shift array first element remove  



fruits4.shift()



//splice array  choose elment remove

fruits4.splice(2,1);



console.log(fruits4);

// sort  ascending  order 
let num =[5,1,6,3,7,4,0,5];

let resullt= num.sort();

console.log(result);



