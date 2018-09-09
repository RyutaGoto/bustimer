
getInfo();


function getInfo(){
  /* 方向の取得 */
  var directionTemp = document.getElementById('direction');
  var directionList = directionTemp.getElementsByTagName('button');

  /* 曜日の取得 */
  var dayTemp = document.getElementById('day');
  var dayList = dayTemp.getElementsByTagName('button');

  /* 停留所の取得 */
  var stopTemp = document.getElementById('busStop');
  var stopList = stopTemp.getElementsByTagName('li');


  for (var i = 0; i < stopList.length; i++) {
    //if(stopList[i].checked){
      console.log(stopList[i].textContent);
      console.log(i);
    //}
  }
}
