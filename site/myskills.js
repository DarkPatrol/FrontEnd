var skillsChart = document.getElementById("myskills");

Chart.defaults.font.family = "Insomnia";
Chart.defaults.font.size = 22;
Chart.defaults.color = "black";
var canvas = document.getElementById('myskills');
    var context = canvas.getContext('2d');

    // no we get with of content and asign the same hight as the with. this gives up aspect ration 1:1.
    context.canvas.width = window.innerWidth;
    context.canvas.height = window.innerWidth;

var Skills = {
  labels: ["Html", "Css", "Js", "Php", "Git"],
  datasets: [
    {
      data: [70, 60, 30, 15, 30],
      backgroundColor: [
			'rgba(255, 26, 104, 0.2)',
			'rgba(54, 162, 235, 0.2)',
			'rgba(255, 206, 86, 0.2)',
			'rgba(75, 192, 192, 0.2)',
			'rgba(153, 102, 255, 0.2)',
			'rgba(255, 159, 64, 0.2)',
			'rgba(0, 0, 0, 0.2)'
			],
      borderColor: "black",
      borderWidth: 2
    }
  ]
};

var chartOptions = {
  rotation: -90,
  cutout: "45%",
  plugins: {
    legend: {
      position: "left",
      align: "start"
    }
  },
  animation: {
    animateRotate: false,
    animateScale: true
  }
};

var donutChart = new Chart(skillsChart, {
  type: "doughnut",
  data: Skills,
  options: chartOptions
});
