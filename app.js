
function encriptarTexto(){
  let encryptedText2 = document.getElementById("encryptedText2");
  let mensaje = document.getElementById("textoOriginal").value.toLowerCase();
  let muñeco = document.getElementById("muñeco");
  let textMuñeco = document.getElementById("textMuñeco");
  let textMuñeco2 = document.getElementById("textMuñeco2");
  let copy = document.getElementById("copy");
  let encryptedText = '';
    for (let i = 0; i < mensaje.length; i++) {
        switch (mensaje[i]) {
          case 'e':
            encryptedText += 'enter';
            break;
          case 'i':
            encryptedText += 'imes';
            break;
          case 'a':
            encryptedText += 'ai';
            break;
          case 'o':
            encryptedText += 'ober';
            break;
          case 'u':
            encryptedText += 'ufat';
            break;
          default:
            encryptedText += mensaje[i];
        }
    }
  document.getElementById("textoOriginal").value = ""; 
  encryptedText2.style.display = `block`;
  muñeco.style.display="none";
  textMuñeco.style.display="none";
  textMuñeco2.style.display="none";
  copy.style.visibility="visible";
  encryptedText2.value=encryptedText;
    
}

function copy(){
  let textarea = document.getElementById("encryptedText2");
  textarea.select();
  document.execCommand("copy");
  if (document.queryCommandSupported("copy")) {
    alert("Texto copiado al portapapeles");
  } else {
    alert("La copia al portapapeles no es compatible en este navegador.");
  }
  document.getElementById('encryptedText2').value = "";
}

function desencriptarTexto(){
  let encriptedText = document.getElementById("textoOriginal").value.toLowerCase();
            let originalText = '';

            let i = 0;
            while (i < encriptedText.length) {
                if (encriptedText.substring(i, i + 5) === 'enter') {
                    originalText += 'e';
                    i += 5;
                } else if (encriptedText.substring(i, i + 4) === 'imes') {
                    originalText += 'i';
                    i += 4;
                } else if (encriptedText.substring(i, i + 2) === 'ai') {
                    originalText += 'a';
                    i += 2;
                } else if (encriptedText.substring(i, i + 4) === 'ober') {
                    originalText += 'o';
                    i += 4;
                } else if (encriptedText.substring(i, i + 4) === 'ufat') {
                    originalText += 'u';
                    i += 4;
                } else {
                    originalText += encriptedText[i];
                    i++;
                }
            }

            document.getElementById('encryptedText2').value = originalText;
}