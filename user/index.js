async function getData() {
    try {
        // 임의의 유저 데이터인 userInfo를 가져옴. 이후 서버 데이터로 변경 필요!!
        const response1 = await fetch('./userInfo.json'); 
        const userInfoData = await response1.json();

        // userId만 먼저 적용
        document.querySelector('.userProfile-userName').textContent = userInfoData.userId;
        // 가져온 데이터를 테이블로 만들어 insert
        const userInfoTable = `
        <div class ="userProfile-userInfo">
            <table>
                <tbody>
                    <tr>
                        <td class="tableList">이름</td>
                        <td id="name">${userInfoData.name}</td>
                    </tr>
                    <tr>
                        <td class="tableList">이메일</td>
                        <td id="email">${userInfoData.email}</td>
                    </tr>
                    <tr>
                        <td class="tableList">핸드폰 번호</td>
                        <td id="phoneNumber">${userInfoData.phoneNumber}</td>
                    </tr>
                    <tr>
                        <td class="tableList">주소</td>
                        <td id="address">${userInfoData.address}</td>
                    </tr>
                </tbody>
            </table>
        </div>
        `;

        // insertAdjacentHTML로 전달
        document.querySelector('.userProfile').insertAdjacentHTML('beforeend', userInfoTable);

        // 주문 내역 데이터를 가져와 적용. 
        const response2 = await fetch('url2');
        const data2 = await response2.json();
        document.getElementById('orderNumber').textContent = data2.orderNumber;
        document.getElementById('productNumber').textContent = data2.productNumber;
        document.getElementById('productCount').textContent = data2.productCount;
        document.getElementById('status').textContent = data2.status;
    } catch (error) {
        console.error(error);
    }
  }
  
  getData();