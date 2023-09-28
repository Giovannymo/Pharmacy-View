const $btnAdd = document.getElementById("btnAdd");
const $contentData = document.querySelector(".content-data");
console.log($btnAdd);



$btnAdd.addEventListener("click", addSupplier);


function addSupplier(){
  clear();

  const $templateSupplier = document.getElementById("form-supplier").content;
  const $fragment = document.createDocumentFragment();
  const clone = $templateSupplier.cloneNode(true);

  $fragment.appendChild(clone);
  $contentData.appendChild($fragment);
}


function clear(){
  $contentData.innerHTML = "";
}