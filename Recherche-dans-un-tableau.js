
let trier1 =[];
function trierTbl2() {
    var taillebtn = document.getElementById('taille2').value;
    var  Number1 = document.getElementById ('cas1').value;
    var  Number2 = document.getElementById ('cas2').value;
    var  Number3 = document.getElementById ('cas3').value;
    var  Number4 = document.getElementById ('cas4').value;
    var  Number5 = document.getElementById ('cas5').value;
    var  Number6 = document.getElementById ('cas6').value;
    var  Number7 = document.getElementById ('cas7').value;
    var  Number8 = document.getElementById ('cas8').value;
    if (taillebtn==1) {
        trier1.push(Number1);
        showNumers1();
    }
    if (taillebtn==2) {
        trier1.push(Number1);
        trier1.push(Number2);
        showNumers1();
    }
    if (taillebtn==3) {
        trier1.push(Number1);
        trier1.push(Number2);
        trier1.push(Number3);
        showNumers1();
    }
    if (taillebtn==4) {
        trier1.push(Number1);
        trier1.push(Number2);
        trier1.push(Number3);
        trier1.push(Number4);
        showNumers1();
    }
    if (taillebtn==5) {
        trier1.push(Number1);
        trier1.push(Number2);
        trier1.push(Number3);
        trier1.push(Number4);
        trier1.push(Number5);
        showNumers1();
    }
    if (taillebtn==6) {
        trier1.push(Number1);
        trier1.push(Number2);
        trier1.push(Number3);
        trier1.push(Number4);
        trier1.push(Number5);
        trier1.push(Number6);
        showNumers1();
    }
    if (taillebtn==7) {
        trier1.push (Number1);
        trier1.push (Number2);
        trier1.push (Number3);
        trier1.push (Number4);
        trier1.push (Number5);
        trier1.push (Number6);
        trier1.push (Number7);
        showNumers1();
    }
    if (taillebtn==8) {
        trier1.push (Number1);
        trier1.push (Number2);
        trier1.push (Number3);
        trier1.push (Number4);
        trier1.push (Number5);
        trier1.push (Number6);
        trier1.push (Number7);
        trier1.push (Number8);
        showNumers1();
    }
}

function showNumers1() {
    var afch1="";
    function sort( trier1) {
        for (var i = 0; i < trier1.length; i++) {
            var min=i;
            for (var j = i+1; j < trier1.length; j++) {
                if (trier1[j] < trier1[min]) {
                    min = j;
                }   
            }
            var tmp = trier1[i];
            trier1[i] = trier1[min];
            trier1[min] = tmp;
        }    
        return;    
    } 
    sort(trier1);
    for (var i = 0; i < trier1.length; i++) {
        afch1 += `
            <table style="border-collapse:collapse;margin-top:20px;" border="2">
                    <tr style="width:100px;height:fit-content;">    
                    <td style="font-size:20px;text-align:center;width:50px;height:50px;margin:0 0 0 10px;">${trier1[i]}</td> 
                    </tr>    
            </table>
        `;
    }
    document.getElementById('display1').innerHTML = afch1;
    document.getElementById('display1').style.display='flex';
    document.getElementById('display1').style.textAlign='center';
}

function rechMot() {
    var mot = document.getElementById('rech').value;
    let tab = Array;
    tab[1]= document.getElementById('cas1').value;
    tab[2]= document.getElementById('cas2').value;
    tab[3]= document.getElementById('cas3').value;
    tab[4]= document.getElementById('cas4').value;
    tab[5]= document.getElementById('cas5').value;
    tab[6]= document.getElementById('cas6').value;
    tab[7]= document.getElementById('cas7').value;
    tab[8]= document.getElementById('cas8').value;
    if (mot == tab[1]) {
        document.getElementById('rech2').innerHTML= "Le nombre existe";
    }
    else if (mot == tab[2]) {
        document.getElementById('rech2').innerHTML= "Le nombre existe";
    }
    else if (mot == tab[3]) {
        document.getElementById('rech2').innerHTML= "Le nombre existe";
    }
    else if (mot == tab[4]) {
        document.getElementById('rech2').innerHTML= "Le nombre existe";
    }
    else if (mot == tab[5]) {
        document.getElementById('rech2').innerHTML= "Le nombre existe";
    }
    else if (mot == tab[6]) {
        document.getElementById('rech2').innerHTML= "Le nombre existe";
    }
    else if (mot == tab[7]) {
        document.getElementById('rech2').innerHTML= "Le nombre existe";
    }
    else if (mot == tab[8]) {
        document.getElementById('rech2').innerHTML= "Le nombre existe";
    }
    else { 
        document.getElementById('rech2').innerHTML= "Le nombre n'existe pas";
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

