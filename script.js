let field = document.getElementById('field');
let cards = [0, 0, 1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8];
let rand = null;
var card1 = null;
var card2 = null;
var counter = 0;
var score = document.getElementById('score');
var temp = [];

for(i = 0; i < 18; i++){
    let div = document.createElement('div');
    div.className = 'card ' + 'card' + i;
    div.style.margin = '30px';
    div.addEventListener('click', flip) ;
    rand = Math.floor(Math.random() * cards.length);
    localStorage.setItem('card'+ i, cards[rand]);
    console.log('------');
    el = cards.splice(rand, 1);
    console.log(el);
    field.appendChild(div);
}


function flip(){
    let elClass = this.classList[1];
    let img = localStorage.getItem(elClass);
    this.style.background = 'url(cards/'+ img +'.jpg) no-repeat';
    if(!card1){
        card1 = this.style;
    }else{
        card2 = this.style;
        check();
    }
}

function hide(){
    temp.forEach((item, index, array) =>{
        item.background = 'url(img/back.png) no-repeat';
    });
    temp = [];
}

function check(){
    if(card1.background == card2.background){
        let result = [card1, card2];
        card1 = null;
        card2 = null;
        setTimeout(match, 1000, result);
    }else{
        temp.push(card1, card2);
        card1 = null;
        card2 = null;
        setTimeout(hide, 1000);
    }
}

function match(result){
    counter = counter + 2;
    score.innerText = 'Отгадано: '+ counter;
    result[0].visibility = "hidden";
    result[1].visibility = "hidden";
    if(counter >= 18){
        alert('Игра пройдена!');
        window.location.reload();
    }
}