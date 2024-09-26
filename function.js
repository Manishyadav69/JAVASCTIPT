// // // function SayMyName(){
// // //     console.log("Manish");
// // //     console.log("Chandrajeet");
// // //     console.log("Yadav");
// // // }

// // // SayMyName()


// // // function AddTwoNum(num1,num2){
// // //     console.log(num1+num2);
// // // }
// // // AddTwoNum(2,5)//--------------> Arguments


// // // function AddTwoNum(num1,num2){

// // // console.log(num1+num2);

// // // }

// // // AddTwoNum(5,8)


// // // function MultiTwoNUm(num1,num2){

// // //     console.log(num1*num2);

// // // }
// // // MultiTwoNUm(5,5)


// // // function Divide(N1,N2){
// // //     console.log(N1%N2);
// // // }

// // // Divide(5,4)

// // function LoggedIN(username){
// //     if(username === undefined){
// //         console.log('Please Enter a username');
// //         return
// //     }

// //     return `${username}  LOGGED IN `

// // }
// // console.log(LoggedIN());





// function CalculatePrice(...N1){
//     return N1

// }
// console.log(CalculatePrice(200,400,500,852153,84684,6868));



const user={
    Name:"Gucci",
    Price:999
}
function handelObject(anyobject){
    return`UserName Is ${anyobject.Name} And Price is ${anyobject.Price}`
}
console.log(handelObject(user));