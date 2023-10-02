import {tablaEmployee} from './employee.js'
import { fetchData, remove } from './FetchEmployee.js'

export async function displayEmployee(url)
{
  const config = { method: 'GET'}; 
  const data = await fetchData(url, config);

    if (Array.isArray(data)) {
      data.forEach((emp, index) => {
        const employees = `
        <tr>
          <td class="text-center">${index+1}</td>
          <td class="text-center">${emp.name}</td>
          <td class="text-center">${emp.identificationType.description}</td>
          <td class="text-center">${emp.identification}</td>
          <td class="text-center">${emp.jobTitle.description}</td>
          <td class="text-center">${emp.hireDate}</td>
        </tr>`;
        tablaEmployee.insertAdjacentHTML('beforeend', employees); 
      })
    } else {
      const emp = data;
      const employees = `
        <tr>
          <td class="text-center">1</td>
          <td class="text-center">${emp.name}</td>
          <td class="text-center">${emp.identificationType.description}</td>
          <td class="text-center">${emp.identification}</td>
          <td class="text-center">${emp.jobTitle.description}</td>
          <td class="text-center">${emp.hireDate}</td>
        </tr>`;
        tablaEmployee.insertAdjacentHTML('beforeend', employees); 
    }
    const theadEmployee = document.getElementById('theadEmployee')
    theadEmployee.innerHTML = "";
    theadEmployee.insertAdjacentHTML('beforeend', theadComp )
}


export async function displayInfEmplo(url)
{
  const config = { method: 'GET'}; 
  const data = await fetchData(url, config);
  data.forEach((emp, index) => {
    const employees = `
    <tr>
      <td class="text-center">${index+1}</td>
      <td class="text-center">${emp.name}</td>
      <td class="text-center">${emp.identification}</td>
      <td class="text-center">${emp.totalSales}</td>
    </tr>`;
    tablaEmployee.insertAdjacentHTML('beforeend', employees); 
  })
  const theadEmployee = document.getElementById('theadEmployee')
  theadEmployee.innerHTML = "";
  theadEmployee.insertAdjacentHTML('beforeend', theadSale )
}


export async function deleteEmployee(url)
{
  const config = { method: 'GET'}; 
  const data = await fetchData(url, config);
      const emp = data;
      const employees = `
        <tr>
          <td class="text-center">1</td>
          <td class="text-center">${emp.name}</td>
          <td class="text-center">${emp.identificationType.description}</td>
          <td class="text-center">${emp.identification}</td>
          <td class="text-center">${emp.jobTitle.description}</td>
          <td class="text-center">${emp.hireDate}</td>
          <td class="text-center"><button class="btn btn-danger botonEliminar" id="${emp.identification}">Eliminar</button></td>
        </tr>`;
        tablaEmployee.insertAdjacentHTML('beforeend', employees); 

    const theadEmployee = document.getElementById('theadEmployee')
    theadEmployee.innerHTML = "";
    theadEmployee.insertAdjacentHTML('beforeend', theadComp )

    const botonEliminar = tablaEmployee.querySelectorAll('.botonEliminar');
    botonEliminar.forEach(botonE =>{
      botonE.onclick = () => remove(botonE)
    });
}





const theadComp = `<tr class="encabezadoTabla  ">
                <th class="col text-center bg-primary bg-opacity-75">Id</th>
                <th class="col text-center bg-primary bg-opacity-75">Nombre</th>
                <th class="col text-center bg-primary bg-opacity-75">Tipo Id</th>
                <th class="col text-center bg-primary bg-opacity-75">Identificacion</th>
                <th class="col text-center bg-primary bg-opacity-75">Cargo</th>
                <th class="col text-center bg-primary bg-opacity-75">Fecha Contratacion</th>
              </tr>`

const theadSale = `<tr class="encabezadoTabla  bg-opacity-75 ">
              <th class="col text-center bg-primary bg-opacity-75">Id</th>
              <th class="col text-center bg-primary bg-opacity-75">Nombre</th>
              <th class="col text-center bg-primary bg-opacity-75">Identificacion</th>
              <th class="col text-center bg-primary bg-opacity-75">Total Ventas</th>
            </tr>`  