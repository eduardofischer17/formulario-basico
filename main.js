(function () {
// Variables

	var formulario = document.getElementById("formulario");
	var elementos = formulario.elements;
	var boton = document.getElementById("btn");
 
// Funciones
	var validarNombre = function (configuration) {
            var nombreElement = new configuration.domElementToValidate(formulario.nombre);
            var event = configuration.event;
            var nombreElementVal = nombreElement.getElementValue();
		if (nombreElementVal === '') {
			alert("El campo nombre esta vacio");
			event.preventDefault();
		}
	}

	var validarSexo = function (configuration) {
            var sexoElement1 = new configuration.domElementToValidate(formulario.Radio1);
            var sexoElement2 = new configuration.domElementToValidate(formulario.Radio2);
            var event = configuration.event;
		if (sexoElement1.getElementCheckedProperty() == true || sexoElement2.getElementCheckedProperty() == true ) {
		} else {
			alert("Debe seleccionar el sexo");
			event.preventDefault();
		}
	};

	var validarTerminos = function (configuration) {
          var terminosYCondicionesElement = new configuration.domElementToValidate(formulario.Terminoscondiciones);
          var event = configuration.event;
		if (terminosYCondicionesElement.getElementCheckedProperty() == false) {
			alert("Debe aceptar los terminos y condiciones");
			event.preventDefault();
		} 
	};

	var validar = function (e) {
          var domElementToValidate = function (domElement) {
            this.elementToValidate = domElement;
            this.$elementToValidate = $(this.elementToValidate);
            this.elementToValidateValue = this.$elementToValidate.val();
          };

          domElementToValidate.prototype.getElementValue = function() {
            return this.elementToValidateValue;
          };

          domElementToValidate.prototype.getElementCheckedProperty = function() {
            return this.elementToValidate.checked;
          };

          var configurationForValidation = {
            domElementToValidate: domElementToValidate,
            event: e,
          };

          validarNombre(configurationForValidation);
          validarSexo(configurationForValidation);
          validarTerminos(configurationForValidation);
        };

// Eventoss
	formulario.addEventListener("submit", validar);
}())
