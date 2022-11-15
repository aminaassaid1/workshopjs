
// AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA
var enterButton = document.getElementById('enterButton');
var againButton = document.getElementById('againButton');
var output = document.getElementById('outputText');
var tentative = 10 ;
var randomNumber = Math.ceil(Math.random()*50);
var i = 1 ;

function checkNumber(){
var input = document.getElementById('userInput').value;
if((tentative - i) == 0) {
    enterButton.setAttribute('disabled','')
}
if(input == randomNumber){
    output.innerHTML="You guessed right "+ ", "+ " it was "+ randomNumber;
    output.style.color="green";
}
else if(input>randomNumber && input<50){
    output.innerHTML="You guessed too high";
}
else if(input<randomNumber && input>1){
    output.innerHTML="You guessed too low";
}
else if(input<1){
    output.innerHTML="Higher, it has to be between 1 and 50";
}
else if(isNaN(input)){
    output.innerHTML="That's not a number!";
}
else{
    output.innerHTML="Lower, it has to be between 1 and 50";
}
document.getElementById("try").innerHTML = `restant ${tentative - i }`;
i++;


}

enterButton.addEventListener('click', checkNumber);
againButton.addEventListener('click', function(){
location.reload();
})

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



