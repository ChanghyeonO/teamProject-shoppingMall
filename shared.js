export const drawNavbar = () => {
  let userId = '';
  let template; // nav.html의 text로 변환된 코드가 할당되는 변수

  // 후에 관리자 계정 만들면 활성화
  // if (sessionStorage.getItem('userId') && sessionStorage.getItem('adminToken')) {
  //   userId = `/admin/`;
  // }
  // sessionStorage에서 userId를 가져와서 해당 값이 존재하는 경우 `/users/userlist/${userId}`를, 그렇지 않은 경우 `/users/login`을 userId 변수에 할당
  if (sessionStorage.getItem('userId')) {
    userId = `/users/userlist/${sessionStorage.getItem('userId')}`;
  } else {
    userId = `/users/login`;
  }

  // "./components/nav/nav.html" 파일의 html 코드를 가져오기 위해 fetch 함수를 사용
  fetch('./components/nav/nav.html')
    // 가져온 html 코드를 text로 변환
    .then((response) => response.text())
    // 변환된 html 코드를 template 변수에 할당
    .then((data) => {
      template = data;
    });

  // 첫 번째 header 태그를 찾아서 해당 태그의 시작 부분에 nav.html을 삽입
  const headerTag = document.getElementsByTagName('header')[0];
  headerTag.insertAdjacentHTML('afterbegin', template);
};
