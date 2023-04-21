// html 랜더링 함수 모음
// 일단 가져온....
// import {
//   // 회원가입 등 네비바 랜더링
//   drawNavbar,
//   // 카테고리 바 랜더링
//   drawCategoryBar,
//   // 토큰 보유에 따라 네비바 변화
//   activeNavbar,
//   // 카테고리 목록을 api 에서 받아와 값 채워 넣기
//   fillCategoryBar,
//   // 푸터 랜더링
//   drawFooter,
//   //숫자 자리수마다 , 찍기
//   addCommas,
//   // 관리자 로그인 그리기
//   drawAdminLink,
// } from '../useful-functions.js';



// 모든 slider images 가져옴, 이미지 루틴을 돌리기 위한 index 설정
const sliderImages = document.querySelectorAll('.slider img');
let currentImageIndex = 0;

// slider의 이미지를 7초마다 전환하는 함수
function changeImage() {
  // 최근의 이미지를 안보이게
  sliderImages[currentImageIndex].style.display = 'none';
  // 다음 이미지의 인덱스 +1
  currentImageIndex++;
  // slider의 이미지수와 최근 이미지의 index가 같다면, 최근 이미지의 index를 0으로
  if (currentImageIndex === sliderImages.length) {
    currentImageIndex = 0;
  }
  // 다음 이미지 보이게
  sliderImages[currentImageIndex].style.display = 'block';
}
// 이미지 전환 간격은 7000ms
setInterval(changeImage, 7000);
