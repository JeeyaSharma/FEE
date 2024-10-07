/*
1.
var btn=document.querySelector("button");
console.dir(btn);
btn.onclick = function(){
    console.log("Button Pressed");
}
*/

/*
2.
var btns= document.querySelectorAll("button");

for(btn of btns)
{
    btn.onclick = myfunc
    btn.onmouseenter= function cursor()
    {
        console.log("Cursor is here");
    };
}
function myfunc()
{
    console.log("Button Pressed");
};
*/

/*
3.
var btns= document.querySelectorAll("button");

for(btn of btns)
{
    btn.onclick = myfunc
    btn.onclick= hello
}
function myfunc()
{
    console.log("Button Pressed");
};
function hello(){
    console.log("Hello");
};
*/
//event can't have multiple values

/*
// Event Listener
var btns= document.querySelectorAll("button");

for(btn of btns)
{
    // btn.onclick = myfunc
    // btn.onclick= hello
    btn.addEventListener('click',myfunc);
    btn.addEventListener('click',hello);
}
function myfunc()
{
    console.log("Button Pressed");
};
function hello(){
    console.log("Hello");
};
*/

var p=document.querySelector("p");
p.addEventListener

