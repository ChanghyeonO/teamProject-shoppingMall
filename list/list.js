const itemArea = document.querySelector('.item-area');
const mainTitle = document.querySelector('.main-title')
const itemCount = document.querySelector('.item-count');

const colorMenuTitle = document.querySelector('.color-menu-title');
const itemColorMenu = document.querySelector('.item-color-menu');

const stockMenuTitle = document.querySelector('.stock-menu-title');
const itemStockMenu = document.querySelector('.item-stock-menu');

const priceMenuTitle = document.querySelector('.price-menu-title');
const itemPriceMenu = document.querySelector('.item-price-menu');

const itemSortingTitle = document.querySelector('.item-sorting-title');
const itemSortingMenu = document.querySelector('.item-sorting-menu');

//만약 nav바 product중 list를 클릭하면 
const productListUrl = 'http://34.64.252.224/product/list?category=TEA';

async function fetchData() {
    try {
        const response = await fetch(productListUrl);
        //productListUrl의 Promise 데이터를 받아오기까지 기다림
        const jsonData = await response.json();

        if (Array.isArray(jsonData.data)) {
            const links = jsonData.data.map(data => `
          <a href="./item-detail?id=${data._id}" class="item-box">
            <img src="${data.imgSrc}" alt="${data.name}" class="item-image">
            <h5 class="item-name">${data.name}</h5>
            <p class="item-price">${data.price}원 (부가세포함)</p>
          </a>
        `);

            itemArea.innerHTML = links.join('');
            mainTitle.innerHTML = jsonData.data[0].category;
            itemCount.innerHTML = `${jsonData.data.length}`;
        }
        //내가 작성한 함수 내에 에러가 발생 했을 경우에 catch로 error를 출력
    } catch (error) {
        console.log(error);
    }
}

fetchData();

// item - color - menu 조작하는 js 코드 생성

colorMenuTitle.addEventListener('click', function () {
    if (itemColorMenu.style.display === 'none') {

        itemColorMenu.style.display = 'flex';

        itemStockMenu.style.display = 'none';
        itemSortingMenu.style.display = 'none';


    } else {
        itemColorMenu.style.display = 'none';

    }
});

stockMenuTitle.addEventListener('click', function () {
    if (itemStockMenu.style.display === 'none') {

        itemStockMenu.style.display = 'block';
        itemColorMenu.style.display = 'none';
        itemSortingMenu.style.display = 'none';


    } else {
        itemStockMenu.style.display = 'none';
    }
});


itemSortingTitle.addEventListener('click', function () {
    if (itemSortingMenu.style.display === 'none') {

        itemSortingMenu.style.display = 'block';
        itemColorMenu.style.display = 'none';
        itemStockMenu.style.display = 'none';

    } else {
        itemSortingMenu.style.display = 'none';
    }
});
