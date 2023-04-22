// 장바구니에서 아이템 삭제
document.querySelectorAll('a.remove').forEach(function (removeLink) {
  removeLink.addEventListener('click', function (event) {
    event.preventDefault();
    removeLink.parentNode.parentNode.parentNode.style.display = 'none';
  });
});

// 테스트용으로 모든 아이템 보여주기
document.querySelectorAll('a.btn.continue').forEach(function (continueLink) {
  continueLink.addEventListener('click', function () {
    document.querySelectorAll('li.items').forEach(function (item) {
      item.style.display = 'block';
    });
  });
});
