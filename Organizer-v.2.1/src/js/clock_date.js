const $time = document.getElementById("time");
const $date = document.getElementById("date");
const $weekday = document.getElementById("weekday");

export function clock_date() {
    const days = [
      "Niedziela",
      "Poniedziałek",
      "Wtorek",
      "Środa",
      "Czwartek",
      "Piątek",
      "Sobota"
    ];
    var today = new Date();
    var day = today.getDate();
    var month = today.getMonth();
    var year = today.getFullYear();
    var weekDay = today.getDay();
    var hour = today.getHours();
    if (hour < 10) hour = "0" + hour;
    var minute = today.getMinutes();
    if (minute < 10) minute = "0" + minute;
    var second = today.getSeconds();
    if (second < 10) second = "0" + second;
    $time.innerHTML = hour + ":" + minute + ":" + second;
    $date.innerHTML = day + "/" + (month + 1) + "/" + year;
    $weekday.innerHTML = days[weekDay];
  
    setTimeout(function() {
        clock_date();
    }, 1000);
  };