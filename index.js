function getUsers() {
  // retorna una promesa...
  return new Promise((resolve, reject) => {
    // que después de 300ms...
    setTimeout(() => {
      // se resuelve con un string con formato JSON
      let json = `[
        {"id": 1, "name": "Leanne Graham", "email": "Sincere@april.biz"},
        {"id": 2, "name": "Ervin Howell", "email": "Shanna@melissa.tv"}
      ]`;
 
      resolve(json);
    }, 300);
  });
}

getUsers().then{(json) => console.log(json)}