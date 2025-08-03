import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import bodyParser from 'body-parser';
import assistant from './src/assistant.js';

dotenv.config();
const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(express.static('public'));

app.post('/ask', assistant);

app.listen(3000, () => {
    console.log('🟢 Server running at http://localhost:3000');
});
