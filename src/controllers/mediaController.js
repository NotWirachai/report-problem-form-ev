const { v4: uuidv4 } = require('uuid');
const MediaModel = require('../repositories/mediaModel');
const MediaDTO = require('../models/mediaDTO');

class MediaController {
    static async uploadMedia(req, res) {
        // console.log('files:', req.file);
        // console.log('body:', req.body);
        // res.send('upload test');
        try {
            const file = req.file;
            const { type, uploaded_by } = req.body;
            const id = uuidv4();
            const url = `/uploads/${file.filename}`;
            const mime_type = file.mimetype;
            const size = file.size;
            const width = req.body.width || null;
            const height = req.body.height || null;
            const duration = req.body.duration || null;
            console.log('file.filename', file.filename)
            const mediaData = {
                id,
                filename: file.filename,
                original_name: file.originalname,
                url,
                type,
                mime_type,
                size,
                width,
                height,
                duration,
                uploaded_by
            };

            await MediaModel.create(mediaData);
            res.status(201).json(new MediaDTO(mediaData));
        } catch (err) {
            console.log('err', err)
            res.status(500).json({ error: err.message });
        }
    }

    static async getAllMedia(req, res) {
        try {
            const media = await MediaModel.findAll();
            res.json(media.map(m => new MediaDTO(m)));
        } catch (err) {
            res.status(500).json({ error: err.message });
        }
    }

    static async getMediaById(req, res) {
        try {
            const media = await MediaModel.findById(req.params.id);
            if (!media) return res.status(404).json({ error: 'Not found' });
            res.json(new MediaDTO(media));
        } catch (err) {
            res.status(500).json({ error: err.message });
        }
    }
}

module.exports = MediaController;