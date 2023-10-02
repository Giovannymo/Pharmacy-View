import {tablaSupplier} from './supplier.js'
import { fetchData, remove } from './FetchSupplier.js'

export async function displaySupplier(url)
{
  const config = { method: 'GET'}; 
  const data = await fetchData(url, config);

    if (Array.isArray(data)) {
      data.forEach((sup, index) => {
        const suppliers = `
        <tr>
          <td class="text-center">${index+1}</td>
          <td class="text-center">${sup.name}</td>
          <td class="text-center">${sup.identificationType.description}</td>
          <td class="text-center">${sup.identification}</td>
          <td class="text-center">${sup.personType.description}</td>
        </tr>`;
        tablaSupplier.insertAdjacentHTML('beforeend', suppliers); 
      })
    } else {
      const sup = data;
      const supplier = `
        <tr>
          <td class="text-center">1</td>
          <td class="text-center">${sup.name}</td>
          <td class="text-center">${sup.identificationType.description}</td>
          <td class="text-center">${sup.identification}</td>
          <td class="text-center">${sup.personType.description}</td>
        </tr>`;
        tablaSupplier.insertAdjacentHTML('beforeend', supplier); 
    }
    const theadSupplier = document.getElementById('theadSupplier');
    theadSupplier.innerHTML = "";
    theadSupplier.insertAdjacentHTML('beforeend', theadComp )
}


export async function displaySupProduct(url)
{
  const config = { method: 'GET'}; 
  const data = await fetchData(url, config);

  data.forEach((sup, index) => {
    const suppliers = `
    <tr>
      <td colspan="1"></td>
      <td class="text-center">${index+1}</td>
      <td class="text-center">${sup.name}</td>
      <td class="text-center">${sup.identification}</td>
    </tr>`;
    tablaSupplier.insertAdjacentHTML('beforeend', suppliers); 
    tablaSupplier.insertAdjacentHTML('beforeend', theadProd);
  
    if (sup.products && sup.products.length > 0) {
      sup.products.forEach((product, index) => {
        const productRow = `
          <tr>
            <td class="text-center">${index+1}</td>
            <td class="text-center">${product.name}</td>
            <td class="text-center">${product.price}</td>
            <td class="text-center">${product.stock}</td>
            <td class="text-center">${product.expirationDate}</td>
          </tr>`;
        tablaSupplier.insertAdjacentHTML('beforeend', productRow);
      });
    }
    if(index != data.length - 1) {
      tablaSupplier.insertAdjacentHTML('beforeend', theadSupProd ) 
    }
  }) 
    const theadSupplier = document.getElementById('theadSupplier');
    theadSupplier.innerHTML = "";
    theadSupplier.insertAdjacentHTML('beforeend', theadSupProd ) 
} 

export async function displayTotalSup(url)
{
  const config = { method: 'GET'}; 
  const data = await fetchData(url, config);
    const supplier = `
      <tr>
        <td class="text-center">Total Proveedores</td>
        <td class="text-center">${data.totalSuppliers}</td>
      </tr>`;
      tablaSupplier.insertAdjacentHTML('beforeend', supplier); 

    const theadSupplier = document.getElementById('theadSupplier');
    theadSupplier.innerHTML = "";
    theadSupplier.insertAdjacentHTML('beforeend', theadTotSup )
}


export async function displayGainTSup(url)
{
  const config = { method: 'GET'}; 
  const data = await fetchData(url, config);
    data.forEach((sup, index) => {
      const suppliers = `
      <tr>
        <td class="text-center">${index+1}</td>
        <td class="text-center">${sup.supplier}</td>
        <td class="text-center">$ ${sup.totalGain}</td>
      </tr>`;
      tablaSupplier.insertAdjacentHTML('beforeend', suppliers); 
    })
    const theadSupplier = document.getElementById('theadSupplier');
    theadSupplier.innerHTML = "";
    theadSupplier.insertAdjacentHTML('beforeend', theadGanSup )
}

export async function displayTotMSup(url)
{
  const config = { method: 'GET'}; 
  const data = await fetchData(url, config);
    data.forEach((sup, index) => {
      const suppliers = `
      <tr>
        <td class="text-center">${index+1}</td>
        <td class="text-center">${sup.supplierName}</td>
        <td class="text-center">${sup.numberOfProducts}</td>
      </tr>`;
      tablaSupplier.insertAdjacentHTML('beforeend', suppliers); 
    })
    const theadSupplier = document.getElementById('theadSupplier');
    theadSupplier.innerHTML = "";
    theadSupplier.insertAdjacentHTML('beforeend', theadGanSup )
}


export async function deleteSupplier(url)
{
  const config = { method: 'GET'}; 
  const data = await fetchData(url, config);
      const sup = data;
      const supplier = `
        <tr>
          <td class="text-center">1</td>
          <td class="text-center">${sup.name}</td>
          <td class="text-center">${sup.identificationType.description}</td>
          <td class="text-center">${sup.identification}</td>
          <td class="text-center">${sup.personType.description}</td>
          <td class="text-center"><button class="btn btn-danger botonEliminar" id="${sup.identification}">Eliminar</button></td>
        </tr>`;
        tablaSupplier.insertAdjacentHTML('beforeend', supplier); 

    const theadSupplier = document.getElementById('theadSupplier')
    theadSupplier.innerHTML = "";
    theadSupplier.insertAdjacentHTML('beforeend', theadComp )

    const botonEliminar = tablaSupplier.querySelectorAll('.botonEliminar');
    botonEliminar.forEach(botonE =>{
      botonE.onclick = () => remove(botonE)
    });
}


const theadSupProd = `<tr><td></td><td></td><td></td></tr>
<tr class="encabezadoTabla ">
    <th colspan="1"></th>
    <th class=" text-center bg-primary bg-opacity-75">Id</th>
    <th class=" text-center bg-primary bg-opacity-75">Proveedor</th>
    <th class=" text-center bg-primary bg-opacity-75">Identificacion</th>
</tr>`

const theadProd = `<tr class="encabezadoTabla ">
    <th class="col-2 text-center bg-info bg-opacity-75">Id</th>
    <th class="col text-center bg-info bg-opacity-75">Producto</th>
    <th class="col text-center bg-info bg-opacity-75">Precio</th>
    <th class="col text-center bg-info bg-opacity-75">Unidades</th>
    <th class="col-2 text-center bg-info bg-opacity-75">Fecha V.</th>
</tr>`

const theadComp = `<tr class="encabezadoTabla ">
    <th class="col-2 text-center bg-primary bg-opacity-75">Id</th>
    <th class="col text-center bg-primary bg-opacity-75">Proveedor</th>
    <th class="col text-center bg-primary bg-opacity-75">Tipo Id</th>
    <th class="col text-center bg-primary bg-opacity-75">Identificacion</th>
    <th class="col-2 text-center bg-primary bg-opacity-75">Tipo Persona</th>
</tr>`

const theadTotSup = `<tr class="encabezadoTabla ">
  <th class="col text-center bg-primary bg-opacity-75">Item</th>
  <th class="col text-center bg-primary bg-opacity-75">Cantidad</th>
</tr>`

const theadGanSup = `<tr class="encabezadoTabla ">
  <th class="col text-center bg-primary bg-opacity-75">Id</th>
  <th class="col text-center bg-primary bg-opacity-75">Proveedor</th>
  <th class="col text-center bg-primary bg-opacity-75">Cantidad</th>
</tr>`