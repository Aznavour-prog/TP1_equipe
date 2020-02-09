class oRectangleanimer{
    constructor(hauteur,largeur){
        this.hauteur = hauteur;
        this.largeur = largeur;

        this.dessineRectangle(this.hauteur,this.largeur);
    }



    dessineRectangle(hauteur,largeur){
        var oSectionGlobal = document.querySelectorAll(".global")[1];
        
        console.log(oSectionGlobal);
        var oRectangle = document.createElement("div");
        oRectangle.style.width = largeur + "px";
        oRectangle.style.height = hauteur + "px";
        oRectangle.style.backgroundColor = "black";
        oRectangle.classList.add("rectangleIntro");
        oSectionGlobal.appendChild(oRectangle);
    }
}