
   
    function drawPolygon(){
        var c = document.getElementById('polygon');
        c.width = c.width;
        var cxt = c.getContext("2d");
        var numberOfSides = document.getElementById('nSides').value;
            size = 80,
            Xcenter = c.width/2,
            Ycenter = c.height/2;
        cxt.beginPath();
        cxt.moveTo (Xcenter +  size * Math.cos(0), Ycenter +  size *  Math.sin(0));
        for (var i = 1; i <= numberOfSides;i += 1) {
            cxt.lineTo (Xcenter + size * Math.cos(i * 2 * Math.PI / numberOfSides), Ycenter + size * Math.sin(i * 2 * Math.PI / numberOfSides));
        }

        cxt.strokeStyle = "yellow";
        cxt.lineWidth = 3;
       

        cxt.stroke();
    }