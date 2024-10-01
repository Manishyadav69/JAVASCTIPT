//call back function doesnt have its name


const coding =["js","py","c++","C#","java"]

// coding.forEach( function (item) {
//     console.log(item);
// })

//Arrow function

// coding.forEach( (item)=>{ console.log(item);} )

function printme(item){

    console.log(item);

}
coding.forEach(printme)

