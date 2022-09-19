function changeBg(){
    const images =[
        'url:("-®\ Fotograf\ Siv\ Sivertsen\ 88.jpg")',
        'url:("-® Fotograf Siv Sivertsen 86.jpg")'

    ]
    const boksE= document.querySelector(".boks-e-changingimage")
    const bg = images[Math.floor(Math.random()*
        images.length)];
        boksE.getElementsByClassName(".boks-e-changingimage")=bg;
}

setInterval(changeBg,1000)