import { Api } from "./api.js";

class deletarCliente{
    static renderDeletar(){
        const listaClientes = Api.listarClientes()
        listaClientes.then(clientes => {
            const lisClientes = clientes.reduce((acc,cliente) =>{
                        acc += `<option value="${cliente.id}">
                                    ${cliente.nome}
                                </option>
                                `
                return acc
            },'')
            const selectClientes = document.querySelector("select")
            selectClientes.innerHTML = lisClientes
            })  
    }
    static deletar(){
        const deletarBtn = document.querySelector("button").addEventListener("click", async (e)=>{
            e.preventDefault()
        
            Api.deletarCliente(document.querySelector("select").value)
        
    })
}
}
deletarCliente.renderDeletar()
deletarCliente.deletar()