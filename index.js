function saveForm(form) {
  const formData = new FormData(form);
  //   const formDataObject = {};

  //   for (const [key, value] of formData.entries()) {
  //     formDataObject[key] = value;
  //   }
  const formDataObject = Object.fromEntries(formData.entries());
  localStorage.setItem("formData", JSON.stringify(formDataObject));
}

function loadForm(form) {
  const savedData = localStorage.getItem("formData");

  // Es posible que la llave 'formData' aún no exista en localStorage
  if (savedData) {
    // Parseamos el JSON para convertirlo en un objeto
    const formDataObject = JSON.parse(savedData);

    // Recorremos cada pareja llave-valor del objeto
    for (const [key, value] of Object.entries(formDataObject)) {
      // Buscamos un campo por su nombre
      const formField = form.querySelector(`[name="${key}"]`);

      // Si el campo existe, asignamos su valor
      if (formField) {
        formField.value = value;
      }
    }
  }
}

// capturar formulario
const form = document.forms.register;
loadForm(form);

form.addEventListener("change", (_event) => saveForm(form));

// agregar handler a evento submit
form.onsubmit = function (event) {
  // prevenir comportamiento por defecto
  event.preventDefault();

  // obtener el valor de los elementos de control
  const name = form.elements.name.value;
  const email = form.elements.email.value;

  // URL de destino
  const url = "https://mocktarget.apigee.net/echo";

  // Opciones para fetch
  const options = {
    method: "POST", // método HTTP a utilizar
    body: JSON.stringify({ name, email }), // cuerpo de la petición
    headers: {
      // encabezados de la petición HTTP
      "Content-Type": "application/json",
    },
  };

  // Realizar petición
  fetch(url, options)
    .then((response) => response.json())
    .then((data) => {
      form.reset();
      localStorage.removeItem("formData");
    })
    .catch(console.error);
};
