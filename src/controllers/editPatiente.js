const patienteModel = require("../models/patienteModel")

const editPatiente = async(req, res) => {
    const editPatiente = req.body

    if(!editPatiente.id){
        return res.status(401).json({status: 401, mensaje: "id no ingresado"});
    }

    const result = await patienteModel.update(editPatiente.id,editPatiente);

    if(result.affectedRows > 0){
        res.status(200).json({status:200, data: result, input: editPatiente, mensaje:"Editado"});
    }else{
        res.status(401).json({status:401, data: result, input: editPatiente, mensaje:"El paciente no existe"});
    }
}



module.exports = editPatiente
