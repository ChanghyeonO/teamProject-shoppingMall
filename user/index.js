async function getData() {
    try {
        const response1 = await fetch('url1');
        const data1 = await response1.json();
        document.getElementById('userId').textContent = data1.userId;
        document.getElementById('name').textContent = data1.name;
        document.getElementById('email').textContent = data1.email;
        document.getElementById('phoneNumber').textContent = data1.phone;
        document.getElementById('address').textContent = data1.address;
    
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