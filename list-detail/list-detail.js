const productName = document.querySelector('.product-name');
const productPrice = document.querySelector('.product-price');
const innerText1 = document.querySelector('.inner-text1');
const innerText2 = document.querySelector('.inner-text2');

const minusButton = document.querySelector('.minus-button');
const plusButton = document.querySelector('.plus-button');
const innerNumber = document.querySelector('.inner-number');

const cartAddButton = document.querySelector('.cart-add-button');

const specificationsContainer = document.querySelector('.specifications-container');
const handlingPrecautionsContainer = document.querySelector('.handling-precautions-container');

const innerContentsText1 = document.querySelector(".inner-contents1");
const innerContentsText2 = document.querySelector(".inner-contents2");

fetch('./inner-data.json')
    .then(response => response.json())
    .then(data => {
        productName.innerHTML = data[0].title;
        productPrice.innerHTML = data[0].description;
        innerText1.innerHTML = data[0].specifications;
        innerText2.innerHTML = data[0].handlingPrecautions;
    })
    .catch(error => console.log(error));

let count = 1;

minusButton.addEventListener('click', function () {
    if (count > 0) {
        count--;
    }
    innerNumber.value = count;
})
plusButton.addEventListener('click', function () {
    count++;
    innerNumber.value = count;
})

innerNumber.addEventListener('input', function () {
    const value = innerNumber.value;
    if (isNaN(value)) {
        alert('숫자가 아닙니다!');
        innerNumber.value = 1;
    } else {
        count = parseInt(value);
    }
});

cartAddButton.addEventListener('click', function () {
    const cartItem = {
        productName: productName.innerHTML,
        productPrice: productPrice.innerHTML,
        quantity: innerNumber.value
    };

    const jsonCartItem = JSON.stringify(cartItem);
    console.log(jsonCartItem); // 브라우저 콘솔에 JSON 형태로 출력
    return jsonCartItem; // 반환하거나, 다른 함수로 전달하여 사용
});


specificationsContainer.addEventListener('click', function () {
    if (innerContentsText1.style.display === "none") {
        innerContentsText1.style.display = "block";
    } else {
        innerContentsText1.style.display = "none";
    }
});

handlingPrecautionsContainer.addEventListener('click', function () {
    if (innerContentsText2.style.display === "none") {
        innerContentsText2.style.display = "block";
        handlingPrecautionsContainer.style.borderBottom = 'none';

    } else {
        innerContentsText2.style.display = "none";
        handlingPrecautionsContainer.style.borderBottom = '2px solid #ccc';


    }
});

