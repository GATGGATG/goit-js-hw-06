const input = document.querySelector(`input`) 
input.addEventListener(`blur`, validarSimbolo )


function validarSimbolo() {
let cantidadSimbolos = this.value.length; 
let reglaCantidadSimbolos = this.dataset.length;
if (cantidadSimbolos == reglaCantidadSimbolos) {
    input.setAttribute(`class` , `valid`)
}
else {
    input.setAttribute(`class` , `invalid`)
}

console.log (cantidadSimbolos);  
}
