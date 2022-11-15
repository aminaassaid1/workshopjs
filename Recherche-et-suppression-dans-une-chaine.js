
function saiserPhrase(){
    document.getElementById('button').onclick=function(){
      var str = document.getElementById('phrase1').value;
      var index = str.indexOf(document.getElementById('mots').value);
      if(index !== -1){
        document.getElementById('resultat').innerHTML="Le mot existe!"
      } else{
        document.getElementById('resultat').innerHTML="Le mot n'existe pas!";
      }
    }
    document.getElementById('reset').onclick=function(){
      location.reload();
    }
  }

  function clearOcurences(){
    document.getElementById('clear').onclick=function(){

    var str = document.getElementById('phrase1').value;

    var index = document.getElementById('mots').value;

    var ret = str.replace ( index , '' );

    document.getElementById('resultat').innerHTML=ret;
    }

    document.getElementById('reset').onclick=function(){
      location.reload();
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
