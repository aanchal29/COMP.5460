$(function () {
        var canvas = document.getElementById("canvasPolyline"),
            ctx = canvas.getContext("2d"),
            offset = $("#canvasPolyline").offset(),
            storedLines = [],
            polyLines = [],
            start = {x: 0, y: 0},
            radius = 7;

        function canvasPosition(e) {
            return {
                x: parseInt(e.clientX - offset.left),
                y: parseInt(e.clientY - offset.top)
            };
        }

        $("#canvasPolyline").mousedown(function (e) {
            var pos = canvasPosition(e);
            if (hitStartCircle(pos)) {
                polyLines.push(storedLines);
                storedLines = [];
                draw();
            }
            else
            {
                storedLines.push(pos);
                update(pos);
            }
        })
        .mousemove(function (e) {
            update(canvasPosition(e));
        });

        // Draw completed polylines
        function draw() {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            $.each(polyLines, function (idx, polyLine) {
                fillPolyline(polyLine);
            });
        }

        // Update shape currently being drawn
        function update(position) {
            var len = storedLines.length;
            if(len==0) return;

            draw();
            ctx.fillStyle = "yellow";
            ctx.beginPath();
            ctx.arc(storedLines[0].x, storedLines[0].y, radius, 0, 2 * Math.PI, false);
            ctx.fill();

            ctx.strokeStyle = "darkblue";
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.moveTo(storedLines[0].x, storedLines[0].y);
            for(var i=1; i<len; ++i) {
                ctx.lineTo(storedLines[i].x, storedLines[i].y)
            }
            ctx.lineTo(position.x, position.y);
            ctx.stroke();
        };

        function hitStartCircle(pos) {
            var start = storedLines[0] || {x:0, y:0},
                dx = pos.x - start.x,
                dy = pos.y - start.y;
            return (dx * dx + dy * dy < radius * radius)
        }

        function fillPolyline(lines) {
            ctx.strokeStyle = "yellow";
            ctx.fillStyle = "darkblue";
            ctx.lineWidth = 3;
            ctx.beginPath();
            ctx.moveTo(lines[0].x, lines[0].y);
            for (var i = 0; i < lines.length; i++) {
                ctx.lineTo(lines[i].x, lines[i].y);
            }
            ctx.closePath();
            ctx.fill();
            ctx.stroke();
        }

        $("#clear").click(function () {
            polyLines = [];
            draw();
        });
});