// document.getElementById("clickMe").addEventListener("click",function xyz(){
//     //when event click occurs,this callback function(xyz) is called into callstack
//     console.log("Button clicked");
// });
function attachEventListener(){
    let count = 0;
    document.getElementById("clickMe").addEventListener("click",function xyz(){
        console.log("Button Clicked");
    });
}
attachEventListener();