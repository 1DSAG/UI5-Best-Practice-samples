const express = require("express");
const app = express();
const port = 3000;

app.use(express.static("src"));

app.listen(port, () => console.log(`UI5 sandbox listening on port ${port}!`));
