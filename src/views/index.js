function getAllPatiente(){
    fetch( `http://localhost:3000/get-all`, {
            method: 'GET',
    })
    .then(res => res.json())
    .then( data =>{
        if(data.status == 200){
            generarLista(data.data);
        }else{
            console.log('Algo salio mal')
        }
    })
    .catch(err => console.log(err));
}

function generarLista (data){
    document.querySelector("#listaPaciente").innerHTML= '';

    for(let valor of data){
        document.querySelector("#listaPaciente").innerHTML += `
            <div class="card w-75 mb-3" style="box-shadow: 7px 5px 5px rgb(214, 214, 214);">
                <div class="card-body">
                    <h5 class="card-title">Nombre: ${valor.nombre}</h5>
                    <p class="card-text">ID: ${valor.id}</p>
                    <p class="card-text">Tutor: ${valor.nombreTutor}</p>
                    <p class="card-text">Hospital de Origen: ${valor.nombreHospital}</p>
                    <a href="/paciente.html?id=${valor.id}" class="btn btn-primary">Mas...</a>
                    <a onclick="Eliminar(${valor.id})" class="btn btn-danger">Eliminar</a>
                </div>
            </div>   
        `
    }
}



function PacienteInfo(query){
    fetch( `http://localhost:3000/paciente${query}`, {
            method: 'GET',
    })
    .then(res => res.json())
    .then( data =>{
        if(data.status == 200){
            console.log(data);
        }else{
            console.log('Algo salio mal')
        }
    })
    .catch(err => console.log(err));
}

