import{UserTemplate, PeticionesManagement,LoginTemplate} from "./PeticionesLogin.js"


document.getElementById("btnRegister").addEventListener("click", RegistrarUsuario)
document.getElementById("btnLogin").addEventListener("click", LoginUsuario)

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
        alert("Passwords do not match");
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
        alert("An error has occurred" + e)
    } 
}

async function LoginUsuario(){
    const loginName = document.getElementById("loginName").value;
    const loginPassword = document.getElementById("loginPassword").value;
    let LoginUser = new LoginTemplate(loginName,loginPassword);
    let loginFormValidation = Object.values(LoginUser).some(p => p === "")
    if(loginFormValidation){
        alert("fields are required");
        return;
    }
    try{
        let response = await peticionesUser.PostDatos(LoginUser,"User/token");  
        let toJson = JSON.parse(response);
        if(toJson.isAuthenticated == true)
        {
            localStorage.setItem("accessToken", toJson.token);
            if (toJson.refreshToken){
                localStorage.setItem("refreshToken", toJson.refreshToken)
            }

            await renewAccessToken();
            window.location.href = "../index.html";
        }
        else{
            alert(toJson.message);
        }
    }catch(e){
        alert("An error has occurred" + e)

    }

}

function setRefeshTokenCookie(refreshToken)
{
    document.cookie = `refreshToken=${refreshToken}; Secure; HttpOnly; Expires = ${getCookieExpirationDate()}`;
}

function getCookieExpirationDate(){
    const expirationDays = 10;
    const expirationDate = new Date();
    expirationDate.setDate(expirationDate.getDate() + expirationDays);
    return expirationDate.toUTCString();
}

async function renewAccessToken(){
    const refreshToken = localStorage.getItem("refreshToken");
    if(refreshToken){
        try {
            const response = await peticionesUser.PostDatos({refreshToken}, "User/refreshToken");
            if (response.isAuthenticated)
            {
                const newAccessToken = response.token;
                localStorage.setItem("accessToken",  newAccessToken);
                if(response.refreshToken){
                    setRefeshTokenCookie(response.refreshToken);
                }
                else{
                    console.error("Error renewing access token:" + response.message);
                }
            }
        } catch (error) {
            console.error("Error renewing access token:" + error);
            
        }
    }else{
        console.error("There is no refresh token stored.")
    }
}
const peticionesUser = new PeticionesManagement();


