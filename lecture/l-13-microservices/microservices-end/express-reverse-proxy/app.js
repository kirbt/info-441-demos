import express from 'express';
import path from 'path';
import cookieParser from 'cookie-parser';
import logger from 'morgan';
import {createProxyMiddleware} from 'http-proxy-middleware'

import usersRouter from './routes/users.js';

import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
//app.use(express.static(path.join(__dirname, 'public')));

app.use('/users', usersRouter);

app.get('/api/double', (req, res) => {
    let num = req.query.num
    let doubled = num * 2
    res.send("" + doubled)
})

app.get('/api/square', (req, res) => {
    let num = req.query.num
    let squared = num * num
    res.send("" + squared)
})

// forward any other requests to the react server on port 4000
const reactProxyMiddleware = createProxyMiddleware({
    target: 'http://localhost:4000',
    pathRewrite: (path, req) => req.baseUrl,
    changeOrigin: true
})

app.use('/*', reactProxyMiddleware)

export default app;
