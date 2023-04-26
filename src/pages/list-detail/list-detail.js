const URI = "http://34.64.252.224";

const leftContentsBoxData = document.querySelector('.left-content')

const contentMiddleData = document.querySelector('.content-middle-data')

const productName = document.querySelector('.product-name');
const productPrice = document.querySelector('.product-price');
const specificationsText = document.querySelector('.specifications-text');
const handlingPrecautionsText = document.querySelector('.handling-precautions-text');

const minusButton = document.querySelector('.minus-button');
const plusButton = document.querySelector('.plus-button');
const innerNumber = document.querySelector('.inner-number');

const countHint = document.querySelector('.count-hint');
const cartAddButton = document.querySelector('.cart-add-button');

const specificationsContainer = document.querySelector('.specifications-container');
const handlingPrecautionsContainer = document.querySelector('.handling-precautions-container');

const specificationsContents = document.querySelector(".specifications-contents");
const handlingPrecautionsContents = document.querySelector(".handling-precautions-contents");

// //현재 URL에서 쿼리 문자열을 추출해서 URLSearchParmas 객체 생성
// const params = new URLSearchParams(window.location.search);

// //객체에서 값만 추출해서 변수 data에 저장
// let data = "";

// for (const value of params.values()) {
//     data = value;
// }

// fetch('./inner-data.json')
//     .then(response => response.json())
//     .then(data => {

//         //left-content-box의 inner-data
//         leftContentsBoxData.innerHTML = `
//         <div class="top-image-box">
//                 <img src="${data[0].imgSrc}" />
//         </div>
//         <div class="bottom-image-box">
//                 <img src="${data[0].imgSrc1}" />
//         </div>        
//         `

//         //middle-content-box의 inner-data 
//         contentMiddleData.innerHTML = `
//         <img src="${data[0].imgSrc}" />
//         <h5>${data[0].explanationTitle1}</h5>
//         <p>${data[0].Explanation1}</p>
//         <img src="${data[0].imgSrc1}" />
//         <h5>${data[0].explanationTitle2}</h5>
//         <p>${data[0].Explanation2}</p>
//     `;

//         //right-content-box의 inner-data
//         productName.innerHTML = data[0].title;
//         productPrice.innerHTML = data[0].description;
//         specificationsText.innerHTML = data[0].specifications;
//         handlingPrecautionsText.innerHTML = data[0].handlingPrecautions;



//         document.querySelector('.top-image-box').addEventListener('click', function () {
//             window.scrollTo(0, 0);
//         });
//         document.querySelector('.bottom-image-box').addEventListener('click', function () {
//             window.scrollTo(0, 900);
//         });
//     })
//     .catch(error => console.log(error));



async function fetchData() {
    try {
        //현재 URL에서 쿼리 문자열을 추출해서 URLSearchParmas 객체 생성
        const params = new URLSearchParams(window.location.search);
        //객체에서 값만 추출해서 변수 data에 저장
        let data = "";
        for (const value of params.values()) {
            data = value;
        }
        //fetch() 메서드에서 http://34.64.252.224/product/detail? 문자열과 URLSearchParmas 객체를 조합해서 요청 URL 생성 및 서버에 요청
        const response = await fetch(`http://34.64.252.224/api/product/detail?` + new URLSearchParams({ id: data }));

        const jsonData = await response.json();
        console.log(jsonData);

        //left-content-box의 inner-data
        //     leftContentsBoxData.innerHTML = `
        //     <div class="top-image-box">
        //       <img src="${jsonData[0].imgSrc}" />
        //     </div>
        //     <div class="bottom-image-box">
        //       <img src="${jsonData[0].imgSrc1}" />
        //     </div>        
        //   `

        //middle-content-box의 inner-data 
        //     contentMiddleData.innerHTML = `
        //     <img src="${jsonData[0].imgSrc}" />
        //     <h5>${jsonData[0].explanationTitle1}</h5>
        //     <p>${jsonData[0].Explanation1}</p>
        //     <img src="${jsonData[0].imgSrc1}" />
        //     <h5>${jsonData[0].explanationTitle2}</h5>
        //     <p>${jsonData[0].Explanation2}</p>
        //   `;

        //right-content-box의 inner-data
        productName.innerHTML = jsonData.data.name;
        productPrice.innerHTML = `${jsonData.data.price}원 (부가세별도)`;
        specificationsText.innerHTML = jsonData.data.specifications;
        handlingPrecautionsText.innerHTML = jsonData.data.handlingPrecautions;


        // //left-content-box의 image박스를 클릭했을 때 해당 이미지가 있는 scrollY 좌표로 이동하도록 구현
        // document.querySelector('.top-image-box').addEventListener('click', function () {
        //     window.scrollTo(0, 0);
        // });
        // document.querySelector('.bottom-image-box').addEventListener('click', function () {
        //     window.scrollTo(0, 900);
        // });

        console.log(jsonData.count)
        // if (innerNumber.value > jsonData.count) {

        // }
    } catch (error) {
        console.log(error);
    }
}

fetchData();




window.addEventListener('scroll', function () {
    const scrollY = window.scrollY;
    const leftContent = document.querySelector('.left-content');
    if (scrollY >= 100) {
        leftContent.style.position = 'fixed';
    } else {
        leftContent.style.position = 'absolute';
    }
});

let count = 1;

minusButton.addEventListener('click', function () {
    if (count > 1) {
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

// 장바구니 배열 생성
const cartItems = [];
cartAddButton.addEventListener('click', function () {
    // 여기에 제품 아이디 추가 하셔야합니다!
    const cartItem = {
        // productID: 
        productName: productName.innerHTML,
        productPrice: productPrice.innerHTML,
        quantity: innerNumber.value
    };

    addToCart(cartItem);
});

function addToCart(item) {
    // 이미 장바구니에 존재하는 제품인지 찾는다.
    const existingItemIndex = cartItems.findIndex(i => i.id === item.id);

    if (existingItemIndex > -1) {
        // 이미 존재하는 제품일 경우, 수량을 더함.
        cartItems[existingItemIndex].quantity = Number(cartItems[existingItemIndex].quantity) + Number(item.quantity);
    } else {
        // 새로운 제품일 경우, 장바구니에 추가.
        cartItems.push(item);
    }
    // 장바구니 목록을 localStorage에 저장
    sessionStorage.setItem('cartItems', JSON.stringify(cartItems));
}


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

