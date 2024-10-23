//ex-2
//simple calculater
/*const calculater = (num1, num2, operation) => {
    switch(operation) {
        case '+' :
            return num1 + num2 ;
            break;
        case '-' :
            return num1 - num2 ;
            break;
        case '*' :
            return num1 * num2 ;
            break;
        case '/' :
            return num1 / num2 ;
            break;
        default :
            return "invalid operartion";
    }
}
let output = calculater(2,3,"*");
console.log(output);*/
//ex-3
/*const add=(a,b)=>a+b;
console.log(add(2,8));*/

//to do BMI calculator
/*const calculateBMI = (height,weight) => (weight / (height*height)).toFixed();
console.log(calculateBMI(5,75))*/

//rest parameter
/*const printNumber=(...number)=>{
    return number;
}
let output=printNumber(1,2,3,4,5,6,7,8,9);
console.log(output);*/

//callback function- When a function is called as an argument in an another function
/*syntax:function say(num,callback){
console.log(`my name ${name}`);
return callback;
}
function hello(){
    return "hello";
}*/
//callback authentication
/*const autentication = (enteredData, callback) => {
    return callback(enteredData);
  }
  const verify = (userData) => {
    let user = "user";
    let admin = "admin"
    if(userData === user){
        return "she is a user";
    }else if (userData === admin) {
        return "she is a admin";
    }else {
        return "not a authorized person";
    }
  }
  console.log(autentication("Sony", verify));*/
  //Asynchronous- If error happens in line 1, it will not stop the execution and switch to next line.
  //set time out syntax
  /*setTimeout(()=>{}); /call back function
  setInterval(()=>{}); /ananumous function*/
  //ex-
  /*setTimeout(()=>{
    console.log("Hey USBM Student");},5000);*/
  