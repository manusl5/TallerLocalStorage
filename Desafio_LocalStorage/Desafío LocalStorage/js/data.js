//Obtengo el valor guardado en el localstorage
const textoGuardado = localStorage.getItem('textoGuardado');

//Se obtiene el id en donde se va a mostrar el texto
const dataElement = document.getElementById('data');

//Se recupera el texto escrito
dataElement.textContent = textoGuardado ;
