const canvas = document.getElementById('canvas');
const ctx= canvas.getContext('2d')

const image= new Image()

image.onload= function(){
	let x= 40,dx=1,
			y=40,dy=1
 		

function render(){
	ctx.clearRect(0,0,canvas.width,canvas.height)
	x= x+dx;
	y=y+dy;
	
	ctx.drawImage(image,x,y)
	window.requestAnimationFrame(render)
}
window.requestAnimationFrame(render)
}

image.src='fly.png'




