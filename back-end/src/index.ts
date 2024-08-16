import express from 'express';
import { sequelize } from './config/dataBase'; 
import vehicleRoutes from './routes/vehicleRoutes';
import * as dotenv from 'dotenv';

dotenv.config();

const app = express();
const port = process.env.PORT || 3000; 

app.use(express.json());
app.use('/vehicles', vehicleRoutes);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});


sequelize.sync({ alter: true }) 
  .then(() => {
    console.log('Database synchronized');
  })
  .catch((error: unknown) => {
    console.error('Error synchronizing database:', error);
  });
