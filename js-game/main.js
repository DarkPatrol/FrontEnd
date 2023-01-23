const c = document.getElementById('canvas');
const ctx= canvas.getContext('2d')

function drawVerticalRay(x, color = 'black') {
	ctx.beginPath();
	ctx.moveTo(x, 0);
	ctx.lineTo(x, c.height);
	ctx.strokeStyle = color
	ctx.stroke();
}
function drawPoint(x, y, color = 'black') {
	ctx.beginPath();
	ctx.ellipse(x, y, 10, 10, Math.PI / 4, 0, 2 * Math.PI);
	ctx.fillStyle = color
	ctx.fill();
}

let xA=0
let xB=1500

function render(){
	ctx.clearRect(0,0,c.width,c.height)

	xA= xA+2

	if(xA > xB){
		drawVerticalRay(xB,'red');
	}
	else{
		drawVerticalRay(xB,'purple');
	}
	if(xA>1920){
		xA=0;
	}

	drawPoint(xA,540,'black');
	
	window.requestAnimationFrame(render)
}
window.requestAnimationFrame(render)





