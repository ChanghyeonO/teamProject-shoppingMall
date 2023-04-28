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

const URI = "http://34.64.252.224";

const itemArea = document.querySelector('.item-area');
const mainTitle = document.querySelector('.main-title')
const itemCount = document.querySelector('.item-count');

const colorMenuTitle = document.querySelector('.color-menu-title');
const itemColorMenu = document.querySelector('.item-color-menu');

const stockMenuTitle = document.querySelector('.stock-menu-title');
const itemStockMenu = document.querySelector('.item-stock-menu');

const itemSortingTitle = document.querySelector('.item-sorting-title');
const itemSortingMenu = document.querySelector('.item-sorting-menu');


const category = new URLSearchParams(window.location.search).get("c");
const productListUrl = `${URI}/api/product/list?category=${category}`;


//상품 목록 불러오는 fetchData함수 선언
async function fetchData() {
    try {
        // fetch 함수를 사용해 상품 목록 데이터를 서버에서 가져옴
        const response = await fetch(productListUrl);
        const jsonData = await response.json();

        let jsonDataData = jsonData.data;

        document.querySelector('.sorting-low-price-button').addEventListener('click', function () {
            // 가격이 낮은 순서대로 정렬
            jsonDataData = jsonData.data.sort((a, b) => a.price - b.price);

            if (Array.isArray(jsonDataData)) {

                const links = jsonDataData.map(data => `
                    <a href="../list-detail/list-detail.html?id=${data._id}" class="item-box">
                    <img src="../../assets/img/mug1.jpg" alt="${data.name}" class="item-image">
                    <h5 class="item-name">${data.name}</h5>
                    <p class="item-price">${data.price}원<br>(부가세포함)</p>
                </a>
            `);



                //상품 목록 UI 브라우저에 출력
                itemArea.innerHTML = links.join('');
                mainTitle.innerHTML = jsonData.data[0].category;
                itemCount.innerHTML = `${jsonData.data.length}`;
            }
        });

        document.querySelector('.sorting-high-price-button').addEventListener('click', function () {
            // 가격이 높은 순서대로 정렬
            jsonDataData = jsonData.data.sort((a, b) => b.price - a.price);

            if (Array.isArray(jsonDataData)) {

                const links = jsonDataData.map(data => `
                    <a href="../list-detail/list-detail.html?id=${data._id}" class="item-box">
                    <img src="../../assets/img/mug1.jpg" alt="${data.name}" class="item-image">
                    <h5 class="item-name">${data.name}</h5>
                    <p class="item-price">${data.price}원<br>(부가세포함)</p>
                </a>
            `);



                //상품 목록 UI 브라우저에 출력
                itemArea.innerHTML = links.join('');
                mainTitle.innerHTML = jsonData.data[0].category;
                itemCount.innerHTML = `${jsonData.data.length}`;
            }
        });

        //상품 목록 데이터가 배열일 경우, 상품 목록 UI 생성
        if (Array.isArray(jsonDataData)) {

            const links = jsonDataData.map(data => `
                <a href="../list-detail/list-detail.html?id=${data._id}" class="item-box">
                <img src="../../assets/img/mug1.jpg" alt="${data.name}" class="item-image">
                <h5 class="item-name">${data.name}</h5>
                <p class="item-price">${data.price}원<br>(부가세포함)</p>
            </a>
        `);

            //상품 목록 UI 브라우저에 출력
            itemArea.innerHTML = links.join('');
            mainTitle.innerHTML = jsonData.data[0].category;
            itemCount.innerHTML = `${jsonData.data.length}`;

            //페이지네이션 구현
            const rowsPerPage = 15;
            const rows = itemArea.querySelectorAll('.item-box');
            const rowsCount = rows.length;
            const pageCount = Math.ceil(rowsCount / rowsPerPage);

            // 페이지 버튼들을 담을 컨테이너
            const pagenationNumbers = document.querySelector('.pagenation-numbers');

            //페이지네이션 버튼 생성
            for (let i = 1; i <= pageCount; i++) {
                pagenationNumbers.innerHTML += `<li><a href="">${i}</a></li>`;
            }

            //페이지 버튼 선택
            const numberBtn = pagenationNumbers.querySelectorAll('a');

            //각 페이지 버튼을 클릭했을 때 발생하는 이벤트 등록
            numberBtn.forEach((item, index) => {
                item.addEventListener('click', (e) => {
                    e.preventDefault();

                    //페이지 번호를 인자로 받아, 해당 페이지에 해당하는 상품 목록 출력
                    displayRaw(index);
                });
            });

            //각 페이지에 해당하는 상품 목록 출력하는 함수
            function displayRaw(index) {

                let start = index * rowsPerPage;
                let end = start + rowsPerPage;

                //for문으로 rows 배열 내의 상품 목록중 해당 페이지에 해당하는 상품 목록 출력
                for (let i = 0; i < rowsCount; i++) {
                    if (i >= start && i < end) {
                        rows[i].style.display = 'block';
                    } else {
                        rows[i].style.display = 'none';
                    }
                }
                //페이지 버튼 활성화 표시를 위해 active 클래스 적용하고 이전 페이지 버튼의 활성화 클래스 제거
                for (let nb of numberBtn) {
                    nb.classList.remove('active');
                }
                numberBtn[index].classList.add('active');
            }

            displayRaw(0);


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
