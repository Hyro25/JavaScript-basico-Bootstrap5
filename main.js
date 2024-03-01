
import Tarjeta from "./components/Card";
import spinner, {app as aplicacion} from "./elements.js";
import fakePromise from "./structuring.js";


spinner.innerHTML = `<button class="btn btn-primary" type="button" disabled>
<span class="spinner-grow spinner-grow-sm" aria-hidden="true"></span>
<span class="visually-hidden" role="status">Loading...</span>
</button>
<button class="btn btn-primary" type="button" disabled>
<span class="spinner-grow spinner-grow-sm" aria-hidden="true"></span>
<span role="status">Loading...</span>
</button>`;

// * A la Antigua * Esta API recibe cualquier URL que devuelve json
// FORMATO JSON
// const stringnJson = '[{"ok": true}]';
// console.log(JSON.parse(stringnJson)[0].ok);

// fetch("data.json")
//   .then((res) => {
//     if (!res.ok) {
//       throw { ok: false, msg: "error 404" };
//     }
//     return res.json();
//   })
//   .then((data) => {
//     data.forEach((item) => {
//       app.innerHTML += Card(item);
//     });
//   })
//   .catch((err) => console.log(err))
//   .finally(() => (spinner.innerHTML = ""));

// *** Lo Nuevo **** 
const getGames = async () => {
  try {
    const hola = await fakePromise("Hola mundo");
    console.log(hola);
    const res = await fetch("data.json");
    if (!res.ok) {
      throw { ok: false, msg: "error 404" };
    }
    const data = await res.json();
    data.forEach((item) => {
      aplicacion.innerHTML += Tarjeta(item);
    });
  } catch (error) {
    console.log(error);
  } finally {
    spinner.innerHTML = "";
  }
};
getGames();




// app.innerHTML = Card(gameOne);
// app.innerHTML += Card(GameTwo);
// app.innerHTML += Card(GameThre);

const persona = {
  nombre: "Hyrum",
  saludar() {
    setTimeout(() => {
      console.log(`Hola, soy ${this.nombre}`);
    }, 2000);
  },
};

persona.saludar();
