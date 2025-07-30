// capturar formulario
const form = document.forms.register;

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
    .then(console.log)
    .catch(console.error);
};
