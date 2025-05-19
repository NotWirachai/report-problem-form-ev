class ReportDTO {
    constructor({ station_id, issue_type_id, description, image_url }) {
      this.station_id = station_id;
      this.issue_type_id = issue_type_id;
      this.description = description || '';
      this.image_url = image_url || null;
    }
  }
  
  module.exports = ReportDTO;