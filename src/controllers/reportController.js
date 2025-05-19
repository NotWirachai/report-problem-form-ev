const Report = require('../repositories/reportModel');
const ReportDTO = require('../models/reportDTO');

exports.getReports = async (req, res) => {
  try {
    const reports = await Report.getAll();
    res.json(reports);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Failed to fetch reports' });
  }
};

exports.createReport = async (req, res) => {
  // console.log('Incoming data:', req.body);
  try {
    const { station_id, issue_type_id, description } = req.body;
    const image_url = req.file ? `/uploads/${req.file.filename}` : null;

    const dto = new ReportDTO({
      station_id: Number(station_id),
      issue_type_id: Number(issue_type_id),
      description,
      image_url,
    });
    const newId = await Report.create(dto);
    res.status(201).json({ message: 'Report created', id: newId });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Failed to create report' });
  }
};
