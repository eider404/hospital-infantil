const patienteModel = require('../models/patienteModel')

const getPatiente = async(req, res) => {
    const id = req.query.id
    const rows = await patienteModel.getPatiente(id);
    res.status(200).json({status:200, data: rows});
}


module.exports = getPatiente
