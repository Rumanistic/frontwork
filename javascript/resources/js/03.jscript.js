function accessID() {
  var area1 = document.getElementById("area1");

  area1.innerHTML = "아이디로 접근 성공 <br>";
  area1.style.backgroundColor = "skyblue";
  area1.style.color = "green";
  area1.style.width = "200px";
  area1.style.height = "200px";
}

function setColor() {
  var color = document.getElementById("color");
  var gamma = document.getElementById("score_bar");
  // var score = document.getElementById("score");
  
  score.innerHTML = gamma.value;
  var g = `rgba(0, 255, 255, ${gamma.value*0.01})`;

  color.style.backgroundColor = g;
}

function changeColor() {
  var area2 = document.getElementById("area2");
  var r = Math.floor(Math.random()* 255);
  var g = Math.floor(Math.random()* 255);
  var b = Math.floor(Math.random()* 255);
  var color = `rgb(${r},${g},${b})`;

  area2.style.backgroundColor = color;
}

function accessTagName() {
  var tag1 = document.getElementById("tr1");
  var tag2 = document.getElementById("tr2");
  var tag3 = document.getElementById("tr3");

  for(var i = 0; i < 255; i++){
    tag1.innerHTML += `<td style="background-color: rgb(${i}, 0, 0"></td>`
  }
  for(var i = 0; i < 255; i++){
    tag2.innerHTML += `<td style="background-color: rgb(0, ${i}, 0"></td>`
  }
  for(var i = 0; i < 255; i++){
    tag3.innerHTML += `<td style="background-color: rgb(0, 0, ${i}"></td>`
  }
}

function accessName() {
  var list = document.getElementsByName("hobby");
  var div1 = document.getElementById("area3");
  console.dir(list);

  for(var i = 0; i < list.length; i++){
    if(list[i].checked)
      div1.innerHTML += `${list[i].value}<br>`;
  }
}

function accessClass() {
  var cl = document.getElementsByClassName("test");
  // for(let i in cl){
  //   console.log(cl[i]);
  // }
  Array.from(cl).forEach(element => {
    console.log(element);
  })
}

function accessSelector() {
  var id = document.querySelector("#test2");
  id.innerText = "수정중입니다...";

  var h2a = document.querySelectorAll(".test2>h2");
  Array.from(h2a).forEach(element => {
    element.innerText = `$번째 제목`;
  })
}

function select(){
  var p = document.querySelector(".cls1");
  p.style.color = "brown";
}

function selectAll(){
  var p = document.querySelectorAll("#p");
  Array.from(p).forEach(element => {
    element.style.color = "green";
  })
}