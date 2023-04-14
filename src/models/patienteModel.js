const db = require('../db');

exports.getAll = async () => {
  const [rows, fields] = await db.query('SELECT * FROM Paciente');
  return rows;
};


exports.addPatiente = async (newPatiente) => {
  const [result] = await db.query('INSERT INTO Paciente set ?', [newPatiente]);
  return result;
};


exports.update = async (id, updatedUser) => {
  const { name, email } = updatedUser;
  const [result] = await db.query('UPDATE users SET name = ?, email = ? WHERE id = ?', [name, email, id]);
  return result.affectedRows > 0;
};


exports.delete = async (id) => {
  const [result] = await db.query('DELETE FROM users WHERE id = ?', [id]);
  return result.affectedRows > 0;
};
