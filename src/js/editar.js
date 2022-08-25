import { Api } from "./api.js";

class editarCliente{

    static renderEditar(){
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

    static buscarCliente(){
       
        const cliente = document.querySelector("select")
        const buscarBtn = document.querySelector("button").addEventListener("click", async (e)=>{
            e.preventDefault()
            const idValue = cliente.value
            const nome      =   document.querySelector("#nome")
            const email     =   document.querySelector("#email")
            const idade     =   document.querySelector("#idade")
            const cpf       =   document.querySelector("#cpf")
            const sexo      =   document.querySelector("#sexo")
            const cep       =   document.querySelector("#cep")
            const rua       =   document.querySelector("#rua")
            const numero    =   document.querySelector("#numero")
            const bairro    =   document.querySelector("#bairro")
            const cidade    =   document.querySelector("#cidade")
            const estado    =   document.querySelector("#estado")

            const listaClientes = await Api.listarClientes()
            const encontraCliente = listaClientes.find((cliente) =>  cliente.id == idValue )

            nome.value      =encontraCliente.nome
            email.value     =encontraCliente.email
            idade.value     =encontraCliente.idade
            cpf.value       =encontraCliente.cpf
            sexo.value      =encontraCliente.sexo
            cep.value       =encontraCliente.endereco.cep
            rua.value       =encontraCliente.endereco.rua
            numero.value    =encontraCliente.endereco.numero
            bairro.value    =encontraCliente.endereco.bairro
            cidade.value    =encontraCliente.endereco.cidade
            estado.value    =encontraCliente.endereco.estado
        })
    }

    static atualizar(){
        
        const atualizarBtn = document.querySelector(".atualizar").addEventListener("click", async (e)=>{
            e.preventDefault()
            const nome      =   document.querySelector("#nome").value
            const email     =   document.querySelector("#email").value
            const idade     =   document.querySelector("#idade").value
            const cpf       =   document.querySelector("#cpf").value
            const sexo      =   document.querySelector("#sexo").value
            const cep       =   document.querySelector("#cep").value
            const rua       =   document.querySelector("#rua").value
            const numero    =   document.querySelector("#numero").value
            const bairro    =   document.querySelector("#bairro").value
            const cidade    =   document.querySelector("#cidade").value
            const estado    =   document.querySelector("#estado").value
            const cliente   =   document.querySelector("select").value

            const clienteAtualizando = {
                nome: nome,
                email: email,
                idade: idade,
                cpf: cpf,
                sexo: sexo,
                endereco:{
                cep: cep,
                rua: rua,
                numero: numero,
                bairro: bairro,
                cidade: cidade,
                estado: estado
                }
            }
        const listaClientes = await Api.listarClientes()
        const idCliente =  listaClientes.find((cliente) =>  cliente.nome == nome)
        
        Api.editarCliente(idCliente.id,clienteAtualizando)
    })
    } 
    
}
editarCliente.renderEditar()
editarCliente.buscarCliente()
editarCliente.atualizar()
