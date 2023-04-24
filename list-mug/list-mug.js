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

fetch('./list-mug.json')
    .then(response => response.json())
    .then(jsonData => {
        if (Array.isArray(jsonData)) {
            const links = jsonData.map(data => {
                for (let i = 0; i < jsonData.length; i++) {
                    return `
                    <a href="./item-detail.html? id=${data.data[i].id}" class="item-box">
                        <img src="${data.data[i].imgSrc}" alt="${data.data[i].name}" class="item-image">
                        <h5 class="item-name">${data.data[i].name}</h5>
                        <p class="item-price">${data.data[i].price}원 (부가세포함)</p>
                    </a>
                `;
                }
            });
            itemArea.innerHTML = links.join('');
            //jsonData의 length를 측정하여 itemCount의 innerHTML에 추가.
            mainTitle.innerHTML = jsonData[0].data[0].category;

            itemCount.innerHTML = `${jsonData.length}`;
        }
    })
    .catch(error => console.log(error));

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
