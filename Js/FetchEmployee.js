
//------------------------------------------------ FETCH -------------------------------------------------
export async function fetchData(url, config){
  try{
    const response = await fetch(`http://localhost:5043/ApiPharmacy/Employee/${url}`, config);
    const data = await response.json();
    return data;
    }catch (error) {
    console.error('Error a la peticion de Empleados', error);
  };
}

//--------------------------------------------- AGREGAR (POST) ---------------------------------------------
export async function add(endPoint, newData) {
  const config = {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(newData)
  };
  await fetchData(`${endPoint}`, config); 
};


//---------------------------------------------ACTUALIZAR (PATCH) -------------------------------

//------OBTIENE LOS DATOS Y LOS ENVIA AL INPUT PARA EDITARLOS------
export async function update(endPoint, boton){
  const id = boton.id;
  const config = {
    method: 'GET'
  }; 
  const data = await fetchData((`${endPoint}/${id}`), config);
  idDepar.value = id;
  nuevoDep.value = data.nomDepartamento
  return id;
};

//------ACTUALIZA LOS DATOS------
export async function patch(endPoint, newRuta){
 const id = idDepar.value;
  const config = {
    method: 'PATCH',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(newRuta)
  };
  fetchData(`${endPoint}/${id}`, config);
};


//--------------------------------------------- ELIMINAR (DELETE) ---------------------------------------------
export function remove(boton){
  const id = boton.id;
  const fila = boton.parentNode.parentNode;
  fila.remove();
 
  const config = {
    method: 'DELETE',
    headers: { 'Content-Type': 'application/json' },
  };
  fetchData(id, config);  
};