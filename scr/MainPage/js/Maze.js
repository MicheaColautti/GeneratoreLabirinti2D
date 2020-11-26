
var cols, rows;
var w = 10;//dimensione
var shape;
var canvas;
function setParam(l1,l2,mazeShape){
    cols=l1*w;
    if (typeof l2 !== 'undefined'){
      rows=l2*w;
    }
    shape=mazeShape;
    document.getElementById("maze");
    generateMaster();
    
}
    


function generateMaster() {
  canvas = document.getElementById("maze");
  var c = document.getElementById("maze");
  var ctx = c.getContext("2d");
  
  if(shape=="Rect"){
    genrateRect(ctx);
  }else if(shape=="Circ"){
    generateCiric(ctx);
  }else if(shape=="Tria"){
    generateTria(ctx);
  }else{
    generateExa(ctx);  
  }
}
    

function genrateRect(ctx){

  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.strokeRect(0, 0, rows, cols);
  ctx.stroke();

}


function generateCiric(ctx){
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.arc(100, 100,cols, 0, 2 * Math.PI);
  ctx.stroke();


}
function generateTria(ctx){

  ctx.clearRect(0, 0, canvas.width, canvas.height);
  var width = canvas.width;
  //var height = canvas.height;
  var cent=width/2;
  ctx.beginPath();
  ctx.moveTo(cent, 10);

  var down=(Math.sin(60)*(cols/Math.sin(90))*-1);
  var lefRig=(Math.sin(60)*(cols/Math.sin(90))*-1)/2;
  ctx.lineTo(cent-lefRig,10+down);
  ctx.moveTo(cent-lefRig,10+down);
  ctx.lineTo(cent+lefRig,10+down);
  ctx.lineTo(cent+lefRig,10+down);
  ctx.lineTo(cent, 10);
  ctx.stroke();

}

function generateExa(ctx){



}


