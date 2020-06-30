const colors = [0,1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F'];

const simpBtn = document.querySelector('.js-btn');
const gradBtn = document.querySelector('.grad-btn');
const color = document.querySelector('.color');

//Simple Background-color generate
simpBtn.addEventListener('click', ()=> {
    //to collect 6digit hex color we use
    let HexColor = '#';
    HexColor = loopThrough(HexColor);
    color.textContent = HexColor;
    document.body.style.background = HexColor;
});

//Gradient Background-color generate
gradBtn.addEventListener('click', ()=> {
    let gradColor1 = '#';
    let gradColor2 = '#';

    gradColor1 = loopThrough(gradColor1);
    gradColor2 = loopThrough(gradColor2);

    document.body.style.background = `linear-gradient(to right, ${gradColor1}, ${gradColor2}`;
    color.textContent = `linear-grad(to right, ${gradColor1} , ${gradColor2})`;
});

//DRY(Don't Repeat Yourself) pattern
function loopThrough(value){
    for (let i=0; i<6; i++){
        value += colors[RandNumb()];
    }
    return value;
}

function RandNumb(){
    return Math.floor(Math.random() * colors.length);
}