//lógica para fazer o mario pular
const mario = document.querySelector('.mario'); //pegar o seletor css do mario
const pipe = document.querySelector('.pipe'); //pegar o seletor css do pipe

const jump = () => {
    mario.classList.add('jump');

    setTimeout(()=> {
        mario.classList.remove('jump');  fd
    }, 500);
}

//lógica para fazer o mario bater no tubo
const loop = setInterval(() => {
    const pipePosition = pipe.offsetLeft; //pegar o deslocamento esquerdo
    
    const marioPosition = +window.getComputedStyle(mario).bottom.replace('px', ''); //não podemos pegar offsetBottom, então usamos o getComputedStyle para pegar os styles aplicados [tipo o bottom] | o + é para transformar a string getComputedStyle em number 

    if(pipePosition <= 120 && pipePosition > 0 && marioPosition < 80){     

        pipe.style.animation = 'none';
        pipe.style.left = `${pipePosition}px`;

        mario.style.animation = 'none';
        mario.style.bottom = `${marioPosition}px`;

        mario.src = './images/game-over.png';
        mario.style.width = '80px';
        mario.style.marginLeft = '30px';

        clearInterval(loop);
    }
}, 10);

document.addEventListener('keydown', jump);