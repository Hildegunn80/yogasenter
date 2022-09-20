
function changeBg() {    
    const images = [
        'url("/images/-® Fotograf Siv Sivertsen 88.jpg")',
        'url("/images/-® Fotograf Siv Sivertsen 85.jpg")'
    ];

    const boksE = document.querySelector(".boks-e-changingimage");    
    const picture = images[Math.floor(Math.random() * images.length)];

    if(boksE.style.backgroundImage != picture) {
        boksE.style.backgroundImage = picture;
    }

}

setInterval(changeBg(),3000);
window.onload = changeBg(); // initial image.
