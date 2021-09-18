var canvas = document.createElement("canvas")
document.body.style.margin = 0
document.body.style.padding = 0
document.body.appendChild(canvas)
canvas.width = document.documentElement.clientWidth;
canvas.height = document.documentElement.clientHeight;
var context = canvas.getContext("2d")
context.strokeStyle = "rgb(200,226,46)"
context.fillStyle = "black"
context.fillRect(0, 0, canvas.width, canvas.height)