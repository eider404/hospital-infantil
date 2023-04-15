const patienteModel = require('../models/patienteModel')

const getAllPatients = async(req, res) => {
    
    const rows = await patienteModel.getAll();
    //res.status(200).json({status:200, data: rows});
    res.render('index', { datos: rows });
}



module.exports = getAllPatients
