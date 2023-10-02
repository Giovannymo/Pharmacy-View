import {
  displaySupplier, 
  displaySupProduct, 
  displayTotalSup, 
  displayGainTSup, 
  displayTotMSup,
  deleteSupplier 
} from './appSupp.js';


const $btnAdd = document.getElementById("btnAdd");
const $contentData = document.querySelector(".content-data");


export const ListSup = document.getElementById('ListSup')
export const DeleteSup = document.getElementById('DeleteSup') 
export const UpdateSup = document.getElementById('UpdateSup')
export const BtnformA = document.getElementById('BtnformA')
export const BtnformB = document.getElementById('BtnformB')
export const formC = document.getElementById('formC')
export const formD = document.getElementById('formD')
export const formE = document.getElementById('formE')
export const formF = document.getElementById('formF')
export const formG = document.getElementById('formG') 
export const formH = document.getElementById('formH')
export const tablaSupplier = document.getElementById('tablaSupplier')
export const staticLabel = document.getElementById('staticBackdropLabel')

$btnAdd.addEventListener("click", addSupplier);


function addSupplier(){
  clear();

  const $templateSupplier = document.getElementById("form-supplier").content;
  const $fragment = document.createDocumentFragment();
  const clone = $templateSupplier.cloneNode(true);

  $fragment.appendChild(clone);
  $contentData.appendChild($fragment);
}

DeleteSup.addEventListener('submit', function(e) {
  e.preventDefault();
  console.log("entro")
  clear(tablaSupplier)
  clear(staticLabel)
  var id = document.getElementById('inputDeleteSup').value;
  var url = `Unique/${id}`;
  staticLabel.insertAdjacentHTML('beforeend',`PROVEEDOR A ELIMINAR`)
  deleteSupplier(url);
})

UpdateSup.addEventListener('submit', function(e) {
e.preventDefault();
clear(tablaSupplier)
clear(staticLabel)
var id = document.getElementById('inputUpdateEmp').value;
var url = `${id}`;
staticLabel.insertAdjacentHTML('beforeend',`EMPLEADO A ELIMINAR`)
deleteEmployee(url);
}
)

ListSup.addEventListener('click', function(e) {
  e.preventDefault();
  clear(tablaSupplier)
  clear(staticLabel)
  var url = "List";
  staticLabel.insertAdjacentHTML('beforeend',`LISTA DE PROVEEDORES`)
  displaySupplier(url);
})

BtnformA.addEventListener('click', function(e) {
  e.preventDefault();
  clear(tablaSupplier)
  clear(staticLabel)
  var url = `GetProductsSoldEachSupplier`;
  staticLabel.insertAdjacentHTML('beforeend',`TOTAL MEDICAMENTOS VENDIDOS POR PROVEEDOR`);
  displaySupProduct(url);
})

BtnformB.addEventListener('click', function(e) {
  e.preventDefault();
  clear(tablaSupplier)
  clear(staticLabel)
  var url = `TotalProductsSupplier`;
  staticLabel.insertAdjacentHTML('beforeend',`NÚMERO DE MEDICAMENTOS POR PROVEEDOR`)
  displayTotMSup(url);
})

formC.addEventListener('submit', function(e) {
  e.preventDefault();
  clear(tablaSupplier)
  clear(staticLabel)
  var anio = document.getElementById('inputformC').value;
  var url = `NeverSell/${anio}`;
  staticLabel.insertAdjacentHTML('beforeend',`PROVEEDORES QUE NO HAN VENDIDO EN ${anio}`)
  displaySupplier(url);
})

formD.addEventListener('submit', function(e) {
  e.preventDefault();
  clear(tablaSupplier)
  clear(staticLabel)
  var anio = document.getElementById('inputformD').value;
  var url = `TotalSupplierGain/${anio}`;
  staticLabel.insertAdjacentHTML('beforeend',`GANANCIA TOTAL POR PROVEEDOR EN ${anio}`)
  displayGainTSup(url);
})

formE.addEventListener('submit', function(e) {
  e.preventDefault();
  clear(tablaSupplier)
  clear(staticLabel)
  var anio = document.getElementById('inputformE').value;
  var url = `MostSuminAsync/${anio}`;
  staticLabel.insertAdjacentHTML('beforeend',`PROVEEDOR QUE HA SUMINISTRADO MAS MEDICAMENTOS EN ${anio}`)
  displaySupplier(url);
})

formF.addEventListener('submit', function(e) {
  e.preventDefault();
  clear(tablaSupplier)
  clear(staticLabel)
  var anio = document.getElementById('inputformF').value;
  var url = `GetTotalYear/${anio}`;
  staticLabel.insertAdjacentHTML('beforeend',`TOTAL PROVEEDORES QUE SUMINISTRARON MEDICAMENTOS EN ${anio}`)
  displayTotalSup(url);
})


formG.addEventListener('submit', function(e) {
  e.preventDefault();
  clear(tablaSupplier)
  clear(staticLabel)
  var cantidad = document.getElementById('inputformG').value;
  var url = `WithStock/${cantidad}`;
  staticLabel.insertAdjacentHTML('beforeend',`PROVEEDORES DE PRODUCTOS CON MENOS DE ${cantidad} UNDS EN STOCK.`)
  displaySupProduct(url);
}) 

formH.addEventListener('submit', function(e) {
  e.preventDefault();
  clear(tablaSupplier)
  clear(staticLabel)
  var cantidad = document.getElementById('inputformH1').value;
  var anio = document.getElementById('inputformH2').value;
  var url = `WithAtLeastProducts/${cantidad}/${anio}`;
  staticLabel.insertAdjacentHTML('beforeend',`Proveedores que suministraron al menos ${cantidad} medicamentos diferentes en ${anio}`)
  displaySupplier(url);
})


function clear(contenido){
contenido.innerHTML = "";
}