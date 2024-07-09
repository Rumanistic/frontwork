const regexID = /^[a-z][a-z0-9]{3,11}$/i;
const regexPW = /^[a-zA-Z0-9!@#$%^&*]{8,15}$/;
const regexName = /^[가-힣]{2,}$/;
const regexEmail = /^[a-z][a-z0-9]{3,11}@[a-z]+\.(com|net|co\.([a-z]{2,}))$/i;

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

validate = () => {
  let flag = true;
  let user = new User(
    document.getElementById('userID').value,
    document.getElementById('userPW').value,
    document.getElementById('userName').value,
    document.getElementById('email').value,
    document.getElementById('hobby').value,
    document.getElementById('country').value
  )

  let confpw = document.getElementById('confPW').value;
  
  if(!valID(user.id)){
    flag = false;
    console.log('아이디 오류');
    return alert('아이디 입력형식과 맞지 않습니다')
  }
  if(!valPW(user.pw)){
    flag = false;
    console.log('비밀번호 오류');
    return alert('패스워드 입력형식과 맞지 않습니다')
  }
  if(user.pw !== confpw){
    flag = false;
    console.log('비밀번호 불일치');
    return alert('비밀번호가 일치하지 않습니다');
  }
  if(!valName(user.name)){
    flag = false;
    console.log('이름 오류');
    return alert('이름 입력형식과 맞지 않습니다')
  }
  if(!valEmail(user.email)){
    flag = false;
    console.log('이메일 오류');
    return alert('이메일 입력형식과 맞지 않습니다')
  }

  if(flag){
    console.log(user);
    return alert('정상처리되었습니다')
  }
}


valID = (id) => regexID.test(id);

valPW = (pw) => regexPW.test(pw);

valName = (name) => regexName.test(name);

valEmail = (email) => regexEmail.test(email);