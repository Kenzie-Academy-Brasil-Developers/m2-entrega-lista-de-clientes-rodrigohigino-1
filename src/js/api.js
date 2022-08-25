class Api {
  
    static async listarClientes(){
        const clientes = await fetch('https://atividade-api-clientes.herokuapp.com/clientes')
                                .then(resp => resp.json())
        return clientes
    }

    static async cadastrarCliente(data){ 
        await fetch("https://atividade-api-clientes.herokuapp.com/clientes",{
            method:"POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        })
        window.location.assign("../../index.html")
    }

    static async editarCliente(id, data){
        const cliente = await fetch(`https://atividade-api-clientes.herokuapp.com/clientes/${id}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
          })
          .then(res => res.json())
          .catch(err => console.log(err))
      
          
          window.location.assign("../../index.html")
    }

    static async deletarCliente(id){
        const cliente = await fetch(`https://atividade-api-clientes.herokuapp.com/clientes/${id}`, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json"
            }
          })
          .then(res => res.json())
          .then(res => {
            alert('produto removido com sucesso')
            return res
          })
          .catch(err => {
            alert(`message: ${err}`)
          })
          
          window.location.assign("../../index.html")
          
 
    }

}

export {Api}