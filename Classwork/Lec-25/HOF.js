function printname(func,num){
    for(let i=1;i<=num;i++)
    {
        console.log("Jeeya");
        func();
    }
}
// printname(20);

let myname=function myName(){
    console.log("Jeeya");
};
printname(myname,20);