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
        var iIntervalBorders = 1;
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
        setTimeout(function(){
            objet.animeBorders(oRectangle,iIntervalBorders,iInterval);
        },1000);
        setTimeout(function(){
            objet.animeColor(oRectangle);
        },1300);
        
    }
    animeColor(oRectangle){
        oRectangle.style.transition = "background-color 1s";
        oRectangle.style.backgroundColor = "black";
        var objet = this;
        setTimeout(function(){
            objet.animeColor2(oRectangle);
        },900);
    }
    animeColor2(oRectangle){
        oRectangle.style.backgroundColor = "white";
    }
    animeBorders(oRectangle,iIntervalBorders,iInterval){
        oRectangle.style.borderRadius = "0 "+iIntervalBorders+"px "+iIntervalBorders+"px 0";
        iIntervalBorders++;
        
        console.log(iIntervalBorders);
        if(iIntervalBorders<= 25){
            this.recallAnimationBorders(oRectangle,iIntervalBorders,iInterval);
        }
        else if(iIntervalBorders > 25){
            var iIntervalHauteur = 1;
            console.log(iIntervalHauteur);
            this.animeRectangle(oRectangle,iInterval,iIntervalHauteur)
        }
    }

    recallAnimationBorders(oRectangle,iIntervalBorders,iInterval){
        var objet = this;
        setTimeout(function(){
            objet.animeBorders(oRectangle,iIntervalBorders,iInterval);
        },25);
    }
    animeRectangle(oRectangle, iInterval,iIntervalHauteur){
        
        oRectangle.style.width = this.largeur + iInterval + "%";
        console.log(iIntervalHauteur);
        iInterval+= 0.8;
        var iIntervalScale = 1;
        if(iInterval <=99){
            this.recallAnimation(oRectangle,iInterval,iIntervalHauteur);
        }
        else if(iInterval >99){
            this.callAnimation2(oRectangle,iIntervalScale,iIntervalHauteur);
        }
    }

    recallAnimation(oRectangle,iInterval,iIntervalHauteur){
        var objet = this;
        oRectangle.style.transform = "scaleY("+iIntervalHauteur+")";
        iIntervalHauteur-=0.005;
        console.log(iIntervalHauteur);
        setTimeout(function(){
            objet.animeRectangle(oRectangle,iInterval,iIntervalHauteur);
        }, 5);
        
    }

    callAnimation2(oRectangle,iIntervalScale,iIntervalHauteur){
        oRectangle.style.transform = "scale("+ iIntervalScale  +", "+iIntervalHauteur+")";
        iIntervalScale -= 0.02;
        oRectangle.style.transformOrigin = "right center";
        console.log(oRectangle.style.transform);
        if(iIntervalScale >= -0.01){
            this.recallAnimation2(oRectangle,iIntervalScale,iIntervalHauteur);
        }
    }

    recallAnimation2(oRectangle,iIntervalScale,iIntervalHauteur){
        var objet = this;
        setTimeout(function(){
            objet.callAnimation2(oRectangle,iIntervalScale,iIntervalHauteur);
        },5)
    }
}