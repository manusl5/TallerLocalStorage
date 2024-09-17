//Obtengo el campo donde se va a escribir el texto y el botón de guardar
const inputText = document.getElementById('inputText');
const buttonText = document.getElementById('buttonText');

//Creo la función onclick para que el texto ingresado se guarde al momento de apretar el botón Guardar
buttonText.onclick = function() {
    const texto = inputText.value;
    localStorage.setItem('textoGuardado', texto);
 }
