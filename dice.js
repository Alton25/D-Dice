let buttonTwo = document.createElement('button');
let btnText = document.createTextNode("Roll Dice");
buttonTwo.appendChild(btnText);
let myDiv = document.getElementById('allButton');
myDiv.appendChild(buttonTwo);
buttonTwo.addEventListener("click", function () {
    dieArr.forEach(i => i.Roll());
})


let container = document.getElementById('dice-container');

class Dice {
    value;
    div;
    text;
    constructor() {

        this.div = document.createElement('div');
        this.div.classList.add('dice');
        container.appendChild(this.div);
        this.text = document.createTextNode('1');
        this.div.appendChild(this.text);
        this.Roll();
    }

    Roll() {
        this.value = Math.floor((Math.random() * 6) + 1);
        this.div.innerHTML = uniArr[this.value - 1];

    }
}
let button = document.getElementById('dice-button');
let uniArr = ['\u2680', '\u2681', '\u2682', '\u2683', '\u2684', '\u2685'];

let dieArr = [];
button.addEventListener('click', function () {
    dieArr.push(new Dice())
});
let buttonThree = document.createElement('button');
let btnText2 = document.createTextNode("Sum Dice");
buttonThree.appendChild(btnText2);
myDiv.appendChild(buttonThree);
buttonThree.addEventListener("click", sumDice);
function sumDice(){
    let sum =0;
    dieArr.forEach(die  => {
        
        sum += die.value;
        
    });
    alert(sum);
}
