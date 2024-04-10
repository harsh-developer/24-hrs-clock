window.addEventListener('resize', function () {
    c.clearRect(0, 0, cW, cH);
    clockStart();
});


function clockStart() {

    var canvas = document.querySelector('canvas');

    var c = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    var cW = canvas.width;
    var cH = canvas.height;



    c.strokeStyle = 'Lime';
    c.lineWidth = 15;
    c.lineCap = 'round';
    c.shadowBlur = 20;
    c.shadowColor = c.strokeStyle;


    function degToRad(degree) {
        var factor = Math.PI / 180;
        return degree * factor;
    }



    function renderTime() {


        var now = new Date();
        var today = now.toDateString();
        var time = now.toLocaleTimeString();
        var hours = now.getHours();
        var minutes = (now.getMinutes() + 5);
        var seconds = (now.getSeconds() + 5);
        var milliseconds = now.getMilliseconds();
        var newSeconds = seconds + (milliseconds / 1000);

        //Background
        var gradient = c.createRadialGradient(cW / 2, cH / 2, 5, cW / 2, cH / 2, 400);
        gradient.addColorStop(0, 'rgba(0, 200, 0)');
        gradient.addColorStop(1, 'Black');

        c.fillStyle = gradient;
        c.fillRect(0, 0, cW, cH);

        //Hours
        c.beginPath();
        c.arc(cW / 2, cH / 2, 300, degToRad(270), degToRad(hours * 15) - 90);
        c.stroke();

        //Minutes
        c.beginPath();
        c.arc(cW / 2, cH / 2, 250, degToRad(270), degToRad(minutes * 6) - 90);
        c.stroke();

        //Seconds
        c.beginPath();
        c.arc(cW / 2, cH / 2, 200, degToRad(270), degToRad(newSeconds * 6) - 90);
        c.stroke();

        //Date
        c.font = 'bold 25px Arial';
        c.fillStyle = 'Black';
        c.fillText(today, cW / 2.4, cH / 2);

        //Time
        c.font = '25px Arial';
        c.fillStyle = 'Black';
        c.fillText(time, cW / 2.25, cH / 1.8);
    }

    setInterval(renderTime, 1);

}

clockStart();