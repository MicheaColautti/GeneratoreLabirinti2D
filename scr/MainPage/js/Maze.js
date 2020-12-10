
var rows, cols;
var w = 10;//dimensione
var mShape;
var canvas;
var pShape;
var seed;
var width;
function setParam(values){
    
    cols=values.l1*w;
    if (typeof values.l2 !== 'undefined'){
      rows=values.l2*w;
    }
    mShape=values.mazeShape;
    pShape=values.pathShape;
    seed=values.seed;
    document.getElementById("maze");
    generateMaster();
    
}
    


function generateMaster() {

  canvas = document.getElementById("maze");
  width=canvas.width;
  var c = document.getElementById("maze");
  var ctx = c.getContext("2d");
  
  var dum = new Array();
  for(var i=0; i<seed.length; i++){
    dum[i]= parseInt(seed.charAt(i));
  }
  seed=dum;
  if(mShape=="Rect"){
    genrateRect(ctx);
  }else if(mShape=="Circ"){
    generateCiric(ctx,canvas);
  }else if(mShape=="Tria"){
    generateTria(ctx);
  }else{
    generateExa(ctx);  
  }
}

function genrateRect(ctx){
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.beginPath();
  ctx.strokeRect(0, 0, cols, rows);
  ctx.stroke();
  ctx.stroke();
  helperRect(ctx,0);
  // helperRect(ctx,9);

}

function generateCiric(ctx,canvas){

  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.beginPath();
  var arco=cols;
  ctx.arc(canvas.width/2, canvas.height/2, arco, 0, 2*Math.PI);
  ctx.stroke();
  helperCirc(ctx,arco,canvas);


}

function generateTria(ctx){

  ctx.clearRect(0, 0, width, canvas.height);
  var width = width;
  //var height = canvas.height;
  var cent=width/2;
  ctx.beginPath();
  ctx.moveTo(cent, 10);

  var down=(Math.sin(60)*(rows/Math.sin(90))*-1);
  var lefRig=(Math.sin(60)*(rows/Math.sin(90))*-1)/2;
  ctx.lineTo(cent-lefRig,10+down);
  ctx.moveTo(cent-lefRig,10+down);
  ctx.lineTo(cent+lefRig,10+down);
  ctx.lineTo(cent, 10);
  ctx.stroke();

}

function generateExa(ctx){

}

function findNum(sValue,eValue){
  var newSeed=seed.sort();
  return (newSeed[eValue] - newSeed[sValue])/2;
}

//#region Helper for Rect


function helperRect(ctx,i){
    
    var posW=(findNum(0+i,2+i))*w;
    var posH=(findNum(1-i,3-i))*w;
    
    //#region validazione valori 1
    if(posW<15){
      posW=w;
    }else if(posW>cols){
      posW-=cols;
    }

    if(posH<15){
      posH=w;
    }else if(posW>rows){
      posH-=rows;
    }
    //#endregion
    
    //#region validazione valori 2
    var interruptW=(findNum(0+i,2+i))*w;
    var interruptH=(findNum(1-i,3-i))*w;
    
    
    if(interruptW<15){
      interruptW+=5;
    }else if(interruptW>45){
      interruptW-=5;
    }

    if(interruptH<15){
      interruptH+=-5;
    }else if(interruptH>45){
      interruptH-=5;
    }

    posW=Math.ceil(posW/10)*10;
    posH=Math.ceil(posH/10)*10;
    interruptH=Math.ceil(interruptW/10)*10;
    interruptW=Math.ceil(interruptH/10)*10;

    //#endregion
    draw(ctx,posW,posH,interruptW,interruptH);
}
function draw(ctx,posW,posH,interruptW,interruptH){
  
    //#region FIRST STEP
    //Disegna le line verticali
   
    ctx.beginPath();
    ctx.moveTo(posW, 0);
    ctx.lineTo(posW,cols-interruptW);
      ctx.moveTo(posW, cols-interruptW+w);
      ctx.lineTo(posW,cols);
      
      ctx.moveTo(posW+w, 0);
      ctx.lineTo(posW+w,cols-interruptW);
      ctx.moveTo(posW+w, cols-interruptW+w);
      ctx.lineTo(posW+w,cols);
      ctx.stroke();
    
      //Disegna le line orizzontaale
      ctx.moveTo(0, posH);
      ctx.lineTo(rows-interruptH,posH);
      ctx.moveTo(rows-interruptH+w, posH);
      ctx.lineTo(rows,posH);
    
      ctx.moveTo(0, posH+w);
      ctx.lineTo(rows-interruptH,posH+w);
      ctx.moveTo(rows-interruptH+w, posH+w);
      ctx.lineTo(rows,posH+w);
      
      

    //#endregion

      ctx.moveTo(rows-interruptH, cols-interruptW);
      ctx.lineTo(0,cols-interruptW);

      ctx.moveTo(rows-interruptH, cols-interruptW+w);
      ctx.lineTo(0,cols-interruptW+w);

      ctx.moveTo(cols-interruptH+w, cols-interruptW);
      ctx.lineTo(cols,cols-interruptW);

      ctx.moveTo(cols-interruptH+w, cols-interruptW+w);
      ctx.lineTo(cols,cols-interruptW+w);      

      ctx.moveTo(cols-interruptW, 0);
      ctx.lineTo(cols-interruptW,rows);
      
      ctx.moveTo(cols-interruptW+w, 0);
      ctx.lineTo(cols-interruptW+w,rows);

  
    
      ctx.stroke();
      ctx.stroke();
      //svuota percorso orizzontale
      ctx.clearRect(1, posH+1, rows-2, w-2.5);
        
      //Svuota percorso verticale
      ctx.clearRect(posW+1, 1, w-2, cols-2);
}




//#endregion
//#region Heper for Circ
function helperCirc(ctx,arco,canvas){
  var circNum=(findNum(0,5));
  var circSizes=cols/circNum;
  
  for(var i=0;i<=circNum;i++){
    //ctx.beginPath();    
    ctx.arc(canvas.width/2, canvas.height/2, arco-i*circSizes, 0, 2*Math.PI);
  }
  ctx.stroke();


}
//#endregion
