export const drawNavbar = () => {
  let userId = '';
  let navTemplate = `
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
            </div>
          </div>
        </div>
      </div>
    </nav>
  `;
  // 첫 번째 header 태그를 찾아서 해당 태그의 시작 부분에 nav.html을 삽입
  const headerTag = document.getElementsByTagName('header')[0];
  headerTag.insertAdjacentHTML('afterbegin', navTemplate);
};

// footer.css를 template에 적용하는 함수
export const drawFooter = () => {
  let footerTemplate = `
    <div class="footer">
        <div class="footer-row">
            <p>회사명: (주)담아 | 대표자: Team Rescue | 사업자등록번호: ###-##-##### | 
                통신판매업 신고: 제 ####-서울%%-@@@@호</p>
            <p>주소: 서울 성동구 아차산로##길 ## 서울넉넉 @층(우편번호 12345) | 전화: 070-4633-2017</p>
            <p>메일: damah@mail.com | 개인정보관리 책임자: Master</p>
            <p>©2023 DAMAH . All right reserved.</p>
        </div>
    </div>
  `;
  // 마지막 footer 태그를 찾아서 해당 태그의 시작 부분에 footer.html을 삽입
  const footerTag = document.getElementsByTagName('footer')[0]; // footer 태그를 가져와 footerTag 변수에 할당
  footerTag.insertAdjacentHTML('beforeend', footerTemplate); // footerTag에 template을 렌더링
};

// nav 바에 js 요소 적용
export const activeNavbar = () => {
  // 로그인 버튼, 로그아웃 버튼, 유저 정보 버튼, 장바구니 버튼을 가져온다.
  const loginBtn = document.getElementById('login');
  // const logoutBtn = document.getElementById('logout');
  const userinfoBtn = document.getElementById('userinfo');
  const cartBtn = document.getElementById('cart');

  // 서버 포트 URI
  const URI = 'http://34.64.252.224';

  loginBtn.addEventListener('click', (e) => {
    e.preventDefault();
    console.log("addEvent is working on");
    window.location.href = '../login/login.html';
  });

  // userinfoBtn 클릭 시 실행되는 함수
  userinfoBtn.addEventListener('click', async (e) => {
    e.preventDefault();

    // 서버로 signed-in 요청 보내기
    const response = await fetch(`${URI}/api/auth/signed-in`, {
        method: 'GET',
        credentials: 'include',
      })
      .then((response) => {
        if (response.ok) {
          // 로그인 되었다면 바로 유저 정보 페이지로 이동
          window.location.href = '../user/user.html';
        } else {
          window.location.href = '../login/login.html';
        }
      })
      .catch((error) => {
        console.error(error);
      });
  });

  cartBtn.addEventListener('click', (e) => {
    e.preventDefault();
    window.location.href = '../shopping-cart/shopping-cart.html';
  });

  // // 로그아웃 버튼을 클릭했을 때 이벤트
  // logoutBtn.addEventListener('click', (e) => {
  //   e.preventDefault();
  //   //
  // });
};
