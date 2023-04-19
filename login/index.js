// html 요소
const idInput = document.querySelector('#idInput')
const passwordInput = document.querySelector('#passwordInput')

const loginButton = document.querySelector('#loginButton')

// 로그인 버튼 이벤트
loginButton.addEventListener('click', handleSubmit)

// 이벤트 함수
async function handleSubmit(e) {
  e.preventDefault
  
  const id = idInput.value
  const password = passwordInput.value

  // 객체 생성
  const data = {
    id,
    password
  }
  
  // 입력 여부 확인
  if (!id) {
    return alert("아이디를 입력해 주세요.")
  }
  
  if (!password) {
    return alert("비밀번호를 입력해 주세요.")
  }
  
  // JSON 생성
  const dataJson = JSON.stringify(data)
  
  const apiUrl = `/auth/signup` //Url 연결

  const res = await fetch(apiUrl, {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
    },
    body: dataJson,
  });
  
  if (res.status === 200) {
    alert("로그인에 성공하였습니다!")
  } else {
    alert("로그인에 실패하였습니다")
  }

}