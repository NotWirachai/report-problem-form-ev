const express = require('express');
const path = require('path');
const mediaRoutes = require('./src/routes/mediaRoutes');
const reportRoutes = require('./src/routes/reportRoutes');

const app = express();
app.use(express.json());

app.use(mediaRoutes);
app.use('/api/reports', reportRoutes);
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));


const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});