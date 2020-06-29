const colors = [0,1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F'];

const btn = document.querySelector('.js-btn');
const color = document.querySelector('.color');

btn.addEventListener('click', () => {
    //to collect 6digit hex color we use
    let Hexcolor = '#';
    for(let i=0; i<6; i++){
        Hexcolor += colors[RandNumb()];
    }
    color.textContent = Hexcolor;
    document.body.style.backgroundColor = Hexcolor;
});

function RandNumb(){
    return Math.floor(Math.random() * colors.length);
}