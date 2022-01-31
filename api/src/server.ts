import express from 'express';
import { join, resolve } from 'path';
import routers from './routes/index';
import connectDB from './db';
import bodyParser from 'body-parser';

const distDir = resolve(join('..', '..', 'dist', 'bootcamp'));
const pathToIndex = join(distDir, 'index.html');

const port = process.env['PORT'] || 8080;

const app = express();

app.use(express.static(distDir));
app.use(bodyParser.json())
app.use('/api', routers);
app.all('*', (req, res) => {
    res.status(200).sendFile(resolve(pathToIndex));
});

//init the server
const server = app.listen(port, async () => {
    await connectDB();
    console.log(`App now running on port http://localhost:${port}`);
});
