require('dotenv').config();
const app = require('./app');

const PORT = 3000;

const handleListening = () => {
  console.log(`bff-playground listening on port ${PORT}`);
};

app.listen(PORT, handleListening);
