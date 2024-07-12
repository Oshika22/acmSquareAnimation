var squares = document.querySelector(".squares");
var topLeft = document.querySelector("#top-left");
var bottomLeft = document.querySelector("#bottom-left");
var Left = document.querySelector("#left");
var topRight = document.querySelector("#top-right");
var bottomRight = document.querySelector("#bottom-right");
var Right = document.querySelector("#right");
var Bottom = document.querySelector("#bottom");



var clutter = "";
var TLclutter = "";
var BLclutter = "";
var Lclutter = "";
var TRclutter = "";
var BRclutter = "";
var Rclutter = "";
var Bclutter = "";

const box = () => {
    for(i=1; i<= 20; i++){
        if(i%4 == 0){
            
            TLclutter += `<div class='darkblue float top-left'></div>`;
        }
        else if(i%3 == 0){
            TLclutter += `<div class='lightblue float top-left'></div>`;
        }
        else if(i%2 == 0){
            TLclutter += `<div class='grey float top-left'></div>`;
        }
        else{
            TLclutter += `<div class='outline float top-left'></div>`;
        }
    }

    for(i=1; i<= 20; i++){
        if(i%4 == 0){
            
            TRclutter += `<div class='darkblue float top-right'></div>`;
        }
        else if(i%3 == 0){
            TRclutter += `<div class='lightblue float top-right'></div>`;
        }
        else if(i%2 == 0){
            TRclutter += `<div class='grey float top-right'></div>`;
        }
        else{
            TRclutter += `<div class='outline float top-right'></div>`;
        }
    }


    for(i=1; i<= 12; i++){
        if(i%4 == 0){
            
            Lclutter += `<div class='darkblue float left'></div>`;
        }
        else if(i%3 == 0){
            Lclutter += `<div class='lightblue float left'></div>`;
        }
        else if(i%2 == 0){
            Lclutter += `<div class='grey float left'></div>`;
        }
        else{
            Lclutter += `<div class='outline float left'></div>`;
        }
    }

    for(i=1; i<= 12; i++){
        if(i%4 == 0){
            
            Rclutter += `<div class='darkblue float right'></div>`;
        }
        else if(i%3 == 0){
            Rclutter += `<div class='lightblue float right'></div>`;
        }
        else if(i%2 == 0){
            Rclutter += `<div class='grey float right'></div>`;
        }
        else{
            Rclutter += `<div class='outline float right'></div>`;
        }
    }

    


    for(i=1; i<= 12; i++){
        if(i%4 == 0){
            
            BLclutter += `<div class='darkblue float bottom-left'></div>`;
        }
        else if(i%3 == 0){
            BLclutter += `<div class='lightblue float bottom-left'></div>`;
        }
        else if(i%2 == 0){
            BLclutter += `<div class='grey float bottom-left'></div>`;
        }
        else{
            BLclutter += `<div class='outline float bottom-left'></div>`;
        }
    }

    for(i=1; i<= 12; i++){
        if(i%4 == 0){
            
            BRclutter += `<div class='darkblue float bottom-right'></div>`;
        }
        else if(i%3 == 0){
            BRclutter += `<div class='lightblue float bottom-right'></div>`;
        }
        else if(i%2 == 0){
            BRclutter += `<div class='grey float bottom-right'></div>`;
        }
        else{
            BRclutter += `<div class='outline float bottom-right'></div>`;
        }
    }
    


    for(i=1; i<= 24; i++){
        if(i%4 == 0){
            
            Bclutter += `<div class='darkblue float bottom'></div>`;
        }
        else if(i%3 == 0){
            Bclutter += `<div class='lightblue float bottom'></div>`;
        }
        else if(i%2 == 0){
            Bclutter += `<div class='grey float bottom'></div>`;
        }
        else{
            Bclutter += `<div class='outline float bottom'></div>`;
        }
    }





    topLeft.innerHTML = TLclutter;
    bottomLeft.innerHTML = BLclutter;
    Left.innerHTML = Lclutter;
    topRight.innerHTML = TRclutter;
    bottomRight.innerHTML = BRclutter;
    Right.innerHTML = Rclutter;
    Bottom.innerHTML = Bclutter;

    // squares.innerHTML = clutter;

}

box();



gsap.to(".top-left",{
    x: -500,
    y: -100,
    scale: 1.5,
    opacity: 0,
    duration: 6,
    repeat: -1,
    stagger: 0.4,
    rotate: 720,
    ease: "back.out(1.7)",
})

gsap.to(".bottom-left",{
    x: -500,
    y: 200,
    scale: 1.5,
    opacity: 0,
    duration: 6,
    repeat: -1,
    stagger: 0.4,
    rotate: 720,
    ease: "back.out(1)",
})

gsap.to(".left",{
    x: -500,
    y: 50,
    scale: 1.3,
    opacity: 0,
    duration: 7,
    repeat: -1,
    stagger: 0.55,
    rotate: 720,
    ease: "back.out(1)"
})

gsap.to(".top-right",{
    x: 500,
    y: -100,
    scale: 1.5,
    opacity: 0,
    duration: 6,
    repeat: -1,
    stagger: 0.45,
    rotate: 720,
    ease: "back.out(1.7)",
})

gsap.to(".bottom-right",{
    x: 500,
    y: 200,
    scale: 1.5,
    opacity: 0,
    duration: 6,
    repeat: -1,
    stagger: 0.4,
    rotate: 720,
    ease: "back.out(1)",
})

gsap.to(".right",{
    x: 500,
    y: 10,
    scale: 1.3,
    opacity: 0,
    duration: 7,
    repeat: -1,
    stagger: 0.55,
    rotate: 720,
    ease: "back.out(1)"
})

gsap.to(".bottom",{
    x: 0,
    y: 200,
    scale: 1.3,
    opacity: 0,
    duration: 6,
    repeat: -1,
    stagger: 0.45,
    rotate: 720,
    ease: "back.out(1.7)"
})