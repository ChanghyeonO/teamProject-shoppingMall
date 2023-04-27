import {
  // 회원가입 등 네비바 랜더링
  drawNavbar,
  // 푸터 랜더링
  drawFooter,
  activeNavbar,
} from '../../utils/index.js';
drawNavbar();
drawFooter();
activeNavbar();

// 장바구니에서 아이템 삭제
document.querySelectorAll('a.remove').forEach(function (removeLink) {
  removeLink.addEventListener('click', function (event) {
    event.preventDefault();
    // 해당 삭제 버튼의 부모부모부모 노드(li<div<div<a>>>)가 아이템의 범위, 그걸 remove
    removeLink.parentNode.parentNode.parentNode.style.display = 'none';
  });
});

async function getSessionStorage() {
  try {
    let cartData = sessionStorage.getItem('cartItem');
    if (cartData) {
      cartData = JSON.parse(cartData);
      if (!Array.isArray(cartData)) {
        // cartData를 array타입으로 변경
        cartData = [cartData];
      }
    } else {
      cartData = { items: [] };
    }
    // 현재 sessionStorage에 담겨 있는 정보 예시
    // [{productName: "킨토 캐스트 에스프레소컵 90ml", productPrice: "7,400원 (부가세포함)", quantity: "3"}]

    // map으로 각각의 데이터를 가져와서 li 만들어 준 후 join
    // 지금은 li class가 items odd로 고정, css로 odd even을 다르게 보여줄 경우 filter를 한 번 더 적용해야 할 것 같습니다.
    // img src의 경우 sessionStorage에 담겨 있지 않아 id값을 활용하여 다르게 가져와야 할 것 같습니다.
    // prodTotal 하위의 <p>태그는 'productPrice'값이 현재 Number가 아니기에 창현님이 수정하신 수 다시 적용해야합니다.
    // #remove 함수가 만들어지지 않아 동작 확인이 안됩니다. 기능 추가 부탁드립니다!

    const shoppingList = cartData
      .map(
        (item) => `
      <li class="items odd">
        <div class="infoWrap"> 
          <div class="cartSection">
            <img src="https://kinto.kr/data/item/21091/thumb-21091_1024x1024_600x600.jpg" alt="" class="itemImg" />
            <h3>${item.productName}</h3>
            <ul class="count-container">
              <li class="count-button">
                <div class="minus-button"><i class="fi fi-br-minus"></i></div>
                <input type="text" value="1" class="inner-number"></input>
                <div class="plus-button"><i class="fi fi-rr-plus"></i></div>
              </li>
            </ul>
            <p> <input type="text" class="qty" placeholder="1"/>${item.quantity} x ${item.productPrice} 원</p>
          </div>  
        
          <div class="prodTotal cartSection">
            <p> 금액을 Number로 변경'원'</p>
          </div>
          <div class="cartSection removeWrap">
            <a href="#" class="remove">x</a>
          </div>
        </div>
      </li>
    `
      )
      .join('');
    // cartWrap 아래에 shoppingList를 추가.
    document
      .querySelector('.cartWrap')
      .insertAdjacentHTML('beforeend', shoppingList);

    return cartData;
  } catch (error) {
    console.error(error);
  }
}
// 상품별 총 가격 표시
async function updateCart() {
  const cartData = await getSessionStorage();
  const prodTotalPrice = cartData.productPrice * cartData.quantity;

  document.querySelector('.prodTotal.cartSection p').innerHTML = prodTotalPrice + '원';
}
getSessionStorage();


// 제품 qty 더하기 빼기 이벤트
const minusButton = document.querySelector('.minus-button');
const plusButton = document.querySelector('.plus-button');
const innerNumber = document.querySelector('.inner-number');
// 초기 수량을 1로 설정
let count = 1;

// sessionStorage에서 정보 가져오기
const cartItems = JSON.parse(sessionStorage.getItem('cartItems'));
// 현재 수량 값
count = parseInt(innerNumber.value);
// 마이너스 버튼 클릭 이벤트
minusButton.addEventListener('click', function () {
  // 수량이 1보다 크면 1 감소
  if (count > 1) {
    count--;
  }
  innerNumber.value = count;
  // 현재 상품의 수량 정보를 sessionStorage에서 찾아서 변경
  cartItems.forEach((item) => {
    if (item.productName === document.querySelector('.cartSection h3')) {
      item.quantity = innerNumber.value;
    }
  });
  // 변경된 정보를 sessionStorage에 다시 저장
  sessionStorage.setItem('cartItems', JSON.stringify(cartItems));
  updateCart();
});

// 플러스 버튼 클릭 이벤트
plusButton.addEventListener('click', function () {
  // 수량 1 증가
  count++;
  innerNumber.value = count;

  cartItems.forEach((item) => {
    if (item.productName === document.querySelector('.cartSection h3')) {
      item.quantity = innerNumber.value;
    }
  });
  sessionStorage.setItem('cartItems', JSON.stringify(cartItems));
  updateCart();
});

// 수량을 나타내는 숫자 요소의 값이 변경될 때 이벤트
innerNumber.addEventListener('input', function () {
  const value = innerNumber.value;
  // 입력된 값이 숫자가 아니면
  if (isNaN(value)) {
    alert('숫자가 아닙니다!');
    // 수량을 1로 초기화
    innerNumber.value = 1;
  } else {
    // 입력된 값을 정수로 변환하여 수량으로 설정
    count = parseInt(value);
  }

  cartItems.forEach((item) => {
    if (item.productName === document.querySelector('.cartSection h3')) {
      item.quantity = innerNumber.value;
    }
  });
  sessionStorage.setItem('cartItems', JSON.stringify(cartItems));
  updateCart();
});

// 선택상품 금액, 주문금액 갱신해주는 함수
function updateTotalRow() {
  // sessionStorage에서 cartItem들을 가져옴, default는 []
  const cartItems = JSON.parse(sessionStorage.getItem('cartItems')) || [];
  let totalPrice = 0;
  // cartItems를 순회하며 각 아이템의 가격과 수량을 곱한 값을 totalPrice에 더함
  cartItems.forEach((item) => {
    totalPrice += item.productPrice * item.quantity;
  });
  
  document.querySelector('.selected-all-value').innerHTML = totalPrice + ' 원';
  document.querySelector('.total-value').innerHTML = totalPrice + 4000 + ' 원';
}
window.addEventListener('storage', updateTotalRow);






// 구매하기 버튼 누르고 서버에 요청가는 게 이거 맞나요???
const orderButton = document.querySelector('.order');
orderButton.addEventListener('click', (event) => {
  event.preventDefault();
  const orderData = {
    products: cartItems.map(item => ({
      productName: item.productName,
      productPrice: item.productPrice,
      quantity: item.quantity
    }))
  };

  fetch('/api/order', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(orderData)
  })
  .then(response => {
    if (response.ok) {
      return fetch('/api/order/orders');
    } else {
      throw new Error('주문 실패');
    }
  })
  .then(response => response.json())
  .then(orderList => {
    // 구매창에서 주문 내역으로 무언가
  })
  .catch(error => console.error(error));
})
