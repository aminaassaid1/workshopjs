
function switcht() {
    var val = document.getElementById("input").value;
var val2 = document.getElementById("input2").value;
document.getElementById("input2").value = val;
document.getElementById("input").value = val2 ;
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

