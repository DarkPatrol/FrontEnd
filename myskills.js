const ctx = document.getElementById('myskills').getContext('2d');
let myskills= new Chart(ctx,{
	type: 'radar',
	data:{
		labels: ['Html','Css','Js','Php'] ,
		datasets: [{
			label:'Мои навыки' ,
			data: [20,30,60,90] ,
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