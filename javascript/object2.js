// // In JavaScript, the correct way to create a new object is by using new Object() with an uppercase "O". However, the more common approach is to use object literal syntax {}.

// // const TinderUser = new Object()

// // const TinderUser = {}

// // TinderUser.id="123abc"
// // TinderUser.name="Manish"
// // TinderUser.isloggedIn=false

// // const regularuser={
// //     email:"someone@gmail.com",
// //     fullname :{
// //         username:{
// //             firstname:"Manish",
// //             lastname:"Yadav"

// //         }

// //     }
// // }

// // console.log(regularuser.fullname.username.firstname);


// //optional chanin


// // const obj1={1:"a",2:"b"}
// // const obj2={2:"b",3:"b"}

// // const obj3={obj1,obj2}
// // console.log(obj3);


// const user=[
//     {
//         id:1,
//         email:"Manish@gmail.com"
//     },
//     {
//         id:2,
//         email:"harish@gmail.com"
//     },
//     {
//         id:3,
//         email:"arti@gmail.com"
//     },
//     {
//         id:4,
//         email:"c@gmail.com"
//     },
// ]
// // console.log(user[0]);


const course={
    courseName:"Learn-Js-Easily",
    price:"199",
    courseInstructor:"Manish"
}
console.log(course.courseInstructor);
// const {courseInstructor}=course
// console.log(courseInstructor);