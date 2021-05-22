var mouseEvent="empty";
var mouse_x, mouse_y;
var width_of_line= 2;
var canvas= document.getElementById("myCanvas");
var ctx= canvas.getContext("2d");

 var color= "black";
 var radius= 10;

 /*ctx.beginPath();
 ctx.strokeStyle= color;
 ctx.lineWidth= 2;
 ctx.arc(200, 200, 40, 0, 2 * Math.PI);
 ctx.stroke();*/

 canvas.addEventListener("mousedown", my_mousedown);

 function my_mousedown(e){
     color= document.getElementById("colour_input").value;
     width_of_line = document.getElementById("width_input").value;
     radius= document.getElementById("radius_input").value;
     console.log(color);
     
     /*mouse_x= e.clientX - canvas.offsetLeft;
     mouse_y= e.clientY - canvas.offsetTop;*/

     mouseEvent= "mouseDown";

    
     

 }
 
 canvas.addEventListener("mouseleave", my_mouseleave);
 function my_mouseleave(e){
     mouseEvent="mouseLeave";
 }

 canvas.addEventListener("mouseup", my_mouseup);
 function my_mouseup(e){
     mouseEvent="mouseUp";
 }

 canvas.addEventListener("mousemove", my_mousemove);
 function my_mousemove(e){
    mouse_x= e.clientX - canvas.offsetLeft;
    mouse_y= e.clientY - canvas.offsetTop;

    if(mouseEvent=="mouseDown"){
        console.log("Current position of X"+mouse_x+ "Current position of Y" +mouse_y);
 
    ctx.beginPath();
    ctx.strokeStyle= color;
        ctx.lineWidth= width_of_line;
        
        ctx.arc(mouse_x, mouse_y, radius, 0, 2*Math.PI);
        ctx.stroke();
         }
        
    }


 

 function clearCanvas(){
     ctx.clearRect(0,0,canvas.width,canvas.height);
 }