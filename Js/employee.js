const $contentData = document.querySelector(".content-data");
const $btnAdd = document.getElementById("btnAdd");

$btnAdd.addEventListener("click",addEmployeeShow);


function addEmployeeShow(){
  clear();

  const $templateEmployee = document.getElementById("form-employee").content;
  const $fragment = document.createDocumentFragment();
  const clone = $templateEmployee.cloneNode(true);

  $fragment.appendChild(clone);
  $contentData.appendChild($fragment);
}


function clear(){
  $contentData.innerHTML = "";
}