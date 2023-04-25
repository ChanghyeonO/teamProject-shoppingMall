// import { drawNavbar, drawFooter } from '../../shared.js';
// drawNavbar();
// drawFooter();

// fetch data의 경우 후에 서버 데이터로 변경이 필요함으로, 상수로 꺼내 유지보수를 편리하게 함.
const USER_INFO_URL = "./userInfo.json";
const USER_ORDER_URL = "./userOrder.json";

async function getUserData() {
    try {
        const response1 = await fetch(USER_INFO_URL); 
        const userInfoData = await response1.json();

        // userId 먼저 적용
        document.querySelector('.userProfile-userName').innerText = userInfoData.userId;
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

        
    } catch (error) {
        console.error(error);
    }
}

async function getOrderData() {
    try {
        // 주문 내역 데이터를 가져와 적용. 
        const response2 = await fetch(USER_ORDER_URL);
        const userOrderData = await response2.json();

        // map으로 여러개의 데이터를 가져와 순회하면서 td 생성.
        const userOrderTable = ` <table>
            <thead>
                <tr>
                    <th>주문 번호</th>
                    <th>제품 번호</th>
                    <th>가격</th>
                    <th>제품 수</th>
                    <th>상태</th>
                </tr>
            </thead>
            <tbody>
                ${userOrderData.map((order) => `
                    ${order.products.map((product) => `
                        <tr>
                            <td>${order.orderNumber}</td>
                            <td>${product.productId}</td>
                            <td>${product.price}</td>
                            <td>${product.count}</td>
                            <td>${product.state}</td>
                        </tr>
                    `).join('')}
                `).join('')}
            </tbody>
        </table>
        `;

        document.querySelector('.ordered').insertAdjacentHTML('beforeend', userOrderTable);
    } catch (error) {
        console.error(error);
    }
}

getUserData();
getOrderData();