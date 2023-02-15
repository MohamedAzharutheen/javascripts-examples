// // 7 to 12 good morning
// //1 to 5 good afternoon
// // 6 to 10 good night


// let hour = 10

// if(hour >=0 && hour <=13){
//     console.log("Good Morning");

// }
// else if(hour >=13 && hour <= 17){
//     console.log("Good AfterNoon");
// }
// else {
//     console.log("Good Evening");
// }

let salary = prompt("Enter Your Salary");

//const salary_number = parseInt(salary)

let mobile;

if (salary > 60000) {
    mobile = "BUY IPHONE MOBILE";
}
else if (salary >= 10000 && salary <=5999) {
    mobile = "BUY ANDROID MOBILE";
}
else if(salary >=5000 && salary <=9999) {
    mobile = "BUY A KEYBOARD MOBILE"
}
else{
    mobile ="NOT BUY A MOBILE"
}

document.getElementById("demo1").innerHTML = mobile;