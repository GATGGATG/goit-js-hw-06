const inputTexto = document.querySelector(`#name-input`);
const outputTexto = document.querySelector(`#name-output`);
inputTexto.addEventListener(`input`, writeSpan);

function writeSpan(){
if (inputTexto.value ==``) {
    outputTexto.textContent = `anonimo`;
} 
else {
outputTexto.textContent = inputTexto.value;
}
}



