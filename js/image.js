
function changeBg() {
    changeBoxBG(".boks-e");
    changeBoxBG(".boks-h");
    changeBoxBG(".boks-j");
}

function changeBoxBG(box) {
    const images = [
        'url("images/Fotograf Siv Sivertsen 103.jpg")',
        'url("images/Fotograf Siv Sivertsen 96.jpg")',
        'url("images/Fotograf Siv Sivertsen 88.jpg")',
        'url("images/Fotograf Siv Sivertsen 85.jpg")'
    ];

    const boks = document.querySelector(box);    
    const picture = images[Math.floor(Math.random() * images.length)];

    if(boks.style.backgroundImage != picture) {
        boks.style.backgroundImage = picture;
    }

}

setInterval(changeBg,4000);
window.onload = changeBg(); // initial image.
