
getInfo();


function getInfo(){
  var stopList = document.getElementById('list');     // document 全体から id="list" の要素を取得 (バス停の<ul>取得)
  var busStop = stopList.getElementsByTagName('li');  // バス停の <ul> から <li> 取得

  for (var i = 0; i < busStop.length; i++) {
    if(busStop[i].checked){
      console.log(busStop[i].textContent);  
    }
  }
}
