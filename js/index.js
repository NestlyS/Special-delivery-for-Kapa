document.body.style.height = screen.height + 'px';

let buttons = document.querySelectorAll('[data-button="select"]');
let blocks = document.querySelectorAll('.block');


let audio = new Audio();
audio.src = 'https://raw.githubusercontent.com/NestlyS/forKapa/master/sound/click.ogg';
audio.volume = 0.15;

let ring = new Audio();
ring.src = 'https://raw.githubusercontent.com/NestlyS/forKapa/master/sound/ring.mp3';
ring.volume = 0.7;

let bg = new Audio();
bg.src = 'https://raw.githubusercontent.com/NestlyS/forKapa/master/sound/try1.mp3';
bg.volume = 0.7;

ring.play();
setTimeout(() => bg.play(), 0.3);


function foo(button, block) {
    button.addEventListener('click', () => {
        buttons.forEach((item) => {
            item.classList.remove('element--selected');
        })
        button.classList.add('element--selected');
        audio.play();
        if (block !== undefined) {
            blocks.forEach((item) => {
                item.classList.remove('block--showed-up');
            })
            block.classList.add('block--showed-up');
        }
    });
};

buttons.forEach((item, index) => {
    foo(item, document.querySelector('.' + item.dataset.block));
});