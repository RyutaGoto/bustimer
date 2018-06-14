//時間表示
var timeTable = ''


$(function (){
  setInterval(function(){
    var now = new Date();
    $('#time').text(now);
  }, 1000)
});
