const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

const centerX = canvas.width / 2;
const centerY = canvas.height / 2;

let angle = 0;
let speed = 2;
let radius = 150;

function render() {

    // Clear screen
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    angle += speed * 0.016;n
    const x = centerX + radius * Math.cos(angle);
    const y = centerY + radius * Math.sin(angle);


    ctx.beginPath();
    ctx.arc(centerX, centerY, radius, 0, Math.PI * 2);
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(centerX - radius, centerY);
    ctx.lineTo(centerX + radius, centerY);
    ctx.stroke();


    ctx.beginPath();
    ctx.moveTo(centerX, centerY);
    ctx.lineTo(x, y);
    ctx.stroke();

  
    ctx.beginPath();
    ctx.moveTo(x, y);
    ctx.lineTo(x, centerY);
    ctx.stroke();

    ctx.beginPath();
    ctx.arc(centerX, centerY, 8, 0, Math.PI * 2);
    ctx.fill();


    ctx.beginPath();
    ctx.arc(x, y, 10, 0, Math.PI * 2);
    ctx.fill();

    ctx.font = "20px Arial";
    ctx.fillText(`Angle: ${(angle * 180 / Math.PI).toFixed(1)}°`, 20, 30);
    ctx.fillText(`Sin: ${Math.sin(angle).toFixed(3)}`, 20, 60);
    ctx.fillText(`Cos: ${Math.cos(angle).toFixed(3)}`, 20, 90);

    requestAnimationFrame(render);
}

render();