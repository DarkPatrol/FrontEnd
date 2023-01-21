const ctx = document.getElementById('myskills').getContext('2d');
let myskills= new Chart(ctx,{
	type: 'doughnut',
	data:{
		labels: ['Html','Css','Js','Php'] ,
		datasets: [{
			label:'Мои навыки' ,
			data: [40,60,30,10] ,
			backgroundColor: ['red','yellow','blue','green'] ,
			borderColor:[
				'black'
			] ,
			borderWidth: 4 
	}],
	} ,
	options: {
		maintainAspectRatio:true,
	}
});