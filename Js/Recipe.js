document.getElementById("logoutButton").addEventListener("click", logout);
function logout(e) {
  e.preventDefault();
  console.log("Entro log");
  // Eliminar las cookies de accessToken y refreshToken configurando una fecha en el pasado
  document.cookie = "accessToken=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
  document.cookie = "refreshToken=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
  document.cookie = "jobsTitle=;  expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;"

  // Redirigir al usuario a la página de inicio de sesión
  window.location.href = "./login.html";
  
} 