import{UserTemplate, PeticionesManagement,LoginTemplate} from "./PeticionesLogin.js"


// ----------------------------------- register -------------------------------------
// let registerForm = document.getElementById("RegisterForm"); 
// console.log(registerUsername)
// registerForm.addEventListener("submit", function(event){
//     event.preventDefault();
// })

document.getElementById("btnRegister").addEventListener("click", RegistrarUsuario)
document.getElementById("btnLogin").addEventListener("click", LoginUsuario)

// --funciones register


async function RegistrarUsuario(){
    const registerUsername = document.getElementById("registerUsername").value;
    const registerEmail = document.getElementById("registerEmail").value;
    const registerPassword = document.getElementById("registerPassword").value;
    const registerRepPassword = document.getElementById("registerRepeatPassword").value;
    const RegisterUser = new UserTemplate(registerUsername,registerEmail,registerPassword);
    //true si algun elemento no cumple la condicion
    let registerFormValidation = Object.values(RegisterUser).some(p => p === "");
    if(registerFormValidation){
        return;
    }
    //true si las contraseñas no coinciden
    let verifyPassword = registerPassword !== registerRepPassword; 
    if(verifyPassword)
    {
        alert("Las contraseñas no coinciden");
        return;
    }
    try {
        let response = await peticionesUser.PostDatos(RegisterUser,"User/register") 
        console.log(response); 
        if(response.toUpperCase().includes("SUCCESSFULLY") )
        {
            alert(response);
        }
        else{
            alert(response);
        }
    } catch (e) {
        alert("Se ha producido un error" + e)
    } 
}

async function LoginUsuario(){
    const loginName = document.getElementById("loginName").value;
    const loginPassword = document.getElementById("loginPassword").value;
    let LoginUser = new LoginTemplate(loginName,loginPassword);
    let loginFormValidation = Object.values(LoginUser).some(p => p === "")
    if(loginFormValidation){
        return;
    }
    try{
        let response = await peticionesUser.PostDatos(LoginUser,"User/token");  
        let toJson = JSON.parse(response);
        if(toJson.IsAuthorized == true)
        {
            window.location.href = "../index.html";
        }
        else{
            alert(toJson.message);
        }
    }catch(e){
        alert("Se ha producido un error" + e)

    }

}




const peticionesUser = new PeticionesManagement();


