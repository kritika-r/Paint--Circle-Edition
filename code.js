 canvas= document.getElementById("myCanvas");
 colour="black";
 lineWidth="2";
 radius= 10;
 var mouse_x, mouse_y;
 mouseEvent="empty";
 ctx= canvas.getContext("2d");

canvas.addEventListener("mousedown", my_mousedown)
function my_mousedown(e){
    colour= document.getElementById("colour_input").value;
    lineWidth= document.getElementById("width_input").value;
    radius= document.getElementById("radius_input").value;

    mouseEvent="mouseDown";


}
canvas.addEventListener("mouseup", my_mouseup)
function my_mouseup(e){
    
    mouseEvent="mouseUp";
}
canvas.addEventListener("mouseleave", my_mouseleave)
function my_mouseleave(e){
    
    mouseEvent="mouseLeave";
}
canvas.addEventListener("mousemove", my_mousemove)
function my_mousemove(e){
    
 
    mouseEvent="mouseMove";


mouse_x= clientX - canvas.offsetLeft;
mouse_y= clientY - canvas.offsetTop;

if(mouseEvent=="mouseDown"){
    console.log("Current position of X and Y coordinates is=");
    console.log("X=" +mouse_x+ "Y=" +mouse_y);
    ctx.beginPath();
    ctx.strokeStyle= colour;
    ctx.lineWidth= lineWidth;
    ctx.arc= (mouse_x, mouse_y, radius, 0, 2* Math.PI);
    ctx.stroke();
}

}
function clearCanvas(){
    canvas.clearRect(0,0, canvas.width, canvas.height);
}