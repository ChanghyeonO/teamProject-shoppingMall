const URI = "http://34.64.252.224";

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

const productListUrl = `${URI}/api/product/list?category=TUMBLER`;

async function fetchData() {
    try {
        const response = await fetch(productListUrl);
        const jsonData = await response.json();
        if (Array.isArray(jsonData.data)) {
            const links = jsonData.data.map(data => `
            <a href="../list-detail/list-detail.html?id=${data._id}" class="item-box">
            <img src="${data.imgSrc}" alt="${data.name}" class="item-image">
            <h5 class="item-name">${data.name}</h5>
            <p class="item-price">${data.price}원 (부가세포함)</p>
          </a>
        `);
            itemArea.innerHTML = links.join('');
            mainTitle.innerHTML = jsonData.data[0].category;
            itemCount.innerHTML = `${jsonData.data.length}`;
        }
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
