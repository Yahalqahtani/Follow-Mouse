let mydiv = document.getElementById('main_div');

function Touch() {
    try {
        document.createEvent('TouchEvent');
        return true;
    } catch (e) {
        return false;
    }
}
// when move replace width with x value from mouse
const move = e => {
    try {
        var x = !Touch() ? e.pageX : e.touches[0].pageX;
    } catch (e) {
        console.log(e);
    }

    mydiv.style.width = x + 'px';
};

//for mouse
document.addEventListener('mousemove', e => {
    move(e);
});

// for touch
document.addEventListener('touchmove', e => {
    move(e);
});
