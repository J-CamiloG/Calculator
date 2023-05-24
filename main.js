let contenedor = document.querySelector(".contenedor");
let label = document.querySelector(".form-check-label");
let estado = {
    numero1:null,
    numero2: null,
    operacion:null
};

// Funcion para agregar numero 
function agregarNumero(numero){
    const resultado = document.getElementById("resultado");
    resultado.value += numero;
};

//funcion para resetear la pantalla
function limpiar(){
    const resultado = document.getElementById("resultado");
    resultado.value = '';
    estado.numero1 = null;
    estado.numero2 = null;
    estado.operacion = null;
};

//funcion para borrar 
function borrarNumero() {
    const resultado = document.getElementById("resultado");
    resultado.value = resultado.value.slice(0, -1);
};

// agregar decimal
function agregarDecimal(){
    const resultado = document.getElementById("resultado");
    if (!resultado.value.includes(".")) {
        resultado.value += ".";
    };
};
// agragar operacion 
function agregarOperacion(operacion){
    const resultado = document.getElementById("resultado");
    estado.numero1 = parseFloat(resultado.value);
    estado.operacion = operacion;
    resultado.value = '';
}

//calcular resultado 
function calcularResultado() {
    const resultado = document.getElementById("resultado");
    estado.numero2 = parseFloat(resultado.value);

    let total;

switch (estado.operacion) {
    case '+':
        total = estado.numero1 + estado.numero2;
    break;
    case '-':
        total = estado.numero1 - estado.numero2;
    break;
    case '*':
        total = estado.numero1 * estado.numero2;
    break;
    case '/':
        total = estado.numero1 / estado.numero2;
    break;
}
resultado.value=total;
}

//cambiar el color del fondo y de la calculadora 
function darkMode() {
    if (contenedor.classList == "contenedor") {
        label.textContent = "Dark Mode";
        document.body.style.backgroundColor = 'white';
        contenedor.classList.remove("contenedor");
        contenedor.classList.add("contenedorDayMode");
    }else{
        label.textContent = "Day Mode";
        document.body.style.backgroundColor = 'rgba(0, 0, 0, 0.926)';
        contenedor.classList.remove("contenedorDayMode");
        contenedor.classList.add("contenedor");
    }
    
}