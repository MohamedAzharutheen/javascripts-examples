let marks =[85,78,65,99,33,44];

// let result =Math.max(marks);   ///  output NAN

let result = Math.max(...marks);

let msg = "Maximum Value Is : " + result;

document.getElementById("demo1").innerHTML=msg;