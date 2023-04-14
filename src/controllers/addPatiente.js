const patienteModel = require("../models/patienteModel")

const addPatiente = async(req, res) => {
    const newPatiente = req.body

    if(!(newPatiente.nombre && newPatiente.sexo && newPatiente.fechaNac && newPatiente.ciudadOrigen && newPatiente.hospitalOrigen_fk && newPatiente.nombreTutor && newPatiente.telefonoTutor && newPatiente.hospitalDestino_fk)){
        return res.status(401).json({status: 401, mensaje: "Todos los campos son obligatorios"});
    }

    //genara fecha
    newPatiente.fechaInscripcion = new Date().toISOString().slice(0, 19).replace('T', ' ');


    const result = await patienteModel.addPatiente(newPatiente);
    res.status(200).json({status:200, data: result, input: newPatiente, mensaje:"Agragado"});
}



module.exports = addPatiente
