// Use Express
const express = require("express");
const bodyParser = require('body-parser');
const app = express();
const routes = require('./api/routes/routes');

//db
const dbConnect = require('./api/db/dbconection');

const distDir = __dirname + "/dist/bootcamp/";
const pathToIndex = distDir + '/index.html'
app.use(express.static(distDir));
app.use(bodyParser.json());

app.use('/api', routes)

app.all('*', function (req, res) {
    res.status(200).sendFile(pathToIndex)
});

app.use((error, req, res) => {
    res.status(404).send(`Problem: ${error.message}`);
})

// Init the server
const server = app.listen(process.env.PORT || 8080, async () => {
    const port = server.address().port;
    await dbConnect();
    console.log(`App now running on port http://localhost:${port}`);
});