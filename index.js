let url = "https://jsonplaceholder.typicode.com/users";

fetch(url)
  .then((response) => {
    // verificar si la respuesta fue exitosa
    if (!response.ok) throw new Error(response.status);

    // Procesar el cuerpo como JSON
    return response.json();
  })
  .then((users) => {
    users.forEach((user) => {
      const div = document.querySelector("#users");
      const p = document.createElement("p");
      p.textContent = `Nombre:${user.name} - Email:${user.email}`;
      div.append(p);
    });
  })
  .catch((error) => {
    console.log(error.message);
  });
