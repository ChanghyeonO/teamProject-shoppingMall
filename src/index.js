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