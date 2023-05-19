import express from 'express';
import dotenv from 'dotenv';
import router from './router.ts/router';
import path = require('path');
import {sequelize} from './database/pg';

dotenv.config();

const server = express();

sequelize.authenticate();
server.use(express.urlencoded({extended: true}));
server.use('/api', router);


server.listen(process.env.PORT);

