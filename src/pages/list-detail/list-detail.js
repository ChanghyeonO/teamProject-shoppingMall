const contentTopData = document.querySelector('.content-top-data');
const contentMiddleData = document.querySelector('.content-middle-data')


const productName = document.querySelector('.product-name');
const productPrice = document.querySelector('.product-price');
const specificationsText = document.querySelector('.specifications-text');
const handlingPrecautionsText = document.querySelector('.handling-precautions-text');

const minusButton = document.querySelector('.minus-button');
const plusButton = document.querySelector('.plus-button');
const innerNumber = document.querySelector('.inner-number');

const cartAddButton = document.querySelector('.cart-add-button');

const specificationsContainer = document.querySelector('.specifications-container');
const handlingPrecautionsContainer = document.querySelector('.handling-precautions-container');

const specificationsContents = document.querySelector(".specifications-contents");
const handlingPrecautionsContents = document.querySelector(".handling-precautions-contents");

fetch('./inner-data.json')
    .then(response => response.json())
    .then(data => {
        //middle-content-box의 inner-data
        contentTopData.innerHTML = `
        <img src="${data[0].imgSrc}" />
        <img src="${data[0].imgSrc1}" />
        <img src="${data[0].imgSrc2}" />
    `;

        contentMiddleData.innerHTML = `
        <img src="${data[0].imgSrc3}" />
        <h5>${data[0].explanationTitle1}</h5>
        <p>${data[0].Explanation1}</p>
        <img src="${data[0].imgSrc4}" />
        <h5>${data[0].explanationTitle2}</h5>
        <p>${data[0].Explanation2}</p>
    `;

        //right-content-box의 inner-data
        productName.innerHTML = data[0].title;
        productPrice.innerHTML = data[0].description;
        specificationsText.innerHTML = data[0].specifications;
        handlingPrecautionsText.innerHTML = data[0].handlingPrecautions;
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
    specificationsContents.style.display = specificationsContents.style.display === "none" ? "block" : "none";

});

handlingPrecautionsContainer.addEventListener('click', function () {
    if (handlingPrecautionsContents.style.display === "none") {
        handlingPrecautionsContents.style.display = "block";
        handlingPrecautionsContainer.style.borderBottom = 'none';

    } else {
        handlingPrecautionsContents.style.display = "none";
        handlingPrecautionsContainer.style.borderBottom = '2px solid #ccc';

    }
});

