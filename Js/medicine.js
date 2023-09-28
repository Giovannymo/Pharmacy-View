//Variables
const $btnPurchase = document.getElementById("purchaseSupplier");
const $btnSale = document.getElementById("saleProduct");
const contentData = document.querySelector(".content-data");

//Events
$btnPurchase.addEventListener("click", purchaseProduct);

$btnSale.addEventListener("click", saleProduct);


//Functions
function purchaseProduct(){

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


}


function clear(){
  contentData.innerHTML = "";
}