const target = document.getElementsByClassName("side-left")

function aumentarLeft(){
    const windowTop = window.pageYOffset;
    target.forEach(function(e){
        console.log(e.offsetTop);
    });
}

window.addEventListener("scroll", function(){
    aumentarLeft();
})
