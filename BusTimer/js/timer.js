

/*var timeTable = ['2018, 4, 1,  7, 42',
                 '2018, 4, 1,  8,  8',
                 '2018, 4, 1,  8, 14',
                 '2018, 4, 1,  8, 45',
                 '2018, 4, 1,  9, 19',
                 '2018, 4, 1,  9, 33',
                 '2018, 4, 1, 10, 16',
                 '2018, 4, 1, 10, 21',
                 '2018, 4, 1, 10, 39',
                 '2018, 4, 1, 11,  9',
                 '2018, 4, 1, 11, 16',
                 '2018, 4, 1, 11, 39',
                 '2018, 4, 1, 11, 54',
                 '2018, 4, 1, 12, 17',
                 '2018, 4, 1, 13, 17',
                 '2018, 4, 1, 13, 25',
                 '2018, 4, 1, 13, 50',
                 '2018, 4, 1, 14, 31',
                 '2018, 4, 1, 15,  3',
                 '2018, 4, 1, 15, 32',
                 '2018, 4, 1, 16, 15',
                 '2018, 4, 1, 17, 14',
                 '2018, 4, 1, 17, 39',
                 '2018, 4, 1, 18, 26',
                 '2018, 4, 1, 18, 59',
                 '2018, 4, 1, 19, 33',
                 '2018, 4, 1, 20,  2',
                 '2018, 4, 1, 20, 40'  //0~27
                 ];
*/
const timeTable = {
  hour: [
    7, 18, 19, 20, 23
  ],
  min: [
    36, 33, 10, 40, 59
  ]
}


time();
function time(){

  var i = 0;
  var j = 0;
  var flag =0;

  //[cur-] 現在時刻
  var current = new Date();
  var curHour = Number(current.getHours());
  var curMin = Number(current.getMinutes());
  var curSec = Number(current.getSeconds());


 //[next-] 直近で到着するバス
  var nextHour = Number(timeTable.hour[0]);
  var nextMin = Number(timeTable.min[0]);


  while(curHour > nextHour){    //現在の[時]のみが到着予定時刻を過ぎた場合
    i++;
    var nextHour = Number(timeTable.hour[i]);
    var nextMin = Number(timeTable.min[i]);

  }

  console.log(i);

  if(curHour == nextHour){
    while(curMin > nextMin){
      j++;
      var nextMin = Number(timeTable.min[j]);
    }
  }
  else if((curHour < nextHour) && (curMin > nextMin)){
    curHour += 1;
    nextMin += 60;
  }


  //console.log(flag);
	var hour = nextHour -curHour;
	var min  = nextMin - curMin;
	var sec  = 59 - curSec;


  console.log(nextHour, nextMin);

  flag = hour + min + sec;
	var nokori = hour + ':' + min + ':' + sec;

	document.getElementById('time').innerHTML = '<p>' + nokori + '</p>';
}
setInterval('time()',1000);
