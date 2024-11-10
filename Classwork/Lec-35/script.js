let url='https://catfact.ninja/fact';


//1. Fetch technically returns a promise
// console.log(fetch(url));

// //2.
// fetch(url).then((res)=>
// {
//     console.log(res)
// }
// ).catch((err)=>{
//     console.log("Error:",err);
// });

// // 3.
// fetch(url)
// .then((res)=>{
//     console.log(res.json());
// })
// .catch((err)=>{
//     console.log("Error:",err);
// })

// // 4.
// fetch(url)
// .then((res)=>{
//     // console.log(res.json());
//     res.json().then((value)=>{
//         console.log(value);
//         console.log(value.fact);
//     });
// })
// .catch((err)=>{
//     console.log("Error:",err);
// })

// 5. Chaining

fetch(url)
.then((res)=>{
    return res.json();
})
.then((value)=>{
    console.log(value);
    console.log(value.fact);
})
.catch((err)=>{
    console.log("Error:",err);
})