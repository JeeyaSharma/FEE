let str="jeeya";
let obj={ name: "jeeya"};
// console.log(str[Symbol.iterator]);
// console.log(obj[Symbol.iterator]);

for(let i of str){
    let iterator=str[Symbol.iterator]();
    console.log(iterator);
    console.log(iterator.next());
}