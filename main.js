(function () {
// Variables
	var formulario = document.getElementById("formulario");
	var elementos = formulario.elements;
	var boton = document.getElementById("btn");

// Funciones
	var validarNombre = function (e) {
		if (formulario.nombre.value == 0) {
			alert("El campo nombre esta vacio");
			e.preventDefault();
		} 
	};

	var validarSexo = function (e) {
		if (formulario.Radio1.checked == true || formulario.Radio2.checked == true ) {
		} else {
			alert("Debe seleccionar el sexo");
			e.preventDefault();
		}
	};

	var validarTerminos = function (e) {
		if (formulario.Terminoscondiciones.checked == false) {
			alert("Debe aceptar los terminos y condiciones");
			e.preventDefault();
		} 
	};

	var validar = function (e) {
		validarNombre(e);
		validarSexo(e);
		validarTerminos(e);
};

// Eventoss
	formulario.addEventListener("submit", validar);
}())
