// Función para encriptar el texto
function encriptar() {
    const input = document.getElementById('inputText').value;
    const outputMessage = document.getElementById('outputMessage');

    let textoEncriptado = input
        .replace(/e/g, 'enter')
        .replace(/i/g, 'imes')
        .replace(/a/g, 'ai')
        .replace(/o/g, 'ober')
        .replace(/u/g, 'ufat');

    // Mostrar el texto encriptado en el panel derecho
    outputMessage.textContent = textoEncriptado;
}

// Función para desencriptar el texto
function desencriptar() {
    const input = document.getElementById('inputText').value;
    const outputMessage = document.getElementById('outputMessage');

    let textoDesencriptado = input
        .replace(/enter/g, 'e')
        .replace(/imes/g, 'i')
        .replace(/ai/g, 'a')
        .replace(/ober/g, 'o')
        .replace(/ufat/g, 'u');

    // Mostrar el texto desencriptado en el panel derecho
    outputMessage.textContent = textoDesencriptado;
}

// Función para copiar el texto encriptado/desencriptado al portapapeles
async function copiar() {
    const outputMessage = document.getElementById('outputMessage');
    try {
        await navigator.clipboard.writeText(outputMessage.textContent);
        alert('Texto copiado al portapapeles!');
    } catch (err) {
        alert('Error al copiar el texto.');
        console.error('Error al copiar al portapapeles:', err);
    }
}
