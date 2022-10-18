/** @type {HTMLCanvasElement} */

function clock() {
    const now = new Date();
    const canvas = document.getElementById("canvas");
    canvas.height = window.innerHeight;
    canvas.width = window.innerWidth;
    const clockWidth = canvas.height / 2;
    const ctx = canvas.getContext("2d");

    ctx.save();
    ctx.translate(canvas.width / 2, canvas.height / 2);
    ctx.rotate(-Math.PI / 2);
    ctx.lineWidth = 8;
    ctx.lineCap = "round";

    // Arch
    ctx.save();
    ctx.beginPath();
    ctx.lineWidth = 10;
    ctx.strokeStyle = "green";
    ctx.arc(0, 0, clockWidth - 30, 0, Math.PI * 2, false);
    ctx.stroke();
    ctx.restore();

    // Hour marks
    ctx.save();
    for (let i = 0; i < 12; i++) {
        ctx.beginPath();
        ctx.rotate(Math.PI / 6); // 2 * Math.PI / 12
        ctx.moveTo(clockWidth - 50, 0);
        ctx.lineTo(clockWidth - 70, 0);
        ctx.stroke();
    }
    ctx.restore();

    // Minute marks
    ctx.save();
    ctx.lineWidth = 5;
    for (let i = 0; i < 60; i++) {
        if (i % 5 !== 0) {
            ctx.beginPath();
            ctx.moveTo(clockWidth - 50, 0);
            ctx.lineTo(clockWidth - 60, 0);
            ctx.stroke();
        }
        ctx.rotate(Math.PI / 30);
    }
    ctx.restore();

    // Hours
    ctx.save();
    ctx.lineWidth = 15;
    ctx.beginPath();
    ctx.rotate(((Math.PI * 2) / 12) * (now.getHours() % 12))
    ctx.moveTo(0, 0);
    ctx.lineTo(clockWidth - 200, 0);
    ctx.stroke();
    ctx.restore();

    // Minutes
    ctx.save();
    ctx.lineWidth = 8;
    ctx.beginPath();
    ctx.rotate(((Math.PI * 2) / 60) * now.getMinutes())
    ctx.moveTo(0, 0);
    ctx.lineTo(clockWidth - 80, 0);
    ctx.stroke();
    ctx.restore();

    // Seconds
    ctx.save();
    ctx.lineWidth = 3;
    ctx.strokeStyle = "purple"
    ctx.beginPath();
    ctx.rotate(((Math.PI * 2) / 60) * now.getSeconds())
    ctx.moveTo(0, 0);
    ctx.lineTo(clockWidth - 100, 0);
    ctx.stroke();
    ctx.restore();

    ctx.restore();

    window.requestAnimationFrame(clock);
}

clock();
