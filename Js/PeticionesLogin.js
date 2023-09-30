export {PeticionesManagement,UserTemplate,LoginTemplate}
const URL = "http://localhost:5043/ApiPharmacy"
const headers = new Headers ({'Content-Type': 'application/json'})

function configurarAccion(accion,data="")
{
    return{
        method: `${accion}`,
        headers: headers,
        body: JSON.stringify(data)
    }
}


class UserTemplate {
    constructor(username,email,password)
    {
        this.name = username,
        this.email = email,
        this.password = password
    }}

class LoginTemplate {
    constructor(nameToCompare,passwordToCompare)
    {
        this.Name = nameToCompare,
        this.password = passwordToCompare
    }}

class PeticionesManagement{
    async staticGetDatos(direccion){
        let data = await( await fetch(`${URL}/${direccion}`)).json();
        return data 
    }

    async PostDatos(data,direccion){
        let response = await fetch(`${URL}/${direccion}`, configurarAccion("POST",data))
        let datos = await response.json();
        if (datos.message == "si") {
            window.location.href = "../index.html";
        } else {
            // Se asume que si no es 200, hay algún tipo de error
            alert("Este usuario no se encuentra registrado");
        }
    }  

    async PutDatos(data,direccion,id){
        try{
            await fetch(`${URL}/${direccion}/${id}`, configurarAccion("PUT",data))
        
        } catch (error) {
            console.log("error" + error)
        }
            
    }

    async DeleteDatos(tr,id,direccion){
        try {
            let data = Object.fromEntries( new FormData(tr.target))
            let config = {
                method: 'DELETE',
                headers: headers,
                body: JSON.stringify(data)
            };
            await fetch(`${URL}/${direccion}/${id}`, config)
        } catch (error) {
            
        }
    }
}



