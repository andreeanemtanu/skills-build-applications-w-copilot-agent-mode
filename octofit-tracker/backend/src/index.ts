import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import './config/database';
import apiRoutes from './routes/api';
import { getApiBaseUrl } from './config/baseUrl';

dotenv.config();

const app = express();
const port = Number(process.env.PORT || 8000);
const apiBaseUrl = getApiBaseUrl();

app.use(cors());
app.use(express.json());
app.use('/api', apiRoutes);

app.get('/api/base-url', (_req, res) => {
  res.json({ baseUrl: apiBaseUrl });
});

app.listen(port, '0.0.0.0', () => {
  console.log(`OctoFit backend listening on port ${port}`);
  console.log(`API base URL: ${apiBaseUrl}`);
});
