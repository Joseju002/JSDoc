/**
* Variable en la que almacenamos el elemento del formulario del fichero HTML
* @type {HTMLFormElement}
*/
const contactForm = document.getElementById('contactForm');

/**
 * Evento que se ejecutará cuando se haga click en el botón de enviar el formulario.
 * Se previene el comportamiento por defecto del formulario y trata la información.
 * @event submit
 * @param {Event} e - Evento al enviar el formulario
 */
contactForm.addEventListener('submit', (e) => {
    e.preventDefault(); // Previene la recarga de la página

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
});
