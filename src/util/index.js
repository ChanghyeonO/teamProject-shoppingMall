export const drawNavbar = () => {
  let userId = '';
  let template = `
    <nav class="navbar" role="navigation" aria-label="main navigation">
        <div class="navbar-brand">
          <a class="navbar-item" href="/">
            <img
              src="../../assets/img/DAMAH-logo.PNG"
              alt="담아"
              style="width: 100px; height: 60px"
            />
          </a>
          <a
            role="button"
            class="navbar-burger burger"
            aria-label="menu"
            aria-expanded="false"
            data-target="navMenu"
          >
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </a>
        </div>

        <div class="navbar-menu" id="navMenu">
          <div class="navbar-start">
            <li class="navbar-item navbar-item--arrow" href="#">
              PRODUCT
              <div class="dropdown-container">
                <ul>
                  <li>TEA-WARE</li>
                  <li>TUMBLER & BOTTLE</li>
                  <li>MUG & CUP</li>
                </ul>
              </div>
            </li>

            <li class="navbar-item" href="#">ABOUT</li>
            <li class="navbar-item" href="#">LOCATION</li>
            <li class="navbar-item" href="#">FOR BUSINESS</li>
          </div>

          <div class="navbar-end">
            <div class="navbar-icon">
              <div class="icon-buttons">
                <span class="icon-button" id="login">
                  <i class="fi fi-rr-power"></i>
                </span>
                <span class="icon-button" id="userinfo">
                  <i class="fi fi-rr-user"></i>
                </span>
                <span class="icon-button" id="cart">
                  <i class="fi fi-rr-shopping-cart"></i>
                </span>
                <span class="icon-button" id="logout">
                  <i class="fi fi-rr-exit"></i>
                </span>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </body>
  `;
  // 첫 번째 header 태그를 찾아서 해당 태그의 시작 부분에 nav.html을 삽입
  const headerTag = document.getElementsByTagName('header')[0];
  headerTag.insertAdjacentHTML('afterbegin', template);

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

  // // 현재 모듈의 URL을 기반으로 `./components/nav/nav.html` 경로에서 리소스를 가져오는 `fetch` 함수를 호출
  // fetch(new URL('./components/nav/nav.html', import.meta.url))
  //   // 가져온 html 코드를 text로 변환
  //   .then((response) => response.text())
  //   // 변환된 html 코드를 template 변수에 할당
  //   .then((data) => {
  //     template = data;
  //     // 첫 번째 header 태그를 찾아서 해당 태그의 시작 부분에 nav.html을 삽입
  //     const headerTag = document.getElementsByTagName('header')[0];
  //     headerTag.insertAdjacentHTML('afterbegin', template);

  //     // nav.css 파일을 가져옴
  //     fetch(new URL('./components/nav/nav.css', import.meta.url))
  //       .then((response) => response.text())
  //       .then((css) => {
  //         // head 태그를 가져와서 CSS 코드를 추가함
  //         const headTag = document.getElementsByTagName('head')[0];
  //         const styleTag = document.createElement('style');
  //         styleTag.innerHTML = css;
  //         headTag.appendChild(styleTag);
  //       })
  //       .catch((error) => console.error(error));
  //   })
  //   .catch((error) => console.error(error));
};

// footer.css를 template에 적용하는 함수
export const drawFooter = () => {
  let template = `
  <footer>
    <div class="footer">
        <div class="footer-row">
            <p>회사명: (주)담아 | 대표자: Team Rescue | 사업자등록번호: ###-##-##### | 
                통신판매업 신고: 제 ####-서울%%-@@@@호</p>
            <p>주소: 서울 성동구 아차산로##길 ## 서울넉넉 @층(우편번호 12345) | 전화: 070-4633-2017</p>
            <p>메일: damah@mail.com | 개인정보관리 책임자: Master</p>
            <p>©2023 DAMAH . All right reserved.</p>
        </div>
    </div>
  </footer>
  `;
  // 마지막 footer 태그를 찾아서 해당 태그의 시작 부분에 footer.html을 삽입
  const footerTag = document.getElementsByTagName('footer')[0]; // footer 태그를 가져와 footerTag 변수에 할당
  footerTag.insertAdjacentHTML('beforeend', template); // footerTag에 template을 렌더링

  // // footer.html 파일을 가져와서 text로 변환
  // fetch(new URL('./components/footer/footer.html', import.meta.url))
  //   .then((response) => response.text()) // 가져온 html 코드를 text로 변환
  //   .then((data) => {
  //     template = data; // 변환된 html 코드를 template 변수에 할당

  //     // 마지막 footer 태그를 찾아서 해당 태그의 시작 부분에 footer.html을 삽입
  //     const footerTag = document.getElementsByTagName('footer')[0]; // footer 태그를 가져와 footerTag 변수에 할당
  //     footerTag.insertAdjacentHTML('beforeend', template); // footerTag에 template을 렌더링

  //     // footer.css 파일을 가져옴
  //     fetch(new URL('./components/footer/footer.css', import.meta.url))
  //       .then((response) => response.text())
  //       .then((css) => {
  //         // head 태그를 가져와서 CSS 코드를 추가함
  //         const headTag = document.getElementsByTagName('head')[0];
  //         const styleTag = document.createElement('style');
  //         styleTag.innerHTML = css;
  //         headTag.appendChild(styleTag);
  //       })
  //       .catch((error) => console.error(error));
  //   })
  //   .catch((error) => console.error(error));
};

// nav 바에 js 요소 적용
export const activeNavbar = () => {
  // 로그인 버튼, 로그아웃 버튼, 유저 정보 버튼, 장바구니 버튼을 가져온다.
  const loginBtn = document.getElementById('login');
  const logoutBtn = document.getElementById('logout');
  const userinfoBtn = document.getElementById('userinfo');
  const cartBtn = document.getElementById('cart');

  // userinfoBtn을 클릭했을 때 실행되는 함수
  function handleUserInfoBtnClick() {
    // jwt 토큰을 가져옴
    const token = getToken();
    // fetch를 이용해 서버에 /api/user 요청을 보냄
    fetch('/api/user', {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((response) => {
        // 응답이 성공적으로 도착했을 때
        if (response.ok) {
          // 사용자 정보 페이지를 보여줌
          displayPersonalInformationPage();
        } else {
          // 응답이 실패했을 때 (로그인하지 않은 경우)
          // 로그인 페이지를 보여줌
          displayLoginPage();
        }
      })
      .catch((error) => {
        // 에러가 발생했을 때
        console.error(error);
      });
  }

  // 로그인 여부를 확인하기 위해 세션 스토리지에서 토큰을 가져온다.
  // 만약 로그인을 했다면, 로그아웃 버튼을 보이게 하고, 클릭 시 세션 스토리지에서 토큰을 삭제한다.
  if (sessionStorage.getItem('loginToken')) {
    logoutBtn.classList.remove('active');
    logoutAfter.classList.remove('active');
    logoutBtn.addEventListener('click', () => {
      sessionStorage.removeItem('loginToken');
      sessionStorage.removeItem('userId');
      sessionStorage.removeItem('adminToken');
    });
  } else {
    // 로그인을 하지 않았다면, 로그아웃 버튼을 숨기고, 유저 정보 버튼 클릭 시 로그인 후 이용 가능하다는 알림창을 띄운다.
    console.log('로그인 확인 토큰 없음');
    logoutBtn.classList.add('active');
    logoutAfter.classList.add('active');
    userinfoBtn.addEventListener('click', () => {
      alert('로그인 후 이용 가능합니다.');
    });
  }

  // 로그아웃 시 세션스토리지 토큰 제거
  // if (logoutBtn.classList.contains('active')) {
  //   sessionStorage.removeItem('loginToken');
  //   sessionStorage.removeItem('userId');
  //   sessionStorage.removeItem('adminToken');
  // }
};
