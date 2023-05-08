// take a fn A and pass it to another function b .here a is callback fn. so i am giving access to fn b to call fn a.
//this call back fn give us access to whole Asynchronous world in synchronous world




setTimeout(function(){
    console.log("Time");
},1000);//first arguments is callback fn second is timer

function x(y){
    console.log("x");
    y();
}
x(function y(){
    console.log("y")
});
//x y timer

function printStr(str,cb){
    setTimeout(()=>{
      console.log(str);
      cb();
    },Math.floor(Math.random()*100)+1);
}
function printAll(){
    printStr("A",function(){
        printStr("B",function(){
            printStr("C",function(){
            
            })  
        })
    })
}
printAll();