function valider() {
    var entrer = parseInt(document.getElementById('tableau').value)
    for(x=1 ; x<= entrer ;x++) {
        var inp = document.createElement('input')
        inp.setAttribute('id', 'input'+x)
        inp.setAttribute('type', 'Number')
        document.getElementById('resultat').appendChild(inp)
    }
}
function trier() {
    var entrer = parseInt(document.getElementById('tableau').value)
    for(x=0 ; x< entrer ;x++) {
        var inpt = document.createElement('input')
        inpt.setAttribute('id', 'inpt'+x)
        document.getElementById('existe').appendChild(inpt)
    }
    const array = []
    const arrayy = []
    for (let i = 1; i <= entrer; i++) {
        array.push(parseInt(document.getElementById('input'+i).value))
    }
    for (let i = 0; i < entrer; i++) {
        let min = Math.min(...array)
        const index = array.indexOf(min);
        arrayy.push(min)
        document.getElementById('inpt'+i).value = min
        array.splice(index,1)
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

