function addition() {
    var x = Number(document.getElementById("val1").value);
    var y = Number(document.getElementById("val2").value);
    var z = x + y;
    document.getElementById("resultat").value = z ;
}
function soustraction() {
    var x = Number(document.getElementById("val1").value);
    var y = Number(document.getElementById("val2").value);
    var z = x - y;
    document.getElementById("resultat").value = z ;
}
function multiplcation() {
    var x = Number(document.getElementById("val1").value);
    var y = Number(document.getElementById("val2").value);
    var z = x * y;
    document.getElementById("resultat").value = z ;
}
function division() {
    var x = Number(document.getElementById("val1").value);
    var y = Number(document.getElementById("val2").value);
    var z = x / y;
    document.getElementById("resultat").value = z ;
    if(y==0){
        // document.getElementById("resultat").value = '';
        document.getElementById('div1').innerHTML='impossible'
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

