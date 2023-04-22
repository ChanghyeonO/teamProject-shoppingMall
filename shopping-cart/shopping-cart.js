// 장바구니에서 아이템 삭제
document.querySelectorAll('button.btn-remove').forEach(function (removeButton) {
  removeButton.addEventListener('click', function (event) {
    event.preventDefault();
    // 해당 삭제 버튼의 부모부모부모 노드(li<div<div<a>>>)가 아이템의 범위, 그걸 remove
    removeButton.parentNode.parentNode.parentNode.style.display = 'none';
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
