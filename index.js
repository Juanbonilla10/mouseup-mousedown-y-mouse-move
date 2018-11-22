var d=document.getElementById("canvas");
var lienzo=d.getContext("2d");
document.addEventListener("mousedown",presionarMouse);
document.addEventListener("mousemove", movertodo);
document.addEventListener("mouseup",soltarmouse);

var x;
var y;
var colorcito="#000000";
var mousemove="press"

dibujarlineas("black",0,0,0,500);
dibujarlineas("black",0,0,800,0);
dibujarlineas("black",0,500,800,500);
dibujarlineas("black",800,0,800,800);

function dibujarlineas(color,xinicial,yinicial,xfinal,yfinal)
{
lienzo.beginPath();
lienzo.strokeStyle=color;
lienzo.lineWidth= 5;
lienzo.moveTo(xinicial,yinicial);
lienzo.lineTo(xfinal,yfinal);
lienzo.stroke();
lienzo.closePath();
}


function presionarMouse(evento)
{
  mousecondition="press";
   x=evento.offsetX;
   y=evento.offsetY;

  dibujarlineas(colorcito,x,y,x,y+1);




}
function movertodo(evento)
{
  x=evento.offsetX;
  y=evento.offsetY;


  if (mousecondition=="press")
  {
    dibujarlineas(colorcito,x,y,x,y+1);

  }

}
function soltarmouse(evento)
{
  mousecondition="no press";
  x=evento.offsetX;
  y=evento.offsetY;

  dibujarlineas(colorcito,x,y,x,y+1);


}
