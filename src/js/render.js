import { Api } from "./api.js";

class render{
    static renderClientes(){
        const listaClientes = Api.listarClientes()
        listaClientes.then(clientes => {
        const lisClientes = clientes.reduce((acc,cliente) =>{
                    acc += `<li class="card">
                                <h2>${cliente.nome}</h2>
                                <div>
                                    <h3>Dados Pessoais</h3>
                                    <p>email: ${cliente.email}</p>
                                    <p>idade: ${cliente.idade}</p>
                                    <p>cpf: ${cliente.cpf}</p>
                                    <p>sexo: ${cliente.sexo}</p>
                                </div>
                                <div>
                                    <h3>Endereco</h3>
                                    <p>cep: ${cliente.endereco.cep}</p>
                                    <p>estado: ${cliente.endereco.estado}</p>
                                    <p>cidade: ${cliente.endereco.cidade}</p>
                                    <p>bairro: ${cliente.endereco.bairro}</p>
                                    <p>rua: ${cliente.endereco.rua}</p>
                                    <p>numero: ${cliente.endereco.numero}</p>
                                </div>
                                
                            </li>`
            return acc
        },'')
        const ulClientes = document.querySelector(".container")
        ulClientes.innerHTML = lisClientes
        })       
    }
}

render.renderClientes()