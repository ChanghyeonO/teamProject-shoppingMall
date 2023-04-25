const URI = "http://34.64.252.224";

// html 요소
const idInput = document.querySelector('#idInput');
const passwordInput = document.querySelector('#passwordInput');
const passwordConfirmInput = document.querySelector('#passwordConfirmInput');

const nameInput = document.querySelector('#nameInput');
const emailInput = document.querySelector('#emailInput');
const phoneNumberInput = document.querySelector('#phoneNumberInput');
const addressBasicInput = document.querySelector('#addressBasicInput');
const addressOptionInput = document.querySelector('#addressOptionInput');

const registerButton = document.querySelector('#registerButton');

// 회원가입 버튼 이벤트
registerButton.addEventListener('click', handleSubmit);

// 이벤트 함수
async function handleSubmit(e) {
  e.preventDefault();

  const userName = idInput.value;
  const password = passwordInput.value;
  const passwordConfirm = passwordConfirmInput.value;
  const roleType = "USER";
  const name = nameInput.value;
  const phoneNumber = phoneNumberInput.value;
  const mail = emailInput.value;
  const address = addressBasicInput.value;
  const addressOption = addressOptionInput.value;
    
  // 유효성 검사
  const isIdValid = userName.length >= 3 && userName.length <= 15;
  const isPasswordValid = password.length >= 12 && password.length <= 30;
  const isPasswordCheck = password === passwordConfirm;
  const isNameValid = name.length >= 1;
  const isPhoneNumberValid = /^[0-9]{2,3}-[0-9]{3,4}-[0-9]{4}$/.test(phoneNumber);
  const isEmailValid = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,}$/.test(mail);


  if (!isIdValid) {
    return alert("ID는 3~15자로 해주세요.");
  }

  if (!isPasswordValid) {
    return alert("비밀번호는 12~30자로 해주세요.");
  }

  if (!isPasswordCheck) {
    return alert("비밀번호가 일치하지 않습니다.");
  }

  if (!isNameValid) {
    return alert("이름을 확인해주세요.");
  }
  
  if (!isEmailValid) {
    return alert("이메일을 확인해주세요.");
  }
  
  if (!isPhoneNumberValid) {
    return alert("전화번호를 확인해주세요.");
  }


  // 객체 생성
  const data = {
    userName,
    password,
    roleType,
    // name,
    phoneNumber,
    mail,
    address,
    // addressOption
  }
  
  // JSON 생성
  const dataJson = JSON.stringify(data);
  
  const res = await fetch(`${URI}/auth/signup`, {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
    },
    body: dataJson,
  });
  
  if (res.status === 200) {
    alert("회원가입에 성공하였습니다!");
    window.location.href = '../login/login.html';
  } else {
    alert("회원가입에 실패하였습니다");
    console.error(error);
  }
}