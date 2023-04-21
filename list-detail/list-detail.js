const productName = document.querySelector('.product-name');
const productPrice = document.querySelector('.product-price');

const specificationsContainer = document.querySelector('.specifications-container');
const handlingPrecautionsContainer = document.querySelector('.handling-precautions-container');

const innerContentsText1 = document.querySelector(".inner-contents1");
const innerContentsText2 = document.querySelector(".inner-contents2");

fetch('../list-mug/list-mug-json.js')
    .then(response => response.json())
    .then(data => {
        productName.innerHTML = data.title;
        productPrice.innerHTML = data.description;
        innerContentsText1.innerHTML = data.innerData.specifications;
        innerContentsText2.innerHTML = data.innerData.handlingPrecautions;
    })
    .catch(error => console.log(error));

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
    } else {
        innerContentsText2.style.display = "none";
    }
});

