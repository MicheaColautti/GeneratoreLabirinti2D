function areValidParam() {
    

    var mazeSh=document.getElementById("mShape").selectedIndex;
    var pathSh=document.getElementById("pShape").selectedIndex;

    if((mazeSh==pathSh) || (mazeSh==4 && pathSh==3)){

        var iniPos=document.getElementById("sPos").selectedIndex;
        var finPos=document.getElementById("ePos").selectedIndex;

        if(iniPos!=finPos){
            return true;
        }else{
            alert("La posizione iniziale deve differire dalla posizione finale");
            return false;
        }

        
    }else{ 
        alert(
            "INSERISCI FORME COMPATIBILI:"+'\n'+
            "Rettangolare-Paralleli"+'\n'+
            "Rotondo-Curvilieni"+'\n'+
            "Triangolare-Triangolari"+'\n'+
            "Esagonale-Esagonali"+'\n'+
            "Esagonale-Triangolari"
        )
    }
}
