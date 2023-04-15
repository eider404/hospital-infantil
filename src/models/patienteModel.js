const db = require('../db');

exports.getAll = async () => {
  const [rows, fields] = await db.query('SELECT * FROM Hospital INNER JOIN Paciente ON Hospital.idHospital = Paciente.ciudadOrigen_fk INNER JOIN Ciudad ON Paciente.ciudadOrigen_fk = Ciudad.idCiudad');
  return rows;
};


exports.addPatiente = async (newPatiente) => {
  const [result] = await db.query('INSERT INTO Paciente set ?', [newPatiente]);
  return result;
};


exports.update = async (id,editPatiente) => {
  const [result] = await db.query('UPDATE Paciente SET ? WHERE id = ?', [editPatiente, id]);
  return result//result.affectedRows > 0;
};


exports.delete = async (id) => {
  const [result] = await db.query('DELETE FROM Paciente WHERE id = ?', [id]);
  return result;
};
