let myImage = document.querySelector('img');
myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/gau-heu.png') {
        mySrc = myImage.setAttribute('src', 'images/gau.png');
    } else {
        mySrc = myImage.setAttribute('src', 'images/gau-heu.png');
    }
}

myButton = document.querySelector('button');
myHeading = document.querySelector('h1');

function setUserName() {
    let myName = prompt('Vui lòng nhập tên tài khoản: ');
    if(!myName || myName === null) {
      setUserName();
    } else {
      localStorage.setItem('name', myName);
      myHeading.textContent = 'Chào Mừng ' + myName +
                              ' đã đến với shop Gấu Hêu!';
    }
}

if(!localStorage.getItem('name')) {
  setUserName();
} else {
  let storedName = localStorage.getItem('name');
  myHeading.textContent = 'Chào Mừng ' + storedName +
                            ' đã đến với shop Gấu Hêu!';
}

myButton.onclick = setUserName