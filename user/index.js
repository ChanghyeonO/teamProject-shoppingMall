const userIdElement = documnet.querySelector('.userProfile-userName')
const nameElement = document.querySelector('.userProfile-userInfo tbody tr:nth-child(1) td:nth-child(2)');
const emailElement = document.querySelector('.userProfile-userInfo tbody tr:nth-child(2) td:nth-child(2)');
const phoneNumberElement = document.querySelector('.userProfile-userInfo tbody tr:nth-child(3) td:nth-child(2)');
const addressElement = document.querySelector('.userProfile-userInfo tbody tr:nth-child(4) td:nth-child(2)');

fetch('') // url 추가
  .then(response => response.json())
  .then(data => {
    const userId = data.userId;
    const name = data.name;
    const email = data.email;
    const phoneNumber = data.phone;
    const address = data.address;

    userIdElement.innerText = userId;
    nameElement.innerText = name;
    emailElement.innerText = email;
    phoneNumberElement.innerText = phoneNumber;
    addressElement.innerText = address;
  })
  .catch(error => console.error(error));