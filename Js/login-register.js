document.getElementById("btnRegister").addEventListener("click", RegistrarUsuario);
document.getElementById("btnLogin").addEventListener("click", LoginUsuario);


async function RegistrarUsuario(e) {
  e.preventDefault();
  const registerUsername = document.getElementById("registerUsername").value;
  const registerEmail = document.getElementById("registerEmail").value;
  //const registerPassword = document.getElementById("registerPassword").value;

  try {
    const newUser = {
      name: registerUsername,
      password: registerPassword,
      email: registerEmail,
    };

    const config = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newUser),
    };

    const response = await fetch(
      "http://localhost:5043/ApiPharmacy/User/register",
      config
    );
    alert(response);
  } catch (e) {
    alert("An error has occurred" + e);
  }
}


function getCookieExpirationDate(){
  const expirationDays = 10;
  const expirationDate = new Date();
  expirationDate.setDate(expirationDate.getDate() + expirationDays);
  return expirationDate.toUTCString();
}

async function LoginUsuario(e) {
  e.preventDefault();
  const loginName = document.getElementById("loginName").value;
  const loginPassword = document.getElementById("loginPassword").value;

  try {
    const user = {
      name: loginName,
      password: loginPassword,
    };

    const config = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(user),
    };
    const response = await fetch(
      "http://localhost:5043/ApiPharmacy/User/token",
      config
    );
    const data = await response.json();

    if (data.isAuthenticated === true) {
        const refreshTokenExpirationDate = getCookieExpirationDate();
        document.cookie = `accessToken=${data.token}; path=/; expires=${refreshTokenExpirationDate}`;
        document.cookie = `refreshToken=${data.refreshToken}; path=/; expires=${refreshTokenExpirationDate}`;
        document.cookie = `jobsTitle=${data.jobsTitle[0]}; path=/; expires=${refreshTokenExpirationDate}`;

        window.location.href = "../View/employee.html";

      
    } else {
      alert(data.message);
    }
  } catch (e) {
    alert("An error has occurred" + e);
  }
}
function getCookieExpirationDate(){
    const expirationDays = 10;
    const expirationDate = new Date();
    expirationDate.setDate(expirationDate.getDate() + expirationDays);
    return expirationDate.toUTCString();
}

// Función para cerrar la sesión y redirigir a la página de inicio de sesión


/* 
async function renewAccessTokenUsingRefreshToken(refreshToken) {
  // Datos que se enviarán en el cuerpo de la solicitud POST
  const requestBody = {
    refreshToken: refreshToken,
  };

  // Opciones de la solicitud, incluyendo el método, el cuerpo y las cookies
  const config = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(requestBody),
    credentials: "include", // Esta opción incluye las cookies en la solicitud
  }; 


  try {
    const response = await fetch("http://localhost:5043/ApiPharmacy/User/refresh-token", config);

    if (response.ok) {
      // La solicitud fue exitosa, manejar la respuesta si es necesario
      const data = await response.json();
      return data; // Puedes devolver los datos obtenidos
    } else {
      // La solicitud falló, manejar errores
      throw new Error("Error al renovar el token");
    }
  } catch (error) {
    // Manejar errores
    console.error(error);
    throw error;
  }
}*/

// Ejemplo de uso:
/* const refreshTokenValue = "el-valor-del-refresh-token-aqui";
renewAccessTokenUsingRefreshToken(refreshTokenValue)
  .then((data) => {
    // Manejar los datos de la respuesta aquí
    console.log(data);
  })
  .catch((error) => {
    // Manejar errores aquí
    console.error(error);
  });
 */
/* if(toJson.isAuthenticated == true)
        {
            localStorage.setItem("accessToken", toJson.token);
            if (toJson.refreshToken){
                localStorage.setItem("refreshToken", toJson.refreshToken)
            }

            await renewAccessToken();
            window.location.href = "../View/employee.html";
        }
        else{
            alert(toJson.message);
        } */
/*
function setRefeshTokenCookie(refreshToken)
{
    document.cookie = `refreshToken=${refreshToken}; Secure; HttpOnly; Expires = ${getCookieExpirationDate()}`;
}



async function renewAccessToken(){
    const refreshToken = localStorage.getItem("refreshToken");
    if(refreshToken){
        try {
            const response = await peticionesUser.PostDatos({refreshToken}, "User/refresh-token");
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






















fetch("http://localhost:5043/ApiPharmacy/User/register", {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(newUser)
      }) */
