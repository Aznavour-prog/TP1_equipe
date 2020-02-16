(function(){

    let menu = document.querySelector("nav");

    menu.style.position = "absolute";
    menu.style.top = "350px";

    let sh = document.body.scrollTop;

    console.log(sh);

    setTimeout(test, 10);

    let ad;
    let i=0;

    function mytF(){

        ad = setTimeout(test, 1000);

    }

    function test() {
        i++
        console.log(i);
        
    }

}())