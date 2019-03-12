TweenMax.from('h1', 1, {
    delay: .5,
    x: -300,
    ease: Power2.easeOut
});
TweenMax.from('h2', 1, {
    delay: 1.8,
    x: 300,
    ease: Power2.easeOut
});

TweenMax.to(['h1,h2'], .5, {
    delay: 4,
    opacity: 0
});

TweenMax.to('#achtergrond', 3, {
    delay: 4.5,
    left: 0
});

TweenMax.staggerFrom('li', .7, {
    delay: 5,
    opacity: 0,
    x: 30,
    ease: Back.easeOut
}, 1);

TweenMax.from('button', .5, {
    delay: 8,
    scale: 0
});

TweenMax.to('li:first-child', .4, {
    delay: 9,
    color: '#0039ff',
    repeat: 1,
    yoyo: true
});

document.getElementById("figure").onclick = function () {
    location.href = "https://www.baasenbaas.nl/contact/";
};
