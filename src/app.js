require('dotenv').config();
require("./database/connection");
const PORT = process.env.PORT || 3000;
const studentRouters = require("./routers/students-router");
const express = require('express');
const app = express();

app.use(express.json());
app.use(studentRouters);

app.listen(PORT, () => {
    console.log(`✅ Listening at port ${PORT}`);
});