import {displayEmployee, displayInfEmplo, deleteEmployee} from './appEmp.js';
document.getElementById("logoutButton").addEventListener("click", logout);
const $contentData = document.querySelector(".content-data");
const $btnAdd = document.getElementById("btnAdd");
//export const formEmployee = document.getElementById('form-employee')
export const ListEmp = document.getElementById('ListEmp')
export const DeleteEmp = document.getElementById('DeleteEmp') 
export const UpdateEmp = document.getElementById('UpdateEmp')
export const formA = document.getElementById('formA')
export const formB = document.getElementById('formB')
export const formC = document.getElementById('formC')
export const formD = document.getElementById('formD')
export const formE = document.getElementById('formE')
export const formF = document.getElementById('formF')
export const tablaEmployee = document.getElementById('tablaEmployee')
export const staticLabel = document.getElementById('staticBackdropLabel')


$btnAdd.addEventListener("click", addEmployeeShow);

function addEmployeeShow(){
  clear($contentData);
  const $templateEmployee = document.getElementById("form-employee").content;
  const $fragment = document.createDocumentFragment();
  const clone = $templateEmployee.cloneNode(true);

  $fragment.appendChild(clone);
  $contentData.appendChild($fragment);
}


DeleteEmp.addEventListener('submit', function(e) {
    e.preventDefault();
    clear(tablaEmployee)
    clear(staticLabel)
    var id = document.getElementById('inputDeleteEmp').value;
    var url = `Unique/${id}`;
    staticLabel.insertAdjacentHTML('beforeend',`EMPLEADO A ELIMINAR`)
    deleteEmployee(url);
  }
)

UpdateEmp.addEventListener('submit', function(e) {
  e.preventDefault();
  clear(tablaEmployee)
  clear(staticLabel)
  var id = document.getElementById('inputUpdateEmp').value;
  var url = `${id}`;
  staticLabel.insertAdjacentHTML('beforeend',`EMPLEADO A ELIMINAR`)
  deleteEmployee(url);
}
)

ListEmp.addEventListener('click', function(e) {
    e.preventDefault();
    clear(tablaEmployee)
    clear(staticLabel)
    var url = "List";
    staticLabel.insertAdjacentHTML('beforeend',`LISTA DE EMPLEADOS`)
    displayEmployee(url);
})

formA.addEventListener('submit', function(e) {
    e.preventDefault();
    clear(tablaEmployee)
    clear(staticLabel)
    var anio = document.getElementById('inputformA').value;
    var url = `CountAllSalesEmployees/${anio}`;
    staticLabel.insertAdjacentHTML('beforeend',`CANTIDAD DE VENTAS POR EMPLEADO EN ${anio}`);
    displayInfEmplo(url);
})

formB.addEventListener('submit', function(e) {
    e.preventDefault();
    clear(tablaEmployee)
    clear(staticLabel)
    var cantidad = document.getElementById('inputformB').value;
    var url = `SalesGreaterThan/${cantidad}`;
    staticLabel.insertAdjacentHTML('beforeend',`EMPLEADO(S) CON MÁS DE ${cantidad} VENTA(S) EN TOTAL`)
    displayEmployee(url);
})

formC.addEventListener('submit', function(e) {
    e.preventDefault();
    clear(tablaEmployee)
    clear(staticLabel)
    var anio = document.getElementById('inputformC').value;
    var url = `EmployeeNeverSaleYear/${anio}`;
    staticLabel.insertAdjacentHTML('beforeend',`EMPLEADO(S) QUE NO HAN REALIZADO VENTA(S) EN ${anio}`)
    displayEmployee(url);
})

formD.addEventListener('submit', function(e) {
    e.preventDefault();
    clear(tablaEmployee)
    clear(staticLabel)
    var cantidad = document.getElementById('inputformD1').value;
    var anio = document.getElementById('inputformD2').value;
    var url = `GetEmployeeSaleYear/${cantidad}/${anio}`;
    staticLabel.insertAdjacentHTML('beforeend',`EMPLEADO(S) CON MENOS DE ${cantidad} VENTA(S) EN ${anio}`)
    displayEmployee(url);
})

formE.addEventListener('submit', function(e) {
    e.preventDefault();
    clear(tablaEmployee)
    clear(staticLabel)
    var anio = document.getElementById('inputformE').value;
    var url = `GetEmployeeDifferentProducts/${anio}`;
    staticLabel.insertAdjacentHTML('beforeend',`EMPLEADO QUE VENDIO MAYOR CANTIDAD DE PRODUCTOS DIFERENTES EN ${anio}`)
    displayEmployee(url);
})

formF.addEventListener('submit', function(e) {
    e.preventDefault();
    clear(tablaEmployee)
    clear(staticLabel)
    var mes = document.getElementById('inputformF1').value;
    var anio = document.getElementById('inputformF2').value;
    var url = `GetEmployeeNeverSale/${mes}/${anio}`;
    staticLabel.insertAdjacentHTML('beforeend',`EMPLEADO(S) QUE NO REALIZARON VENTA(S) EL MES ${mes} DEL AÑO ${anio}`)
    displayEmployee(url);
})



function clear(contenido){
  contenido.innerHTML = "";
}

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