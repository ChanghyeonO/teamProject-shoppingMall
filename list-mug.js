// JSON 데이터 배열 임시 생성.
const jsonData = [
    {
        imgSrc: '이미지 URL 1',
        title: '제목 1',
        description: '설명 1'
    },
    {
        imgSrc: '이미지 URL 2',
        title: '제목 2',
        description: '설명 2'
    },
    {
        imgSrc: '이미지 URL 3',
        title: '제목 3',
        description: '설명 3'
    },
];

// <div class="item-Area"> 요소 선택.
const itemArea = document.querySelector('.item-area');
const itemCount = document.querySelector('.item-count');

// jsonData 배열 각 항목을 반복하고 <a> 요소 생성.
const links = jsonData.map(data => {
    // <a> 요소 생성.
    const link = document.createElement('a');
    link.setAttribute('href', '#');

    // <img> 요소 생성하고 src와 alt 속성 설정.
    const img = document.createElement('img');
    img.setAttribute('src', data.imgSrc);
    img.setAttribute('alt', '대체 텍스트');

    // <h5> 요소 생성하고 텍스트 컨텐츠 설정.
    const heading = document.createElement('h5');
    heading.textContent = data.title;

    // <p> 요소 생성하고 텍스트 컨텐츠 설정.
    const paragraph = document.createElement('p');
    paragraph.textContent = data.description;

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
