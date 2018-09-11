
/* 決定ボタンの取得 */
var submitBtn = document.getElementById('submit');

submitBtn.onclick = function(){
  /* 方向の取得 */
  var directionTemp = document.getElementById('direction');
  var directionList = directionTemp.getElementsByTagName('button');

  /* 曜日の取得 */
  var dayTemp = document.getElementById('day');
  var dayList = dayTemp.getElementsByTagName('button');

  /* 停留所の取得 */
  var stopTemp = document.getElementById('busStop');
  var stopList = stopTemp.getElementsByTagName('li');
  //var stopList = stopTemp.getElementById('st');

  for (var i = 0; i < stopList.length; i++) {
    var check = stopList[i].checked;
    if(check == true){
      console.log(stopList[i].textContent);
      console.log(i);
    }
    else{
      console.log("押されてないよ");
    }
  }
};
