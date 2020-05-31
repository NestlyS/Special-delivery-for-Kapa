document.body.style.height = screen.height + 'px';

let buttons = document.querySelectorAll('[data-button="select"]');
let blocks = document.querySelectorAll('.block');


let audio = new Audio();
audio.src = '../sound/click.ogg';
audio.volume = 0.15;

let bg = new Audio();
bg.src = '../sound/bg.wav';
bg.volume = 0.1;
bg.autoplay = true;

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