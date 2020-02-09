class oRectangleanimerDown{
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
        oRectangle.style.backgroundColor = "black";
        oRectangle.style.zIndex = 2;
        oRectangle.classList.add("rectangleIntro");
        oSectionGlobal.appendChild(oRectangle);
        var objet = this;
        setTimeout(function(){
            objet.animeRectangle(oRectangle,iInterval);
        },3000);
        //this.animeRectangle(oRectangle, iInterval);
    }

    animeRectangle(oRectangle, iInterval){
    
        oRectangle.style.height = this.hauteur - iInterval + "%";
        oRectangle.style.transform = "translate(0px," + (iInterval * 9.08) + "px)";
        console.log(oRectangle.style.transform);
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