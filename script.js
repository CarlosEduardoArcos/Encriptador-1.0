// script.js
function cifrarTexto() {
    let texto = document.getElementById("texto").value;
    let desplazamiento = parseInt(document.getElementById("desplazamiento").value);
    let resultado = "";

    for (let i = 0; i < texto.length; i++) {
        let char = texto[i];

        if (char.match(/[a-z]/i)) {
            let codigo = texto.charCodeAt(i);

            // Letras mayúsculas
            if ((codigo >= 65) && (codigo <= 90)) {
                char = String.fromCharCode(((codigo - 65 + desplazamiento) % 26) + 65);
            }
            // Letras minúsculas
            else if ((codigo >= 97) && (codigo <= 122)) {
                char = String.fromCharCode(((codigo - 97 + desplazamiento) % 26) + 97);
            }
        }

        resultado += char;
    }

    document.getElementById("resultado").value = resultado;
}
