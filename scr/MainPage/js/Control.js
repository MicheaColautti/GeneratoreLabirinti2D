var mazeShape;
var pathShape;
var loops;
var seed;
var l1;
var l2;
var soluNum;
var startPos;
var endPos;


function getControls(){
    mazeShape=document.getElementById("mShape").value;
    pathShape=document.getElementById("pShape").value;
    startPos=document.getElementById("sPos").value;
    endPos=document.getElementById("ePos").value;

    if(isDropFull(mazeShape) && isDropFull(pathShape) && isDropFull(startPos) && isDropFull(endPos)){
        //var x=document.getElementById("mazeShape").selectedIndex;
        
        
        l1=document.getElementById("l1").value;
        soluNum=document.getElementById("nSolu").value;
        if(isNumFull(l1) && isNumFull(soluNum)){
            
            loops=document.getElementById("loop").value;
            seed=document.getElementById("seed").value;

            if(isValidSeed(seed)){
                
                if(mazeShape=="Rect"){
                    l2=document.getElementById("l2").value;
                    if(isNumFull(l2)){
                        alert("all OK!");
                        generateMaze();
                        
                        
                    }else{
                        alert("Se la forma è rettangolare devi inserie 2 lati");
                    }
                }else{
                    
                }
            }else{
                seed=Math.floor((Math.random()*1000000)+1);
                document.getElementById("seed").value=seed;
            }
            
        }else{
            alert('Inserisci il "Lato 1" e il numero di solouzioni');
        }
    }

    
    
    /*alert(
        "mazeShape: "+mazeShape+"\n"+
        "pathShape: "+pathShape+"\n"+
        "loops: "+loops+"\n"+
        "seed: "+seed+"\n"+
        "l1: "+l1+"\n"+
        "l2: "+l2+"\n"+
        "soluNum: "+soluNum+"\n"+
        "startPos: "+startPos+"\n"+
        "endPos: "+endPos+"\n"+
        "pixels: "+pixels
    )*/

}

function  isDropFull(control){
    
    if(control=="def"){
        alert("Accertarsi di completare tutti i menù a tendina per favore");
        return false;
    }else{
        return true
    } 
}
function isNumFull(num){
    if(Number.isNaN(num)){
       alert("Completa i campi testo in maniera opportuna");
       return false;
    }
    
    if(num==""){
        return false;
    }else{
        if(num>0){
            return true;
        }else{
            alert("Insersci due numeri maggiori di 0");
            return false;
        }
    }
    

}

function isValidSeed(num){

    
    if(Number.isNaN(num)){
        alert("Il seed deve essere un numero a 6 cifre");
        return false;
    }

    if(num==""){
        
        return false;
        
    }
    if(num>100000){//6 digit seed
        return true;
    }else{
        
        alert("Il seed deve essere un numero a 6 cifre");
        return false;
    }

}
