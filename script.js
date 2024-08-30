// Función para encriptar el texto usando el cifrado César
function cifrarTexto() {
    const texto = document.getElementById("texto").value;
    const desplazamiento = parseInt(document.getElementById("desplazamiento").value);
    let resultado = "";

    for (let i = 0; i < texto.length; i++) {
        let charCode = texto.charCodeAt(i);

        if (charCode >= 65 && charCode <= 90) {
            // Mayúsculas
            resultado += String.fromCharCode((charCode - 65 + desplazamiento) % 26 + 65);
        } else if (charCode >= 97 && charCode <= 122) {
            // Minúsculas
            resultado += String.fromCharCode((charCode - 97 + desplazamiento) % 26 + 97);
        } else {
            // Otros caracteres no se encriptan
            resultado += texto[i];
        }
    }

    document.getElementById("resultado").value = resultado;
}

// Función para desencriptar el texto usando el cifrado César
function desencriptarTexto() {
    const texto = document.getElementById("texto").value;
    const desplazamiento = parseInt(document.getElementById("desplazamiento").value);
    let resultado = "";

    for (let i = 0; i < texto.length; i++) {
        let charCode = texto.charCodeAt(i);

        if (charCode >= 65 && charCode <= 90) {
            // Mayúsculas
            resultado += String.fromCharCode((charCode - 65 - desplazamiento + 26) % 26 + 65);
        } else if (charCode >= 97 && charCode <= 122) {
            // Minúsculas
            resultado += String.fromCharCode((charCode - 97 - desplazamiento + 26) % 26 + 97);
        } else {
            // Otros caracteres no se desencriptan
            resultado += texto[i];
        }
    }

    document.getElementById("resultado").value = resultado;
}
