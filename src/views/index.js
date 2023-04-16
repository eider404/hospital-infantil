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
    fetch( `http://localhost:3000/getPaciente${query}`, {
            method: 'GET',
    })
    .then(res => res.json())
    .then( data =>{
        if(data.status == 200){
            generarPacieneteInfo(data.data);
        }else{
            console.log('Algo salio mal')
        }
    })
    .catch(err => console.log(err));
}

function generarPacieneteInfo(data){
    document.querySelector("#pacienteInfo").innerHTML= '';
    document.querySelector("#nombrePatiente").innerHTML= `Datos de ${data[0].nombre}`;

    document.querySelector("#pacienteInfo").innerHTML = `
        <li class="list-group-item">
            <strong>ID:</strong> ${data[0].id}
        </li>
        <li class="list-group-item">
            <strong>Edad:</strong> ${data[0].edad}
        </li>
        <li class="list-group-item">
            <strong>Sexo:</strong> ${data[0].sexo}
        </li>
        <li class="list-group-item">
            <strong>Fecha de nacimiento:</strong> ${data[0].fechaNac.slice(0,10)}
        </li>
        <li class="list-group-item">
            <strong>Ciudad de origen:</strong> ${data[0].nombreCiudad}
        </li>
        <li class="list-group-item">
            <strong>Estado de la ciudad:</strong> ${data[0].estadoCiudad}
        </li>
        <li class="list-group-item">
            <strong>CP:</strong> ${data[0].cpCiudad}
        </li>
        <li class="list-group-item">
            <strong>Fecha de inscripción:</strong> ${data[0].fechaInscripcion}
        </li> 
        <li class="list-group-item">
            <strong>Hospital de origen:</strong> ${data[0].nombreHospital}
        </li> 
        <li class="list-group-item">
            <strong>Direccion del Hospital:</strong> ${data[0].direccionHospital}
        </li> 
        <li class="list-group-item">
            <strong>Nombre del tutor:</strong> ${data[0].nombreTutor}
        </li> 
        <li class="list-group-item">
            <strong>Teléfono del tutor:</strong> ${data[0].telefonoTutor}
        </li>   
    `
}