import { DataTypes, Model } from 'sequelize';
import { sequelize } from '../config/dataBase';

export class VehicleModel extends Model {}

VehicleModel.init({
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  placa: {
    type: DataTypes.STRING(10),
    allowNull: false,
    unique: true,
  },
  modelo: {
    type: DataTypes.STRING(50),
    allowNull: true,
  },
  cor: {
    type: DataTypes.STRING(30),
    allowNull: true,
  },
  customizacoes: {
    type: DataTypes.TEXT,
    allowNull: true,
  },
  proprietario: {
    type: DataTypes.STRING(50),
    allowNull: true,
  },
}, {
  sequelize,
  tableName: 'vehicle',
  modelName: 'VehicleModel',
  timestamps: false, 
});
