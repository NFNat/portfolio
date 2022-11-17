function valida(input){
    const tipoDeInput = input.dataset.tipo; //con dataset se obtiente la coleccion de todos los data- del html -- con el .tipo es el nombre que le asigne en el html despues del data-
    if(validadores[tipoDeInput]){
        validadores[tipoDeInput](input);
    }

    if (input.validity.valid) {
        input.parentElement.classList.remove("input-container--invalid");
        input.parentElement.querySelector(".input-message-error").innerHTML = "";

    }else{
        input.parentElement.classList.add("input-container--invalid");
        input.parentElement.querySelector(".input-message-error").innerHTML =
          mostrarMensajeDeError(tipoDeInput, input);
                                                                              
    }
}

const tipoDeErrores = [
    "valueMissing",
    "typeMismatch", 
    "patternMismatch",
    "customError",
]

const mensajesDeError = {
    nombre: {
        valueMissing: "Este campo no puede estar vacío"
    },
    apellido: {
        valueMissing: "Este campo no puede estar vacío"
    },
    email: {
        valueMissing: "Este campo no puede estar vacío", 
        typeMismatch: "El correo no es valido"
    }

    
}

const validadores = {
    nacimiento: input => validarNacimiento(input)
}

function mostrarMensajeDeError(tipoDeInput, input){
    let mensaje = "";
    tipoDeErrores.forEach((error) => {
        if (input.validity[error]) {
            console.log(tipoDeInput, error);
            console.log(input.validity[error]);
            console.log(mensajesDeError[tipoDeInput][error]);
            mensaje = mensajesDeError[tipoDeInput][error];
        }
    });
    return mensaje;
}

const inputs = document.querySelectorAll("input"); // esto devuelve un array con todos los inputs

inputs.forEach((input) => {
    input.addEventListener("blur", (input)=>{
        valida(input.target);
    });
});

