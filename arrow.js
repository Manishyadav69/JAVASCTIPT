// // const Uname=()=>{
// //     let username="Manish"
// //     console.log(username);
// // }
// // Uname(); 

// // ()=> this is an arrow function 
// // //arrow function doesnt use's the this. 

// const addtwo =(num1,num2)=>{
//     return num1+num2

// }
// console.log(addtwo(5,5));


//Implicit Return
//we dont have to write return in this it will automatically take this as an single line 

// const addtwo=(n1,n2)=> n1+n2
// console.log(addtwo(5,5));

// const addtwo= (n1,n2) => (n1+n2)
// console.log(addtwo(5,5));

const addtwo=(n1,n2) => ({username:"Manish"})
console.log(addtwo(5,5));



