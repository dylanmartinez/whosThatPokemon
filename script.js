const loadingText = document.querySelector('.loading-text');
const backgroundImage = document.querySelector(".background-image");

let load = 0;
let interval = setInterval(blurring, 100); 

//random img generator
let backimg = ["1.png","2.png","3.png","4.png","5.png","6.png","7.png","8.png","9.png","10.png"];
let randimg = Math.floor(Math.random()*backimg.length);

//blurring function for image and text
function blurring() {
    backgroundImage.style.background = `url('images/${backimg[randimg]}')`;
    
    load++
    
        if(load > 99) {
            clearInterval(interval)
        };


    loadingText.innerText = `${load}%`
    loadingText.style.opacity = scale(load, 0, 100, 1, 0)
    // backgroundImage.style.background = `url('images/${backimg[randimg]}')`; if you comment this back in and remove line 13, it will change the img every interval
    backgroundImage.style.filter = `blur(${scale(load, 0, 100, 100, 0)}px)`
};

const scale = (num, in_min, in_max, out_min, out_max) => {
    return ((num - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min 
};



// Original Code Source = https://paul-lockett.co.uk/randombackground.html

// function backgr(){
//     var backimg = ["1.png","2.png","3.png","4.png","5.png","6.png","7.png","8.png","9.png","10.png"];
//     var randimg = Math.floor(Math.random()*backimg.length);
//     backgroundImage.style.background = `url('images/${backimg[randimg]}')`;
// }
