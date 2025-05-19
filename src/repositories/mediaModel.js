const pool = require('../../config/database');

class MediaModel {
  static async create(mediaData) {
    const [result] = await pool.query(
      `INSERT INTO media (id, filename, original_name, url, type, mime_type, size, width, height, duration, uploaded_by)
       VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
      [
        mediaData.id,
        mediaData.filename,
        mediaData.original_name,
        mediaData.url,
        mediaData.type,
        mediaData.mime_type,
        mediaData.size,
        mediaData.width,
        mediaData.height,
        mediaData.duration,
        mediaData.uploaded_by
      ]
    );
    return result;
  }

  static async findAll() {
    const [rows] = await pool.query('SELECT * FROM media');
    return rows;
  }

  static async findById(id) {
    const [rows] = await pool.query('SELECT * FROM media WHERE id = ?', [id]);
    return rows[0];
  }
}

module.exports = MediaModel;