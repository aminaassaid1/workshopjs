function compter(){
    var str =document.getElementById('texte').value;
    var voyelles = "aeiouyAEIOUY";
    var ctr=0;
    for(var x=0;x<str.length;x++){ // parcourir la chaine saisie par l'utilisateur
    for(var i=0;i<voyelles.length;i++){ // parcourir les voyelles
        if(str[x]==voyelles[i])
        {
            ctr++;
        }
    }
    document.getElementById("resultat").innerHTML="the number of vowel is "+ctr;
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

