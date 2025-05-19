class MediaDTO {
    constructor(data) {
      this.id = data.id;
      this.filename = data.filename;
      this.original_name = data.original_name;
      this.url = data.url;
      this.type = data.type;
      this.mime_type = data.mime_type;
      this.size = data.size;
      this.width = data.width;
      this.height = data.height;
      this.duration = data.duration;
      this.uploaded_by = data.uploaded_by;
      this.created_at = data.created_at;
      this.updated_at = data.updated_at;
    }
  }
  
  module.exports = MediaDTO;