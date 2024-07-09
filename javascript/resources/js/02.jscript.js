docWrite = () => {
  document.write("안녕하세요");
  document.write("<b>안녕하세요</b><br><h2>반가워요</h2>");
  var print = "<table border='1'>";
      print += " <tr>";
      print += "  <td>1</td>";
      print += "  <td>2</td>";
      print += "  <td>3</td>";
      print += " </tr>";
      print += "</table>";
  document.write(print);

  document.write("<table border='1'>"
    + " <tr>"
    + "  <td>1</td>"
    + "  <td>2</td>"
    + "  <td>3</td>"
    + " </tr>"
    + "</table>");
}

tagValue = () => {
  var divE1 = document.getElementById("area1");
  console.dir(divE1);
  // divE1의 속성에 대한 정보를 보여줌
  console.log(divE1.id);
  console.log(divE1.className);

  console.log(divE1.innerHTML); // 태그 포함 전체 요소
  console.log(divE1.innerText); // 태그 제외 모든 텍스트만

  // divE1.innerHTML = "<h2> innerHTML로 변경됨</h2>";
  // divE1.style.backgroundColor = "green";

  divE1.innerText = "<h2> innerText로 속성값 변경함</h2>";  // 태그도 텍스트로 인식(처리하지 못함)
  divE1.style.color = "red";
}

testFunc = () => {
  var result = confirm("재미있으면 확인, 아니면 취소를 누르세요");
  console.log(result);

  if(result){
    var btnTF = document.getElementById("tf");
    btnTF.innerText = "진짜로?";
  }
  else{
    var btnTF = document.getElementById("tf");
    btnTF.innerText = "그래도 해야겠지?";
  }
}

promptFunc = () => {
  var result = prompt("배운 내용을 입력해보세요");
  console.log(result);

  if(result != null){
    var area3 = document.getElementById("area3");
    area3.innerHTML += "<h3> 너가 배운것 </h3>";
    area3.innerHTML += "<pre>" + result + "</pre>"
  }
  else{
    var area3 = document.getElementById("area3");
    area3.innerHTML += "<h3> 다시 공부해~~ </h3>";
  }
}

nameAge = () => {
  var name = prompt("이름을 입력하세요");
  var age = prompt("나이를 입력하세요")

  if(name != null && age != null){
    var area3 = document.getElementById("area3");
    // area3.innerHTML += "<h3> 당신이 바로 " + age + "살 " + name + "님 이군요!";
    area3.innerHTML += `<h3> 당신이 바로 ${age}살 ${name}님 이군요!</h3>`;
  }
}

function promptFunc2() {
  var num = prompt("숫자를 입력하세요");
  var str = "<tr>";
  var area4 = document.getElementById("area4");
  if(num != null){
    while(num > 0){
      str += `<td> ${num} </td>`;
      if(num%10 == 1)
        str+= "<tr>";
      num--;
    }
  }
  str += "</tr>";
  area4.innerHTML += `<table> ${str} </table>`;
}

function logIn() {
  var id = document.getElementById("userID");
  var pwd = document.getElementById("userPW");

  console.dir(id);
  console.dir(pwd);

  if(id.value == "aa" && pwd.value == "bb")
    window.alert(`환영합니다, ${id.value}님`);

  document.getElementById("area5").value = id.value + ", " + pwd.value;
  id.value = "";
  pwd.value = "";
}