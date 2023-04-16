canvas=document.getElementById("myCanvas")
var ctx=canvas.getContext("2d");
MouseEvent=" ";
ox=" ";
oy=" ";
canvas.addEventListener("mousedown",my_mousedown)
function my_mousedown(e){
    c=document.getElementById("clr").value;
    l=document.getElementById("wd").value;
    r=document.getElementById("rd").value;
    MouseEvent="mousedown";
}
canvas.addEventListener("mouseup",my_mouseup)
function my_mouseup(e){
    MouseEvent="mouseup";
}

canvas.addEventListener("mouseleave",my_mouseleave)
function my_mouseleave(e){
    MouseEvent="mouseleave"
}
canvas.addEventListener("mousemove",my_mousemove)
function my_mousemove(e){
    nx=e.clientX-canvas.offsetLeft;
    ny=e.clientY-canvas.offsetTop;
    if(MouseEvent=="mousedown"){
        ctx.beginPath();
        ctx.strokeStyle=c;
        ctx.lineWidth=l;
        ctx.arc(nx,ny,r,0,2*Math.PI)
        ctx.stroke(); 
    }
    ox=nx;
    oy=ny;
}