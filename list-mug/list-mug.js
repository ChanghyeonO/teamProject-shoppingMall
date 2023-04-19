import { jsonData } from "./list-mug-json.js";

const itemArea = document.querySelector('.item-area');
const itemCount = document.querySelector('.item-count');

const colorMenuTitle = document.querySelector('.color-menu-title');
const itemColorMenu = document.querySelector('.item-color-menu');

const stockMenuTitle = document.querySelector('.stock-menu-title');
const itemStockMenu = document.querySelector('.item-stock-menu');

const priceMenuTitle = document.querySelector('.price-menu-title');
const itemPriceMenu = document.querySelector('.item-price-menu');

//item-area에 html코드를 생성해주고 데이터와 넣어주는 코드 작성

// jsonData 배열 각 항목을 반복하고 <a> 요소 생성.
const links = jsonData.map(data => {

    // <a> 요소 생성, css 조작을 위해 classList 추가.
    const link = document.createElement('a');
    link.setAttribute('href', data.pageLink);
    link.classList.add('item-box');

    // <img> 요소 생성하고 src와 alt 속성 설정, css 조작을 위해 classList 추가.
    const img = document.createElement('img');
    img.setAttribute('src', data.imgSrc);
    img.setAttribute('alt', '이미지가 손상되었습니다');
    img.classList.add('item-image');

    // <h5> 요소 생성하고 텍스트 컨텐츠 설정, css 조작을 위해 classList 추가.
    const heading = document.createElement('h5');
    heading.textContent = data.title;
    heading.classList.add('item-name');

    // <p> 요소 생성하고 텍스트 컨텐츠 설정, css 조작을 위해 classList 추가.
    const paragraph = document.createElement('p');
    paragraph.textContent = data.description;
    paragraph.classList.add('item-price');

    // <a> 요소 하위 요소로 <img>, <h5>, <p> 요소 추가.
    link.appendChild(img);
    link.appendChild(heading);
    link.appendChild(paragraph);

    // 생성된 <a> 요소를 반환.
    return link;
});

// 반환된 <a> 요소들을 <div class="item-Area">에 추가.
links.forEach(link => itemArea.appendChild(link));

//jsonData의 length를 측정하여 itemCount의 innerHTML에 추가.
itemCount.innerHTML = `${jsonData.length}`;



// item - color - menu 조작하는 js 코드 생성

colorMenuTitle.addEventListener('click', function () {
    if (itemColorMenu.style.display === 'none') {

        itemColorMenu.style.display = 'block';
        itemStockMenu.style.display = 'none';

        itemColorMenu.style.display = 'flex';

    } else {
        itemColorMenu.style.display = 'none';
    }
});

stockMenuTitle.addEventListener('click', function () {
    if (itemStockMenu.style.display === 'none') {

        itemStockMenu.style.display = 'block';
        itemColorMenu.style.display = 'none';

    } else {
        itemStockMenu.style.display = 'none';
    }
});
