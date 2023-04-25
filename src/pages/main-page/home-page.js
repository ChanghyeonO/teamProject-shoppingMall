import {
  // 회원가입 등 네비바 랜더링
  drawNavbar,
  // 푸터 랜더링
  drawFooter,
<<<<<<< HEAD:main-page/home-page.js
} from '../../shared.js';
=======
} from '../../index.js';
>>>>>>> origin/dev-FE:src/pages/main-page/home-page.js
drawNavbar();
drawFooter();

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


// Load the YouTube API script asynchronously
var tag = document.createElement('script');
tag.src = 'https://www.youtube.com/iframe_api';
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

var player;
function onYouTubeIframeAPIReady() {
  player = new YT.Player('player', {
    width: '100%',
    height: '600px',
    videoId: 'jYc3RZbWTHg',
    playerVars: {
      autoplay: 1,
      mute: 1,
      controls: 0,
      loop: 1, // 반복 재생
      modestbranding: 1,
      // 'fs': 1,    // 전체 화면 버튼이 표시 x
      playsinline: 1,
      rel: 0, // 관련 영상 보이는 거 막기
      iv_load_policy: 3,
      enablejsapi: 1, // 비디오 클릭 불가하게
    },
    events: {
      onReady: onPlayerReady,
    },
  });
}

// Start playing the video when it's ready
function onPlayerReady(event) {
  event.target.playVideo();
}
