const listUsers = async()=>{
  try{
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await response.json();

    let content = "";
    data.forEach((user, index)=> {
      content += `
        <tr>
          <td>${index+1}</td>
        </tr>
      `;
    });

    tableUsers.innerHTML = content;
  }catch(ex){
    alert(ex);
  }
}

window.addEventListener("load", async()=>{
  await listUsers();
});