//Elements with event listeners
const tagCardButtons = document.querySelectorAll(".terminal-card header");

tagCardButtons.forEach((button) => {
    button.addEventListener("click",() => {
        const content = document.getElementById(`${button.id}-content`);
        
        if(content.style.display === "" || content.style.display === "none"){
            content.style.display = "block";
            button.style.backgroundColor = "blueviolet";
        }else{
            content.style.display = "none";
            button.style.backgroundColor = "#000";
        }

    });
});


/* Particle background */

const canvas = document.getElementById("canvas1");
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let particlesArray;

let mouse = {
    x: null,
    y: null,
    radius: (canvas.height/80) * (canvas.width/80)
}

 window.addEventListener('mousemove',
    (event) => {
        mouse.x = event.x;
        mouse.y = event.y;
    }
 );

 class Particle {
    constructor(x, y, directionX, directionY, size, color){
        this.x =x;
        this.y = y;
        this.directionX = directionX;
        this.directionY = directionY;
        this.size = size;
        this.color = color;
    }

    draw(){
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2, false);
        ctx.fillStyle = '#9d8189';
        ctx.fill();
    }
 }