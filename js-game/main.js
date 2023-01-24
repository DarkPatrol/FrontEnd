const c = document.getElementById('canvas');
const ctx= canvas.getContext('2d')

function drawPoint(point) {
	ctx.beginPath();
	ctx.ellipse(point.x, point.y, 10, 10, Math.PI / 4, 0, 2 * Math.PI);
	ctx.fillStyle = point.color
	ctx.fill();
}

let point={
	x:0,
	y:0,
	color:'black'
}


canvas.addEventListener('mousemove',function(event){
	point.x=event.offsetX
	point.y=event.offsetY
})

function render(){
	ctx.clearRect(0,0,canvas.width,canvas.height);
	
	drawPoint(point)

	window.requestAnimationFrame(render)
}
window.requestAnimationFrame(render)





