import{UserTemplate, PeticionesManagement,LoginTemplate} from "./PeticionesLogin.js"


// ----------------------------------- register -------------------------------------
let registerForm = document.getElementById("RegisterForm"); 
console.log(registerUsername)
registerForm.addEventListener("submit", function(event){
    event.preventDefault();
})

document.getElementById("btnRegister").addEventListener("click", RegistrarUsuario)
document.getElementById("btnLogin").addEventListener("click", LoginUsuario)

// --funciones register

function RegistrarUsuario(){
    const registerUsername = document.getElementById("registerUsername").value;
    const registerEmail = document.getElementById("registerEmail").value;
    const registerPassword = document.getElementById("registerPassword").value;
    const User = new UserTemplate(registerUsername,registerEmail,registerPassword);
    console.log(User);
    try {
        peticionesUser.PostDatos(User,"User/register")  
       
    } catch (e) {
        alert("Se ha producido un error")
    } 
}

async function LoginUsuario(){
    const loginName = document.getElementById("loginName").value;
    const loginPassword = document.getElementById("loginPassword").value;
    let LoginUser = new LoginTemplate(loginName,loginPassword);
    console.log(LoginUser);

         await peticionesUser.PostDatos(LoginUser,"User/token");  

}




const peticionesUser = new PeticionesManagement();