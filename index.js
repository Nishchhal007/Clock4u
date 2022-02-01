

  setInterval(() => {
      let d = new Date();
    let time =
      ("0" + d.getHours()).slice(-2) +
      ":" +
      ("0" + d.getMinutes()).slice(-2) +
      ":" +
      ("0" + d.getSeconds()).slice(-2);
    document.getElementById("time").innerHTML = "   " + time;
  }, 1000);

//for day

let a = new Date();
const weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday",];
  let day = weekday[a.getDay()];
  document.getElementById("day").innerHTML = day;

const month = ["January","February","March","April","May","June","July","August","September","October","November","December"];

let yr = a.getFullYear();
document.getElementById('cr').innerHTML = " "+yr;


let date = a.getDate()+ " "  + month[a.getMonth()] +" "+ yr;
document.getElementById('date').innerHTML = date;
