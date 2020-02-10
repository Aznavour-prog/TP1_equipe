class oRectangleanimerHorizontal{
    constructor(hauteur,largeur,posX,posY){
        this.hauteur = hauteur;
        this.largeur = largeur;
        this.posX = posX;
        this.posY = posY;
        
        this.dessineRectangle(this.hauteur,this.largeur);
        
    }



    dessineRectangle(hauteur,largeur){
        var oSectionGlobal = document.querySelectorAll(".global")[1];
        var iInterval = 1;
        console.log(oSectionGlobal);
        var oRectangle = document.createElement("div");
        
        oRectangle.style.width = largeur + "%";
        oRectangle.style.height = hauteur + "%";
        oRectangle.style.position = "absolute";
        oRectangle.style.top = this.posY + "%";
        oRectangle.style.left = this.posX;
        oRectangle.style.backgroundColor = "white";
        oRectangle.style.zIndex = 3;
        oRectangle.classList.add("rectangleIntro");
        oSectionGlobal.appendChild(oRectangle);
        var objet = this;
        
        
        
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