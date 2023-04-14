const patienteModel = require('../models/patienteModel')

const deletePatiente = async(req, res) => {
    const patiente = req.params;
    
    if(!patiente.id){
        return res.status(401).json({status: 401, mensaje: "id no ingresado"});
    }

    const result = await patienteModel.delete(patiente.id);
    
    if(result.affectedRows > 0){
        res.status(200).json({status:200, data: result, input: patiente.id, mensaje:"Eliminado"});
    }else{
        res.status(401).json({status:401, data: result, input: patiente.id, mensaje:"El paciente no existe"});
    }
    
}



module.exports = deletePatiente
