/**
* Array que contiene las rutas de las imágenes
* @type {string[]}
*/
const images = [
    './images/imagen1.png',
    './images/imagen2.jpg',
    './images/imagen3.png'
];

/**
 * Índice en la que se almacenará la imagen actual
 * @type {number}
 */
let currentIndex = 0;

/**
 * Variable en la que creamos de forma dinamica el elemento img
 * @type {HTMLImageElement}
 */
const imageElement = document.createElement('img');

imageElement.src = images[currentIndex];
document.querySelector('.content').appendChild(imageElement);


document.addEventListener('DOMContentLoaded', (e) => {
    imageElement.addEventListener('click', () => {
        currentIndex = (currentIndex + 1) % images.length;
        imageElement.src = images[currentIndex];
    });
});
