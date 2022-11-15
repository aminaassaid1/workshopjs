 function valider() {
    // console.log('test');
    var mois = document.getElementById('mois').value;
    var jour = document.getElementById('jour').value;
    var annee = document.getElementById('année').value;
    
    if  (annee > 0 && (mois == 12 || mois == 10 || mois == 8 || mois == 7 || mois == 07 || mois == 5 || mois == 3 || mois == 03 || mois == 1 || mois == 01 ) 
    && (jour <=30 && jour >= 1 ))
    {
        document.getElementById('res2').innerHTML = " la date est valide";
    }
    else if (annee > 0 && ( mois == 11 || mois == 9 || mois == 09 || mois == 6 || mois == 06 || mois == 4 || mois == 04 ) && (jour <= 31 && jour >= 1 ))
    {
        document.getElementById('res2').innerHTML = " la date est valide";
    }
    else if ( annee >0 && (mois == 2) && (jour >= 1 && jour <= 29) && (annee % 4 == 0))
    {
        document.getElementById('res2').innerHTML = "la date est valid"
    }
    else if ( annee >0 && (mois == 2) && (jour >= 1 && jour <= 28) && (annee %!4 == 0))
    {
        document.getElementById('res2').innerHTML = "la date est valid"
    }
    else {
        document.getElementById('res2').innerHTML = " la date est non valide";
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

