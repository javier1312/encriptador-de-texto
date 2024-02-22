

function habilitarBotones(){
  let txtArIngresa = document.getElementById("textoOriginal").value;
  let btnEncript = document.getElementById("Encriptar");
  let btnDesencript = document.getElementById("Desencriptar");

  if(txtArIngresa.trim() !== ""){
    btnEncript.disabled =false;
    btnDesencript.disabled =false;
  }else{
    btnEncript.disabled =true;
    btnDesencript.disabled =true;
  }
}

function encriptarTexto(){
  let encryptedText2 = document.getElementById("encryptedText2");
  let mensaje = document.getElementById("textoOriginal").value.toLowerCase();
  let muñeco = document.getElementById("muñeco");
  let textMuñeco = document.getElementById("textMuñeco");
  let textMuñeco2 = document.getElementById("textMuñeco2");
  let copy = document.getElementById("copy");
  let btnEncript = document.getElementById("Encriptar");
  let btnDesencript = document.getElementById("Desencriptar");
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
  btnEncript.disabled =true;
  btnDesencript.disabled =true;
}

function copy(){
  let textarea = document.getElementById("encryptedText2");
  let muñeco = document.getElementById("muñeco");
  let textMuñeco = document.getElementById("textMuñeco");
  let textMuñeco2 = document.getElementById("textMuñeco2");
  let copy = document.getElementById("copy");
  textarea.select();
  document.execCommand("copy");
  textarea.style.display="none";
  document.getElementById('encryptedText2').value = "";
  if(window.innerWidth <768){
    muñeco.style.display="none";
  }else{
    muñeco.style.display="block";
  }
  textMuñeco.style.display="block";
  textMuñeco2.style.display="block";
  copy.style.visibility="hidden";
}

function desencriptarTexto(){
  let encriptedText = document.getElementById("textoOriginal").value.toLowerCase();
  let muñeco = document.getElementById("muñeco");
  let textMuñeco = document.getElementById("textMuñeco");
  let textMuñeco2 = document.getElementById("textMuñeco2");
  let copy = document.getElementById("copy");
  let btnEncript = document.getElementById("Encriptar");
  let btnDesencript = document.getElementById("Desencriptar");
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
  encryptedText2.style.display = `block`;
  muñeco.style.display="none";
  textMuñeco.style.display="none";
  textMuñeco2.style.display="none";
  copy.style.visibility="visible";
  btnEncript.disabled =true;
  btnDesencript.disabled =true;
  document.getElementById('textoOriginal').value = "";
  document.getElementById('encryptedText2').value = originalText;
}