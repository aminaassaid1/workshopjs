
function dessinEtoile() {
    // print stars in Diamond-shaped pattern
    var etoile = document.getElementById("etoile").value;
    var res4 = document.getElementById("res4");
    var i, k;
    for (i = 1; i <= etoile; i++) {
        for (k = 1; k <= i; k++) {
            res4.innerHTML += "*";
        }
        res4.innerHTML += "<br>";
    }
}

document.getElementById('tableaux').onclick=function(){
    document.getElementById('tri').classList.toggle('hide');
    document.getElementById('recherche').classList.toggle('hide');

}
document.getElementById('chaines').onclick=function(){
    document.getElementById('RS').classList.toggle('hide');
    document.getElementById('voyelles').classList.toggle('hide');

}
document.getElementById('boucles').onclick=function(){
    document.getElementById('multiblication').classList.toggle('hide');
    document.getElementById('guess').classList.toggle('hide');
    document.getElementById('lonsage').classList.toggle('hide');

}
let menu = document.getElementById('menu-btn');
menu.addEventListener('click', ()=>{
    document.querySelector('body>nav').classList.toggle('show')
})
let menuIn = document.getElementById('menu-btn-in');
menuIn.addEventListener('click', ()=>{
    document.querySelector('body>nav').classList.toggle('show')
})

