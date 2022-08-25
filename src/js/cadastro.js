import { Api } from "./api.js";

class cadastrar{
    static cliente(event){
        event.preventDefault()
        const dadosCliente = cadastrar.armazenaDados()
        Api.cadastrarCliente(dadosCliente)
    }
    static armazenaDados(){
        const nome      =   document.querySelector(".nome").value
        const email     =   document.querySelector(".email").value
        const idade     =   document.querySelector(".idade").value
        const cpf       =   document.querySelector(".cpf").value
        const sexo      =   document.querySelector(".sexo").value
        const cep       =   document.querySelector(".cep").value
        const rua       =   document.querySelector(".rua").value
        const numero    =   document.querySelector(".numero").value
        const bairro    =   document.querySelector(".bairro").value
        const cidade    =   document.querySelector(".cidade").value
        const estado    =   document.querySelector(".estado").value
        const data      = {
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
        return data
    }
}
document.querySelector("button").addEventListener("click",cadastrar.cliente)