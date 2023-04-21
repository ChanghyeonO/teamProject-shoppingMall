// html 요소
const idInput = document.querySelector('#idInput')
const passwordInput = document.querySelector('#passwordInput')

const loginButton = document.querySelector('#loginButton')

// 로그인 버튼 이벤트
loginButton.addEventListener('click', handleSubmit)

// 이벤트 함수
async function handleSubmit(e) {
  e.preventDefault()
  
  const userName = idInput.value
  const password = passwordInput.value

  // 객체 생성
  const data = {
    userName,
    password
  }
  
  // 입력 여부 확인
  if (!userName) {
    return alert("아이디를 입력해 주세요.")
  }
  
  if (!password) {
    return alert("비밀번호를 입력해 주세요.")
  }
  
  // JSON 생성
  const dataJson = JSON.stringify(data)
  
  // 로그인 요청 서버에 보내기
  const res = await fetch(`/auth/login`, {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
    },
    body: dataJson,
  })
  .then(response => {
      return response.json();
  })
  .then(data => {
    if (res.status === 200) {
      alert("로그인에 성공하였습니다!")
      // 로그인 후 페이지 이동
      window.location.href = '' // 메인 페이지 연결하기
    } else {
      throw new Error('로그인 실패')
    }
  })
  .catch(error => {
    console.error(error);
  });
}