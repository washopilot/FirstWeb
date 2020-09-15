// const myHeading = document.querySelector('h1');
// myHeading.textContent = 'Hola Mundo!!!';

// let myHTML = document.querySelector('html');
// myHTML.onclick = function () {
//     alert('Ayyy!! Deja de pincharme!!!')
// };

// document.querySelector('html').onclick = function () {
//     alert('Ouch! Deja de clickearme!');
// }

// Cambiador de imagen
let myImage = document.querySelector('img');

myImage.onclick = function () {
    let mySrc = myImage.getAttribute('src');
    if (mySrc === 'images/firefox-icon.png') {
        myImage.setAttribute('src', 'images/firefox2.png')
    } else {
        myImage.setAttribute('src', 'images/firefox-icon.png')
    }
}

// Muestra un botón para cambiar de nombre de cabecera
let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

function setUserName() {
    let myName = prompt('Por favor, ingrese su nombre');
    if (!myName) {
        setUserName();
    } else {
        localStorage.setItem('name', myName);
        myHeading.textContent = 'Mozilla es genial, ' + myName;
    }
}

if (!localStorage.getItem('name')) {
    setUserName();
} else {
    let storedName = localStorage.getItem('name');
    myHeading.textContent = 'Mozilla es genial, ALMACENADO ' + storedName;
}

myButton.onclick = function () {
    setUserName();
}
