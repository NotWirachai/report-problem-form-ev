const db = require('../../config/database');

const Report = {
  async getAll() {
    const [rows] = await db.query(
      `SELECT r.id, s.name AS station, i.name AS issue_type, r.description, r.image_url, r.status, r.created_at
       FROM reports r
       JOIN stations s ON r.station_id = s.id
       JOIN issue_types i ON r.issue_type_id = i.id
       ORDER BY r.created_at DESC`
    );
    return rows;
  },

  async create({ station_id, issue_type_id, description, image_url }) {
    const [result] = await db.query(
      `INSERT INTO reports (station_id, issue_type_id, description, image_url)
       VALUES (?, ?, ?, ?)`,
      [station_id, issue_type_id, description, image_url]
    );
    return result.insertId;
  },
};

module.exports = Report;