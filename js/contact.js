/**
* Variable en la que almacenamos el elemento del formulario del fichero HTML
* @type {HTMLFormElement}
*/
const contactForm = document.getElementById('contactForm');

/**
 * Función que envía el formulario
 */
function enviarMensaje() {
    // Variable en la que almacenamos el nombre del usuario
    const name = document.getElementById('name').value;

    // Variable en la que almacenamos el mensaje
    const message = document.getElementById('message').value;

    // Verifica si el nombre y el mensaje no están vacíos
    if (name.trim() !== '' && message.trim() !== '') {
        alert(`¡Gracias por tu mensaje, ${name}!`);
        contactForm.reset(); // Resetea el formulario después del envío
    } else {
        alert('Por favor, completa todos los campos.');
    }
}

document.addEventListener('DOMContentLoaded', (e) => {
    e.preventDefault();
    contactForm.addEventListener('submit', enviarMensaje); 
});
