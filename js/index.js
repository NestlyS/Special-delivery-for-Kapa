let url = 'https://raw.githubusercontent.com/NestlyS/forKapa/master/sound/';
//url = '../sound/';

document.body.style.height = screen.height + 'px';

let buttons = document.querySelectorAll('[data-button="select"]');
let blocks = document.querySelectorAll('.block');
let container = document.querySelector('.container');
let waitBlock = document.querySelector('.wait');


let audio = new Audio();
audio.src = url + 'click.ogg';
audio.volume = 0.15;

let ring = new Audio();
ring.src = url + 'ring.mp3';
ring.volume = 0.7;

let kate = new Audio();
kate.src = url + 'kate.mp3';
kate.volume = 0.7;

let andrey = new Audio();
andrey.src = url + 'andrey.3gpp';
andrey.volume = 0.7;

let playingNow;

buttons.forEach((item) => {
    if (item.dataset.type === 'kate') {
        item.addEventListener('click', playSpeechOnce(kate));
    }
    if (item.dataset.type === 'andrey') {
        item.addEventListener('click', playSpeechOnce(andrey));
    }
});


function playSpeechOnce(speech) {
    let once = true;
    return function() {
        if (playingNow !== undefined) {
            playingNow.addEventListener('ended', () => {
                setTimeout(() => {
                    playSpeechOnce(speech);
                }, 1000);
            });
            return 0;
        }
        if (once) {
            playingNow = speech;
            waitBlock.classList.add('wait--showed');
            ring.play();
            setTimeout(() => {
                speech.play();
                speech.addEventListener('ended', () => {
                    waitBlock.classList.remove('wait--showed');
                    playingNow = undefined;
                });
            }, 400);
            once = false;
        }
    }
}





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