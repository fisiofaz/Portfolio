const mario = document.querySelector('.mario');
const pipe = document.querySelector('.pipe');

const jump = () => {
  mario.classList.add('jump');
  
  setTimeout(() => {mario.classList.remove('jump');}, 500);
}

const loop = setTimeout(() => {
  const pipePosition = pipe.offsetleft;
  const marioPosition = +window.getComputedStyle(mario).bottom.replace('px', '');

  if (pipePosition <= 120 && pipePosition > 0 && marioPosition < 112) {
    pipe.style.animation = 'nome';
    pipe.style.left = `${pipePosition}px`;

    mario.style.animation = 'nome';
    mario.style.bottom = `${marioPosition}px`;

    mario.src = './img/game-over.png';
    mario.style.width = '75px';
    mario.style.marginLeft = '50px';

    clearInterval(loop); 
  }
}, 10)

document.addEventListener('keydown', jump);