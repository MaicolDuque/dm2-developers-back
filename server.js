require('dotenv').config();
const PORT = process.env.PORT || 3000
const app = require('./index');

app.listen(PORT, () => console.log(`Server runnig in port: ${PORT}`) )