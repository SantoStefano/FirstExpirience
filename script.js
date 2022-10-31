let imgMasNode = ['<img src="./images/131.jpg" alt="d-131">', '<img src="./images/132.jpg" alt="d-132">', '<img src="./images/133.jpg" alt="d-133">', '<img src="./images/134.jpg" alt="d-134">', '<img src="./images/135.jpg" alt="d-135">', '<img src="./images/136.jpg" alt="d-136">', '<img src="./images/137.jpg" alt="d-137">', '<img src="./images/138.jpg" alt="d-138">', '<img src="./images/139.jpg" alt="d-139">', '<img src="./images/1310.jpg" alt="d-1310">', '<img src="./images/1311.jpg" alt="d-1311">', '<img src="./images/1312.jpg" alt="d-1312">', '<img src="./images/131c.jpg" alt="d-131">', '<img src="./images/132c.jpg" alt="d-132">', '<img src="./images/133c.jpg" alt="d-133">', '<img src="./images/134c.jpg" alt="d-134">', '<img src="./images/135c.jpg" alt="d-135">', '<img src="./images/136c.jpg" alt="d-136">', '<img src="./images/137c.jpg" alt="d-137">', '<img src="./images/138c.jpg" alt="d-138">', '<img src="./images/139c.jpg" alt="d-139">', '<img src="./images/1310c.jpg" alt="d-1310">', '<img src="./images/1311c.jpg" alt="d-1311">', '<img src="./images/1312c.jpg" alt="d-1312">' ];

let imgMas = Array.from(imgMasNode);
let shuffledArr = imgMas.sort(function(){
    return Math.random() - 0.5;
  });
  shuffledArr;

let cards = document.querySelectorAll('.cardback');
 for (let i=0; i<cards.length; i++) {
     cards[i].innerHTML = imgMas[i]; 
 }

let minute = 0;
let sec = 0;
countPairs = 0;
let timer = setInterval(function() {
    sec++;
    if (sec%60==0) {
        minute++;
        sec = 0;
        return;
    } 
    if (countPairs == 12) {
        clearInterval(timer);
        
        let timeDiv = document.createElement('div');
        timeDiv.classList.add('time');
        timeDiv.textContent = `Ваше время: 0${minute}мин.${sec}сек.`;
        document.querySelector('.container').innerHTML = ' ';
        document.querySelector('.container').append(timeDiv);
        
        let button = document.createElement('button');
        button.textContent = 'Играть ещё';
        button.classList.add('playAgain');
        document.querySelector('.time').append(button);
        button.onclick = function() {
                location.reload();
            }
        
    }
    
},1000);



let mas = [];
document.querySelector('.container').onclick = function(e) {
    
   
    if(e.target.className == 'card') {
        e.target.lastChild.classList.remove('hide');
        mas.push(e.target);
    }
    if (mas.length == 2 && mas[0].lastChild.lastChild.getAttribute('alt')==mas[1].lastChild.lastChild.getAttribute('alt')) {
       setTimeout(check, 1000);
       countPairs++;
       
       
    }
    else if (mas.length == 2 && mas[0].lastChild.lastChild.getAttribute('alt')!==mas[1].lastChild.lastChild.getAttribute('alt')) {
       setTimeout(check2, 1200);
    }
    
    function check() {
       mas.map(elem=>elem.classList.add('hide'));
       mas= [];
    }

    function check2() {
        mas.map(elem=>elem.lastChild.classList.add('hide'));
        mas = [];
    }
       
}




