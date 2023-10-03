document.getElementById("logoutButton").addEventListener("click", logout);
const $templateTableProducts = document.getElementById("table-products").content;
const $modalBody = document.querySelector(".modal-body");
const $selectSuppliers = document.getElementById("selectSuppliers");
const $selectProducts = document.getElementById("selectProducts");

window.addEventListener("load",async ()=>{
  const clone = $templateTableProducts.cloneNode(true);
  $modalBody.appendChild(clone);

  const suppliers = await getDataSuppliers();
  let content = "";

  if (Array.isArray(suppliers)) 
  {
    console.log(suppliers);
    suppliers.forEach((supplier)=>{ 
        content += `
        <option>${supplier.name}</option>
       `
    })
  }else{
        content += `
        <option>${suppliers.name}</option>
      `;
  }
  $selectSuppliers.innerHTML = content;
  const products = await getDataProduct("");

  let contentProduct = "";
  console.log(products);


  products.forEach((product)=>{ 
      contentProduct += `
      <option>${product.name}</option>
      `
  })
  $selectProducts.innerHTML = contentProduct;

})


//Variables
const $infoData = document.querySelector(".info-data");
const $btnLessThan = document.getElementById("btnProductsLessThan");
const $btnPurchase = document.getElementById("purchaseSupplier");
const $btnSale = document.getElementById("saleProduct");
const contentData = document.querySelector(".content-data");

//Events
/* $btnPurchase.addEventListener("click", purchaseProduct);

$btnSale.addEventListener("click", saleProduct); */
$infoData.addEventListener("click", actionTo);



//Functions
/* function purchaseProduct(){

  clear();

  const $templatePurchase = document.getElementById("form-purchase").content
  const $fragment = document.createDocumentFragment();


  const clone = $templatePurchase.cloneNode(true);
  $fragment.appendChild(clone)
  contentData.appendChild($fragment)
}

function saleProduct(){
  clear();

  const $templateSale = document.getElementById("form-sale").content
  const $fragment = document.createDocumentFragment();
  const clone = $templateSale.cloneNode(true);

  $fragment.appendChild(clone)
  contentData.appendChild($fragment)


} */

async function  actionTo(e){
  console.log(e.target);
  const $tableProducts = document.getElementById("tableProducts");
  const $headTable= $modalBody.querySelector("#tHeadTable");
  const $bodyTable= $modalBody.querySelector("#tBodyTable");
  clear($headTable, $bodyTable);

  if(e.target.id === "btnProductsLessThan"){
    const $txtLessThan = document.getElementById("txtLessThan");
    const data = await getDataProduct(`GetLessThan/${$txtLessThan.value}`); 
    let contentHead = `
      <tr>
        <th scope="col">#</th>
        <th scope="col">Nombre</th>
        <th scope="col">Precio</th>
        <th scope="col">Stock</th>
      </tr>`
    $headTable.innerHTML = contentHead;

    let contentBody = "";
    
    data.forEach((product) =>{
      contentBody += `
      <tr>
      <th scope="row">${product.id}</th>
      <td>${product.name}</td>
      <td>${product.price}</td>
      <td>${product.stock}</td>
      </tr>
      
      `;
      
      console.log(product);
      $bodyTable.innerHTML = contentBody;
    })
  }else if(e.target.id === "btnGetSupplierInProduct"){
    console.log("soy");
    const data = await getDataProduct(`ContactSupplierInProduct`); 
    console.log(data);

    let contentHead = `
    <tr>
      <th scope="col">#</th>
      <th scope="col">Nombre</th>
      <th scope="col">Proveedor</th>
    </tr>`
    $headTable.innerHTML = contentHead;

    let contentBody = "";
    data.forEach( product => {
      contentBody += `
      <tr>
        <th scope="row">${product.id}</th>
        <td>${product.name}</td>
        <td>${product.supplier.name}</td>
      </tr>
      `
    })
    $bodyTable.innerHTML = contentBody;


  }else if(e.target.id === "btnProductInSupplier" ){
    const selectValue = $selectSuppliers.value;
    const data = await getDataProduct(`ProductsBySupplier/${selectValue}`);
    let contentHead = `
    <tr>
      <th scope="col">#</th>
      <th scope="col">Nombre</th>
    </tr>`;

    $headTable.innerHTML = contentHead;
    let contentBody = "";

    data.forEach(product => {
      contentBody += `
      <tr>
        <th scope="row">${product.id}</th>
        <td>${product.name}</td>
      </tr>
     
      `
    }) 
 
    $bodyTable.innerHTML = contentBody;
      

  }else if(e.target.id === "btnSaleProduct"){
    const selectValue = $selectProducts.value;
    const data = await getDataSales(`${selectValue}`);

    let contentHead = `
    <tr>
      <th scope="col">Total ventas:</th>
    </tr>`;

    $headTable.innerHTML = contentHead;
    let contentBody = "";
    contentBody += `
      <tr>
        <th scope="row">${data.totalSales}</th>
      </tr>
     `
 
    $bodyTable.innerHTML = contentBody;

    console.log(data);

    

  }else if(e.target.id === "btnExpiredBefore"){
    const $txtDate = document.getElementById("txtDate").value;
    const data = await getDataProduct(`ExpiredBefore/${$txtDate}`);
    let contentHead = `
    <tr>
      <th scope="col">#</th>
      <th scope="col">Nombre</th>
      <th scope="col">Precio</th>
      <th scope="col">Stock</th>
    </tr>`
  $headTable.innerHTML = contentHead;

  let contentBody = "";
  
  data.forEach((product) =>{
    contentBody += `
    <tr>
    <th scope="row">${product.id}</th>
    <td>${product.name}</td>
    <td>${product.price}</td>
    <td>${product.stock}</td>
    </tr>
    
    `;
    
    console.log(product);
    $bodyTable.innerHTML = contentBody;
  })
    console.log(data);
  }else if(e.target.id === "btnMostExpensive"){
    const data = await getDataProduct(`GetMostExpensive`);
    let contentHead = `
    <tr>
      <th scope="col">#</th>
      <th scope="col">Nombre</th>
      <th scope="col">Precio</th>
      <th scope="col">Stock</th>
    </tr>`
  $headTable.innerHTML = contentHead;

  let contentBody = "";
  
    contentBody += `
    <tr>
    <th scope="row">${data.id}</th>
    <td>${data.name}</td>
    <td>${data.price}</td>
    <td>${data.stock}</td>
    </tr>
    `
    $bodyTable.innerHTML = contentBody;

  }else if(e.target.id === "totalMonthSale"){
    const $selectMonth = document.getElementById("selectMonth").value;
    const data = await getDataProduct(`GetTotalMonth/${$selectMonth}/2023`);
    const $pTotal = document.getElementById("pTotal");
    $pTotal.textContent = data.totalProduct;
  }else if(e.target.id === "LowestSelling"){
    const $yearLowestSelling = document.getElementById("yearLowestSelling").value;
    const data = await getDataProduct(`GetLowestSellingProduct/${$yearLowestSelling}`);
    let contentHead = `
    <tr>
      <th scope="col">#</th>
      <th scope="col">Nombre</th>
      <th scope="col">Precio</th>
      <th scope="col">Stock</th>
    </tr>`
  $headTable.innerHTML = contentHead;

  let contentBody = "";
  
    contentBody += `
    <tr>
    <th scope="row">${data.id}</th>
    <td>${data.name}</td>
    <td>${data.price}</td>
    <td>${data.stock}</td>
    </tr>
    `
    $bodyTable.innerHTML = contentBody;

  }//Sin terminar
  else if(e.target.id === "totalGain"){
    const $selectMonth = document.getElementById("selectMonth").value;
    const data = await getDataProduct(`GetTotalMonth/${$selectMonth}/2023`);
    const $pTotal = document.getElementById("pTotal");
    $pTotal.textContent = data.totalProduct;

  }else if(e.target.id === "btnExpired"){
    const $yearExpired = document.getElementById("txtYearExpired").value;
    const data = await getDataProduct(`Expired/${$yearExpired}`);
    let contentHead = `
    <tr>
      <th scope="col">#</th>
      <th scope="col">Nombre</th>
      <th scope="col">Stock</th>
    </tr>`;

    $headTable.innerHTML = contentHead;
    let contentBody = "";

    data.forEach(product => {
      contentBody += `
      <tr>
        <th scope="row">${product.id}</th>
        <td>${product.name}</td>
        <td>${product.stock}</td>
      </tr>
     
      `
    }) 
    $bodyTable.innerHTML = contentBody;

  }else if(e.target.id === "btnNeverSold"){
    const data = await getDataProduct(`GetAllProductsNeverSold`); 
    let contentHead = `
      <tr>
        <th scope="col">#</th>
        <th scope="col">Nombre</th>
        <th scope="col">Precio</th>
        <th scope="col">Stock</th>
      </tr>`
    $headTable.innerHTML = contentHead;

    let contentBody = "";
    
    data.forEach((product) =>{
      contentBody += `
      <tr>
      <th scope="row">${product.id}</th>
      <td>${product.name}</td>
      <td>${product.price}</td>
      <td>${product.stock}</td>
      </tr>
      
      `;
      
      $bodyTable.innerHTML = contentBody;
    })

  }else if(e.target.id === "btnTotalProductYear"){
    const $selectYear = document.getElementById("txtYear").value;

    const data = await getDataProduct(`GetTotalProduct/${$selectYear}`);
    let contentHead = `
    <tr>
      <th scope="col">Mes</th>
      <th scope="col">Total venta:</th>
    </tr>`
  $headTable.innerHTML = contentHead;

  let contentBody = "";
  data.forEach( info =>{
    contentBody += `
    <tr>
      <td>${info.month}</td>
      <td>${info.totalMedicationsSold}</td>
    </tr>
    `
  })
  
    $bodyTable.innerHTML = contentBody;

  }

}

async function  getDataProduct(endPoint){
  try {
    const res = await fetch(`http://localhost:5043/ApiPharmacy/Product/${endPoint}`);
    const data = await res.json();

    return data;

  } catch (e) {
    alert(e);
  }
  return data;
}

async function getDataSuppliers(){
  try {
    const res = await fetch(`http://localhost:5043/ApiPharmacy/Supplier/List`);
    const data = await res.json();
    
    return data;

  } catch (e) {
    alert(e);
  }
}
async function getDataSales(endPoint){
  try {
    const res = await fetch(`http://localhost:5043/ApiPharmacy/Sales/${endPoint}`);
    const data = await res.json();
    
    return data;

  } catch (e) {
    alert(e);
  }
  return data;
}

function clear(thead, tbody){
  thead.innerHTML = "";
  tbody.innerHTML="";
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