// Use Express
const express = require("express");
const app = express();
const routes = require('./routes/routes');

const distDir = __dirname + "/dist/bootcamp/";
const pathToIndex = distDir + '/index.html'
app.use(express.static(distDir));

app.use('/api', routes)

app.all('*', function (req, res) {
    res.status(200).sendFile(pathToIndex)
});

app.use((error, req, res) => {
    res.status(404).send(`Problem: ${error.message}`);
})

// Init the server
const server = app.listen(process.env.PORT || 8080, function () {
    const port = server.address().port;
    console.log(`App now running on port http://localhost:${port}`);
});