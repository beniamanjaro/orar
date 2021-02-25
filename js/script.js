const saptamana = document.querySelector(".saptamana");

function ISO8601_week_no(dt) 
  {
     var tdt = new Date(dt.valueOf());
     var dayn = (dt.getDay() + 6) % 7;
     tdt.setDate(tdt.getDate() - dayn + 3);
     var firstThursday = tdt.valueOf();
     tdt.setMonth(0, 1);
     if (tdt.getDay() !== 4) 
       {
      tdt.setMonth(0, 1 + ((4 - tdt.getDay()) + 7) % 7);
        }
     return 1 + Math.ceil((firstThursday - tdt) / 604800000);
        }

let today = new Date();
console.log(ISO8601_week_no(today));


function checkWeek() {
  if((ISO8601_week_no(today) - 1) % 2 == 0) {
    saptamana.innerHTML = "Saptamana para";
    } else {
    saptamana.innerHTML = "Saptamana impara";
    }
}

checkWeek();
