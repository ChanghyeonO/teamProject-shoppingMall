export const drawNavbar = () => {
  let userId = '';
  let template; // nav.html의 text로 변환된 코드가 할당되는 변수

  // 후에 관리자 계정 만들면 활성화
  // if (sessionStorage.getItem('userId') && sessionStorage.getItem('adminToken')) {
  //   userId = `/admin/`;
  // }
  // sessionStorage에서 userId를 가져와서 해당 값이 존재하는 경우 `/users/userlist/${userId}`를, 그렇지 않은 경우 `/users/login`을 userId 변수에 할당
  // if (sessionStorage.getItem('userId')) {
  //   userId = `/users/userlist/${sessionStorage.getItem('userId')}`;
  // } else {
  //   userId = `/users/login`;
  // }

  // 현재 모듈의 URL을 기반으로 `./components/nav/nav.html` 경로에서 리소스를 가져오는 `fetch` 함수를 호출
  fetch(new URL('./components/nav/nav.html', import.meta.url))
    // 가져온 html 코드를 text로 변환
    .then((response) => response.text())
    // 변환된 html 코드를 template 변수에 할당
    .then((data) => {
      template = data;
      // 첫 번째 header 태그를 찾아서 해당 태그의 시작 부분에 nav.html을 삽입
      const headerTag = document.getElementsByTagName('header')[0];
      headerTag.insertAdjacentHTML('afterbegin', template);

      // nav.css 파일을 가져옴
      fetch(new URL('./components/nav/nav.css', import.meta.url))
        .then((response) => response.text())
        .then((css) => {
          // head 태그를 가져와서 CSS 코드를 추가함
          const headTag = document.getElementsByTagName('head')[0];
          const styleTag = document.createElement('style');
          styleTag.innerHTML = css;
          headTag.appendChild(styleTag);
        })
        .catch((error) => console.error(error));
    })
    .catch((error) => console.error(error));
};

// footer.css를 template에 적용하는 함수
export const drawFooter = () => {
  let template; // footer.html의 text로 변환된 코드가 할당되는 변수

  // footer.html 파일을 가져와서 text로 변환
  fetch(new URL('./components/footer/footer.html', import.meta.url))
    .then((response) => response.text()) // 가져온 html 코드를 text로 변환
    .then((data) => {
      template = data; // 변환된 html 코드를 template 변수에 할당

      // 마지막 footer 태그를 찾아서 해당 태그의 시작 부분에 footer.html을 삽입
      const footerTag = document.getElementsByTagName('footer')[0]; // footer 태그를 가져와 footerTag 변수에 할당
      footerTag.insertAdjacentHTML('beforeend', template); // footerTag에 template을 렌더링

      // footer.css 파일을 가져옴
      fetch(new URL('./components/footer/footer.css', import.meta.url))
        .then((response) => response.text())
        .then((css) => {
          // head 태그를 가져와서 CSS 코드를 추가함
          const headTag = document.getElementsByTagName('head')[0];
          const styleTag = document.createElement('style');
          styleTag.innerHTML = css;
          headTag.appendChild(styleTag);
        })
        .catch((error) => console.error(error));
    })
    .catch((error) => console.error(error));
};

// nav 바에 js 요소 적용
export const activeNavbar = () => {
  const loginBtn = document.getElementById('login');
  const logoutBtn = document.getElementById('logout');
  // const joinBtn = document.getElementById('join');
  const mypageBtn = document.getElementById('mypage');

  const loginAfter = document.getElementById('vb-login-after');
  const logoutAfter = document.getElementById('vb-logout-after');
  const joinAfter = document.getElementById('vb-join-after');
  const cart = document.getElementById('cart');

  // 로그인 시 세션 스토리지 확인용
  // sessionStorage.setItem('loginToken', '1');

  // 세션 스토리지 로그인 토큰 확인, nav 메뉴 구성
  // css 에 active 관련 추가해서 사용할 것
  if (sessionStorage.getItem('loginToken')) {
    loginBtn.classList.add('active');
    loginAfter.classList.add('active');
    joinBtn.classList.add('active');
    joinAfter.classList.add('active');
    logoutBtn.classList.remove('active');
    logoutAfter.classList.remove('active');
    logoutBtn.addEventListener('click', () => {
      sessionStorage.removeItem('loginToken');
      sessionStorage.removeItem('userId');
      sessionStorage.removeItem('adminToken');
    });
  } else {
    // 토큰이 없다면
    console.log('로그인 확인 토큰 없음');
    loginBtn.classList.remove('active');
    loginAfter.classList.remove('active');
    joinBtn.classList.remove('active');
    joinAfter.classList.remove('active');
    logoutBtn.classList.add('active');
    logoutAfter.classList.add('active');

    mypageBtn.addEventListener('click', () => {
      alert('로그인 후 이용 가능합니다.');
    });
  }

  // 관리자 토큰 보유 시, 마이페이지 버튼 눌렀을때 관리자 마이페이지 로 이동하도록 경로 수정
  if (sessionStorage.getItem('adminToken')) {
    mypageBtn.addEventListener('click', (e) => {
      e.preventDefault();
      window.location.href = '/admin';
    });
    cart.removeAttribute('href');
    cart.addEventListener('click', (e) => {
      e.preventDefault();
      alert('장바구니를 이용하시려면 일반 회원 계정으로 로그인해주세요.');
    });
  }

  // 로그아웃 시 세션스토리지 토큰 제거
  // if (logoutBtn.classList.contains('active')) {
  //   sessionStorage.removeItem('loginToken');
  //   sessionStorage.removeItem('userId');
  //   sessionStorage.removeItem('adminToken');
  // }
};
