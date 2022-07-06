var timerVariable  = setInterval(countUpTimer, 1000);
var totalSeconds = 0;
var a =  document.getElementById("count_up_timer")
function countUpTimer() {
    console.log()
  var timer =  document.getElementById("count_up_timer")
  
  ++totalSeconds;

  var hour = Math.floor(totalSeconds / 3600);
  var minute = Math.floor((totalSeconds - hour * 3600) / 60);
  var seconds = totalSeconds - (hour * 3600 + minute * 60);

  //timer.innerHTML = "<b>" + hour + ":" + minute + ":" + seconds + "</b>";
}

function hola(event){
    console.log(event)
}
console.log(a);
