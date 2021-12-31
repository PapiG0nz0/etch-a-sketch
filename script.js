const container = document.querySelector('.container');
const buttons = document.querySelector('.buttons');
const btnBlack = document.createElement('button');
const btnGray = document.createElement('button');
const btnCold = document.createElement('button');
const btnWarm = document.createElement('button');
const btnSize = document.createElement('button');


//Here we create the grid 
function createGrid(col, row){
  for(let i = 0 ; i < (col * row); i++ ){
    const div = document.createElement('div');
    div.style.border = '1px solid black';
    container.style.gridTemplateColumns = `repeat(${col}, 1fr)`;
    container.style.gridTemplateRows = `repeat(${row}, 1fr)`;
    container.appendChild(div).classList.add('box');
  }
}

createGrid(16,16);

//Gray color painting
function grayColor() {
  const boxes = container.querySelectorAll('.box');
  btnGray.textContent = 'GRAY';
  btnGray.addEventListener('click', () => {
    boxes.forEach(box => box.addEventListener('mouseover', () => {
      let randomNumber = Math.floor(Math.random() * 256)
      let grayScale = `rgb(${randomNumber},${randomNumber},${randomNumber})`
      box.style.background = grayScale;
    }))

  })

  buttons.appendChild(btnGray).classList.add('btn')
}
grayColor();

//Black color painting
function blackColor() {
  const boxes = container.querySelectorAll('.box');
  btnBlack.textContent = 'BLACK';
  btnBlack.addEventListener('click', () => {
    boxes.forEach(box => box.addEventListener('mouseover', () => {
      box.style.background = 'black';
    }))

  })

  buttons.appendChild(btnBlack).classList.add('btn')
}
blackColor();