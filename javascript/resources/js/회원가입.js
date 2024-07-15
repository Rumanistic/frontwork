const regexID = /^[a-z][a-z0-9]{3,11}$/i;
const regexPW = /^[a-zA-Z0-9!@#$%^&*]{8,15}$/;
const regexName = /^[가-힣]{2,}$/;
// const regexEmail = /^[a-z][a-z0-9]{3,11}@[a-z]+\.(com|net|co\.([a-z]{2,}))$/i;
const regexEmail = /^\w+@\w+\.\w+(\.\w+)?/;

class User{
  constructor (id, pw, name, email, hobby, country){
    this.id = id;
    this.pw = pw;
    this.name = name;
    this.email = email;
    this.hobby = hobby;
    this.country = country;
  }
}

valID = (id) => regexID.test(id);
valPW = (pw) => regexPW.test(pw);
valName = (name) => regexName.test(name);
valEmail = (email) => regexEmail.test(email);

clear = (target) => {
  target.value = "";
  target.focus();
}

validate = () => {
  let flag = true;
  let user = new User(
    document.getElementById('userID'),
    document.getElementById('userPW'),
    document.getElementById('userName'),
    document.getElementById('email'),
    document.getElementById('hobby'),
    document.getElementById('country')
  )

  let confpw = document.getElementById('confPW');
  
  if(!valID(user.id.value)){
    flag = false;
    console.log('아이디 오류');
    alert('아이디 입력형식과 맞지 않습니다');
    clear(user.id);
    return false;
  }
  if(!valPW(user.pw.value)){
    flag = false;
    console.log('비밀번호 오류');
    alert('패스워드 입력형식과 맞지 않습니다');
    clear(user.pw);
    return false;
  }
  if(user.pw.value !== confpw.value){
    flag = false;
    console.log('비밀번호 불일치');
    alert('비밀번호가 일치하지 않습니다');
    confpw.value = "";
    clear(confpw);
    return false;
  }
  if(!valName(user.name.value)){
    flag = false;
    console.log('이름 오류');
    alert('이름 입력형식과 맞지 않습니다')
    user.name.value = "";
    clear(user.name);
    return false;
  }
  if(!valEmail(user.email.value)){
    flag = false;
    console.log('이메일 오류');
    alert('이메일 입력형식과 맞지 않습니다')
    user.email.value = "";
    clear(user.email);
    return false;
  }

  if(flag){
    let frm = document.getElementById('frm');
    console.log(user.value);
    frm.submit();
    return alert('정상처리되었습니다')
  }
}

