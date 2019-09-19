$(document).ready(function () {

    $('#sidebarCollapse').on('click', function() {
        $('#sidebar').toggleClass('active')
    });
});
var canvas = document.getElementById("mycanvas");
var ctx = canvas.getContext("2d");

var dots=[];
var numDots = 100;
var width = canvas.width;
var height = canvas.height;
var bounce = -1;
for(var i=0 ; i<numDots ; i++){
  dots.push({
    x : Math.random() * width,
    y : 0.5 * height,
    vx : 0,
    vy : Math.random() * 10 - 5,
    alpha: 1.0
  })
}

function draw() {
    ctx.clearRect(0, 0, width, height);
    var j, dot;
    for(j = 0; j < numDots; j++) {
        dot = dots[j];
        ctx.beginPath();
        ctx.fillRect(dot.x, dot.y, 6,6);
        ctx.fillStyle = "rgba(255,82,0)";
        // 255,82,0
        ctx.fill();
        //ctx.stroke();
    }
}

function update(){
  var i,dot;
  for( i=0 ; i< numDots ; i++){
    dot = dots[i];
    dot.x += dot.vx;
    dot.y += dot.vy;
    dot.alpha = (height/8.0)/Math.abs(0.5*height - dot.y)
    
    if(dot.y > height){
      dot.y = 0.5*height;
      dot.alpha = 1.0
    }else if(dot.y<0){
      dot.y = 0.5*height;
      dot.alpha = 1.0
    }
  }
}

setInterval(function() {
    update();
    draw();
}, 1000/24);

