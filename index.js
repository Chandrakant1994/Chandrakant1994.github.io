var mains = document.querySelector("main");

var boxes = document.getElementsByClassName("box");

Array.from(boxes).forEach(element => {
    element.addEventListener('click',
        function(){
            this.style.display = "none";
        }
    )
})

control.style.cursor = "pointer";
control.addEventListener("click",function(){
    if(mains.style.display != "none")
    mains.style.display = "none";
    else
    mains.style.display = "block";

})

mains.addEventListener("mousemove", function(e){
    this.style.backgroundColor = "rgb(" + e.offsetX + "," + e.offsetY +",200)"
})

canvas = document.getElementById('canvas');
ctx = canvas.getContext("2d");
  ctx.font = '48px serif';
  canvas.addEventListener("mousemove",function(e){
    if(e.ctrlKey || e.shiftKey){
    ctx.beginPath();
    ctx.moveTo(e.offsetX, e.offsetY);
    ctx.lineTo(e.offsetX + 10, e.offsetY + 10);
    ctx.strokeStyle = "black";
    ctx.lineWidth = 2;
    ctx.stroke();
    ctx.closePath();
    //ctx.fillText('.', e.offsetX, e.offsetY);
    }
  })

  //ctx.addEventListener("click", function(){console.log("clicked")})
  