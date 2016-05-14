(function () {
// Variables

	var formulario = document.getElementById("formulario");
	var elementos = formulario.elements;
	var boton = document.getElementById("btn");
 
// Funciones
	var validarNombre = function (domElementToValidate) {
            var nombreElement = new domElementToValidate(formulario.nombre);
            var nombreElementVal = nombreElement.getElementValue();
            var showNameElementSelector = '#showName';
            var $showName = $(showNameElementSelector);
		if (nombreElementVal === '') {
			alert("El campo nombre esta vacio");
		} else {
                  $showName.html('Name: ' + nombreElementVal);
                }
	}

	var validarSexo = function (domElementToValidate) {
            var sexoElement1 = new domElementToValidate(formulario.Radio1);
            var sexoElement2 = new domElementToValidate(formulario.Radio2);
            var showSexElementSelector = '#showSex';
            var $showSex = $(showSexElementSelector);

		if (sexoElement1.getElementCheckedProperty() === true || sexoElement2.getElementCheckedProperty() === true ) {
                  $showSex.html('Sex: ' + sexoElement1.getElementCheckedProperty() ? sexoElement1.getElementValue() : sexoElement2.getElementValue());
		} else {
			alert("Debe seleccionar el sexo");
		}
	};

	var validarTerminos = function (domElementToValidate) {
          var terminosYCondicionesElement = new domElementToValidate(formulario.Terminoscondiciones);
          var showTermsAndConditionsElementSelector = '#showTermsAndConditions';
          var $showTermsAndConditions = $(showTermsAndConditionsElementSelector);
		if (terminosYCondicionesElement.getElementCheckedProperty() === false) {
			alert("Debe aceptar los terminos y condiciones");
		} else {
                  $showTermsAndConditions.html('Terms and conditions accepted');
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

          validarNombre(domElementToValidate);
          validarSexo(domElementToValidate);
          validarTerminos(domElementToValidate);
          // This event.preventDefault() prevents the browser from doing submit default action
          // which we have fired to start the validation
          e.preventDefault();
        };

// Eventoss
	formulario.addEventListener("submit", validar);
}())
