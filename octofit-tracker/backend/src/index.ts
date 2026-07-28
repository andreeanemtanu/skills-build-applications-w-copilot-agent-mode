import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import './config/database';
import apiRoutes from './routes/api';

dotenv.config();

const app = express();
const port = Number(process.env.PORT || 8000);

app.use(cors());
app.use(express.json());
app.use('/api', apiRoutes);

app.listen(port, '0.0.0.0', () => {
  console.log(`OctoFit backend listening on port ${port}`);
});
