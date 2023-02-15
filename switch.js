let marks = prompt("Enter Your Marks");
let valueStore;

switch(true){
    case marks  >=100 && marks <100: 
     valueStore ="GRADE : A";
      break;
     case marks  >90:
     valueStore ="GRADE : B";
        break;
     case marks  >80:
        valueStore ="GRADE : C";
        break;
     case marks  >50:
        valueStore ="GRADE : D";
      break;
     
      case marks >=40:
        valueStore ="GRADE : PASS";
      break;

      case marks >=35: 
      valueStore ="GRADE : JUST PASS";
      break;

      default:
        valueStore ="FAIL";
}
document.getElementById("demo1").innerHTML=valueStore;