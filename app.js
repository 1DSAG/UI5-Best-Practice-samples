const express = require('express');
const cors = require('cors');
const app = express();
const port = 3000;

app.use(cors())
app.use(express.static("src"));

app.listen(port, () => console.log(`UI5 sandbox listening on port ${port}!`));
