//There are two ways to declare an object: constructor/literals
//objects are named by using new in with it, if new is not written, then it is considered as a function

//A) constructor:

/*
const obj= new Object();
obj.name='JEEYA';
console.log(typeof obj)
console.log(obj)
*/

//B) literals:
//curly braces are used

/*
const users={
    name: 'JEEYA',
    'roll number': 2310992027,
    subject: 'FEE'
}
console.log(users)
console.log(users.name)
console.log(users["roll number"])
console.log(users.subject)
*/

//change object value

/*
users.name= 'Venom';
console.log(users)
*/

//object inside an object:

/*
let arr=[1,2,[1,2,3,4],34] // this is an array inside an array
console.log(arr[2][2])
*/

/*
let users=
{
    user1:{
        name:'Laksh',
        age: 17,
        birthday:{
            date: 22,
            month: 'March',
            year: 2007
        }
    },

    user2 :{
        name:'Jeeya',
        age: 19,
        birthday:{
            date:24,
            month:'September',
            year:2004
        }
    }
}

console.log(users.user1)
console.log(users.user1.birthday)
console.log(users.user2)
console.log(users.user2.birthday.month)
*/


//object inside an array


/*
let arr=[
    {
        name:'Jeeya'
    },
    {
        name:'Laksh',
        roll_number: 22
    },
    {
        name:'Sidak'
    }
]

console.log(arr[2].name)
*/

//merge object

obj1={name:'Jeeya',age:19}
obj2={name1:'Laksh',age1:17}// if the keys are same , then the values are overwritten
// obj3={...obj1,...obj2} // "..." spread operator
// console.log(obj3)

obj4=Object.assign(obj1,obj2);
console.log(obj4)