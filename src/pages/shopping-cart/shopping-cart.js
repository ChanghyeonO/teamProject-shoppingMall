// 장바구니에서 상품 제거
$('a.remove').click(function(){
    event.preventDefault();
    $( this ).parent().parent().parent().hide( 400 );
})
  
// 단지 테스트용, 모든 아이템들을 보여줌
$('a.btn.continue').click(function(){
    $('li.items').show(400);
})
  
    