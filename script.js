// Seleccionamos el formulario de contacto en el HTML
const formulario = document.querySelector('form');

// Escuchamos cuando el usuario hace clic en el botón de enviar
formulario.addEventListener('submit', function(evento) {
    // Evitamos que la página se recargue por defecto
    evento.preventDefault();

    // Obtenemos el valor del nombre que escribió el usuario
    const nombreInput = document.getElementById('nombre').value;

    // Si el campo no está vacío, mostramos un mensaje personalizado
    if (nombreInput.trim() !== "") {
        alert(`¡Gracias, ${nombreInput}! Tu mensaje fue enviado con éxito. Me pondré en contacto pronto para tu evento.`);
    } else {
        alert("Por favor, ingresa tu nombre antes de enviar el mensaje.");
    }

    // Limpiamos los campos del formulario
    formulario.reset();
});