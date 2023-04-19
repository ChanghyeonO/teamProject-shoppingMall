// html 요소
const idInput = document.querySelector('#idInput')
const passwordInput = document.querySelector('#passwordInput')
const passwordConfirmInput = document.querySelector('#passwordConfirmInput')

// const nameInput = document.querySelector('#nameInput')
// const emailInput = document.querySelector('#emailInput')
// const phoneNumberInput = document.querySelector('#phoneNumberInput')
// const addressInput = document.querySelector('#addressInput')
// const addressOptionInput = document.querySelector('#addressOptionInput')

const registerButton = document.querySelector('#registerButton')

// 회원가입 버튼 이벤트
registerButton.addEventListener('click', handleSubmit)

// 이벤트 함수
async function handleSubmit(e) {
  e.preventDefault
  const id = idInput.value
  const password = passwordInput.value
  const passwordConfirm = passwordConfirmInput.value

  // const name = nameInput.value
  // const phoneNumber = phoneNumberInput.value
  // const email = emailInput.value
  // const address = addressInput.value
  // const addressOption = addressOptionInput.value

    
  // 비밀번호 비교
  if (password !== passwordConfirm) {
    return alert("비밀번호가 일치하지 않습니다.")
  } 

  // 객체 생성
  const data = {
    id,
    password,
    // name,
    // phoneNumber,
    // email,
    // address,
    // addressOption
  }
  
  // JSON 생성
  const dataJson = JSON.stringify(data)
  
  const apiUrl = `` // Url 연결

  const res = await fetch(apiUrl, {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
    },
    body: dataJson,
  });
  
  if (res.status === 200) {
    alert("회원가입에 성공하였습니다!")
  } else {
    alert("회원가입에 실패하였습니다")
  }

}