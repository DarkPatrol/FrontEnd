const canvas = document.getElementById('canvas');
const ctx= canvas.getContext('2d')

let x= 40,dx=4,
		y=40,dy=4
 		

function render(){
	ctx.clearRect(0,0,canvas.width,canvas.height)
	x= x+dx;
	y=y+dy;
	ctx.fillStyle='purple'
	ctx.fillRect(x,y,60,60);
	window.requestAnimationFrame(render)
}
window.requestAnimationFrame(render)