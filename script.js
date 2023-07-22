let home=document.getElementById('home');
let inbox=document.getElementById('inbox');
let tasks=document.getElementById('tasks');
let user=document.getElementById('user');
let search=document.getElementById('search');

function fill_home() {
    home.classList.add("icon_container");  
    inbox.classList.remove("icon_container");
    tasks.classList.remove("icon_container");
    user.classList.remove("icon_container");
    search.classList.remove("icon_container");
}
function fill_inbox() {
    inbox.classList.add("icon_container");  
    home.classList.remove("icon_container");
    tasks.classList.remove("icon_container");
    user.classList.remove("icon_container");
    search.classList.remove("icon_container");
}
function fill_tasks() {
    tasks.classList.add("icon_container");  
    home.classList.remove("icon_container");
    inbox.classList.remove("icon_container");
    user.classList.remove("icon_container");
    search.classList.remove("icon_container");
}
function fill_user() {
    user.classList.add("icon_container");  
    home.classList.remove("icon_container");
    tasks.classList.remove("icon_container");
    inbox.classList.remove("icon_container");
    search.classList.remove("icon_container");
}
function fill_search() {
    search.classList.add("icon_container");
    home.classList.remove("icon_container");
    tasks.classList.remove("icon_container");
    inbox.classList.remove("icon_container");
    user.classList.remove("icon_container");

}
let circularProgress = document.querySelector(".circular-progress"),
progressValue = document.querySelector(".progress-value");

let progressStartValue = 0,    
progressEndValue = 90,    
speed = 100;

let progress = setInterval(() => {
progressStartValue++;

progressValue.textContent = `${progressStartValue}%`
circularProgress.style.background = `conic-gradient(#7d2ae8 ${progressStartValue * 3.6}deg, #ededed 0deg)`

if(progressStartValue == progressEndValue){
    clearInterval(progress);
}    
}, speed);

var ctx = document.getElementById("myChart").getContext('2d');
var myChart = new Chart(ctx, {
  type: 'bar',
  data: {
    labels: ["20","","25","","30","","35","","40"],
    datasets: [{
      label: 'Employer:K 73,500',
      backgroundColor: "#06084d",
      data: [20, 25,27, 30, 33,38, 42, 47, 50],
    }, {
      label: 'Employee  K 52,500',
      backgroundColor: "#7e00d6",
      data: [30, 32, 36, 40, 44,49, 54, 60, 63],
    },{
      label: 'Total Interest : K 244,313',
      backgroundColor: "#4c89d9",
      data: [50, 59, 64, 70, 76, 84, 100, 120, 127],
    }],
  },
options: {
    tooltips: {
      displayColors: true,
      callbacks:{
        mode: 'x',
      },
    },
    scales: {
      xAxes: [{
        stacked: true,
        gridLines: {
          display: false,
        }
      }],
      yAxes: [{
        stacked: true,
        ticks: {
          beginAtZero: true,
        },
        type: 'linear',
      }]
    },
    responsive: true,
    maintainAspectRatio: false,
    legend: { position: 'top'},
  }
});