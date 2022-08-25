import { request } from "./src/js/Controller/api.js";
import { Render } from "./src/js/Controller/render.js";


const arrayDados = await request.listarClientes()



Render.renderClients(arrayDados)




