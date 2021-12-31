const container = document.querySelector('.container');
const buttons = document.querySelector('.buttons');
const btnBlack = document.createElement('button');
const btnGray = document.createElement('button');
const btnRgb = document.createElement('button');
const btnCold = document.createElement('button');
const btnWarm = document.createElement('button');
const btnNeon = document.createElement('button');
const btnSize = document.createElement('button');

//Resize the grid
function reSet(){
  const boxes = container.querySelectorAll('.box');
  boxes.forEach( box => box.remove())
}

function reSize(){
  btnSize.textContent = 'GRID SIZE';
  btnSize.addEventListener('click', () => {
    let newSize = prompt('Choose your new grid size');
    if( newSize === null || newSize < 1){
      reSet();
      createGrid(16,16);
      grayColor();
      blackColor();
      rgbColor();
      coldColor();
      warmColor();
      neonColor();
    } else  {
      reSet();
      createGrid(newSize,newSize)
      grayColor();
      blackColor();
      rgbColor();
      coldColor();
      warmColor();
      neonColor();
    }
  })
  buttons.appendChild(btnSize).classList.add('btn')
}
reSize();

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

//RGB color painting
function rgbColor() {
  const boxes = container.querySelectorAll('.box');
  btnRgb.textContent = 'RAINBOW';
  btnRgb.addEventListener('click', () => {
    boxes.forEach(box => box.addEventListener('mouseover', () => {
      let r = Math.floor(Math.random() * 255)
      let g = Math.floor(Math.random() * 255)
      let b = Math.floor(Math.random() * 255)
      box.style.background = `rgb(${r},${g},${b})`
    }))

  })

  buttons.appendChild(btnRgb).classList.add('btn')
}
rgbColor();

//Cold color painting
function coldColor(){
  const boxes = container.querySelectorAll('.box');
  btnCold.textContent = 'COLD';
  btnCold.addEventListener('click', () => {
    boxes.forEach(box => box.addEventListener('mouseover', () => {
      const cold = ['#1A374D', '#406882', '#6998AB', '#B1D0E0'];
      const randomCold = Math.floor(Math.random() * cold.length);
      box.style.background = cold[randomCold];
    }))

  })
  buttons.appendChild(btnCold).classList.add('btn')
}
coldColor();

//Warm color painting
function warmColor(){
  const boxes = container.querySelectorAll('.box');
  btnWarm.textContent = 'WARM';
  btnWarm.addEventListener('click', () => {
    boxes.forEach(box => box.addEventListener('mouseover', () => {
      const warm = ['#AA4A30', '#D57149', '#E89F71', '#EDCFA9'];
      const randomWarm = Math.floor(Math.random() * warm.length);
      box.style.background = warm[randomWarm];
    }))

  })
  buttons.appendChild(btnWarm).classList.add('btn')
}
warmColor();

//Neon color painting
function neonColor(){
  const boxes = container.querySelectorAll('.box');
  btnNeon.textContent = 'NEON';
  btnNeon.addEventListener('click', () => {
    boxes.forEach(box => box.addEventListener('mouseover', () => {
      const neon = ['#93FFD8', '#FF5DA2', '#9C19E0', '#000D6B', '#160040'];
      const randomNeon = Math.floor(Math.random() * neon.length);
      box.style.background = neon[randomNeon];
    }))

  })
  buttons.appendChild(btnNeon).classList.add('btn')
}
neonColor();

