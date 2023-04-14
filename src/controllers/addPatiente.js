const patienteModel = require("../models/patienteModel")

const addPatiente = async(req, res) => {
    const newPatiente = req.body

    if(!(newPatiente.nombre && newPatiente.edad && newPatiente.sexo && newPatiente.fechaNac && newPatiente.ciudadOrigen_fk && newPatiente.hospitalOrigen_fk && newPatiente.nombreTutor && newPatiente.telefonoTutor)){
        return res.status(401).json({status: 401, mensaje: "Todos los campos son obligatorios"});
    }

    //genara fecha
    newPatiente.fechaInscripcion = new Date().toISOString().slice(0, 19).replace('T', ' ');


    const result = await patienteModel.addPatiente(newPatiente);
    res.status(200).json({status:200, data: result, input: newPatiente, mensaje:"Agragado"});
}



module.exports = addPatiente
