class oRectangleanimer{
    constructor(hauteur,largeur,posX,posY){
        this.hauteur = hauteur;
        this.largeur = largeur;
        this.posX = posX;
        this.posY = posY;
        this.dessineRectangle(this.hauteur,this.largeur);
    }



    dessineRectangle(hauteur,largeur){
        var oSectionGlobal = document.querySelectorAll(".global")[1];
        
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

        this.animeRectange();
    }
}