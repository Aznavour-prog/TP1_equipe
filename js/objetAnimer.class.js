class oRectangleanimer{
    constructor(hauteur,largeur,posX,posY){
        this.hauteur = hauteur;
        this.largeur = largeur;
        this.posX = posX;
        this.posY = posY;
        
        this.dessineRectangle(this.hauteur,this.largeur);
        
    }



    dessineRectangle(hauteur,largeur){
        var oSectionGlobal = document.querySelectorAll(".global")[0];
        var iInterval = 1;
        console.log(oSectionGlobal);
        var oRectangle = document.createElement("div");
        
        oRectangle.style.width = largeur + "%";
        oRectangle.style.height = hauteur + "%";
        oRectangle.style.position = "absolute";
        oRectangle.style.top = this.posY;
        oRectangle.style.left = this.posX;
        oRectangle.style.backgroundColor = "black";
        oRectangle.style.zIndex = 2;
        oRectangle.classList.add("rectangleIntro");
        oSectionGlobal.appendChild(oRectangle);
        var objet = this;
        setTimeout(function(){
            objet.changebackground(oRectangle);
        },1450);
        setTimeout(function(){
            objet.animeRectangle(oRectangle,iInterval);
        },2800);
        
        
    }
    changebackground(oRectangle){
        oRectangle.style.transition = "background-color 1s";
        oRectangle.style.backgroundColor = "lightgrey";
        var objet = this
        setTimeout(function(){
            objet.changebackground2(oRectangle);
        },800);
    }
    changebackground2(oRectangle){
        oRectangle.style.transition = "background-color 1s";
        oRectangle.style.backgroundColor = "black";
    }
    animeRectangle(oRectangle, iInterval){
        
        oRectangle.style.height = this.hauteur - iInterval + "%";
        console.log("lol");
        iInterval++;
        if(oRectangle.style.height != "0%"){
            this.recallAnimation(oRectangle,iInterval);
        }
    }

    recallAnimation(oRectangle,iInterval){
        var objet = this;
        setTimeout(function(){
            objet.animeRectangle(oRectangle,iInterval);
        }, 20);
        console.log("this");
    }
}