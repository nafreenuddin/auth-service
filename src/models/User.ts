import { DataTypes, Model } from 'sequelize';
import sequelize from '../config/dbConfig';

class User extends Model {
  public id!: number;
  public username!: string;
  public email!: string;
  public mobile!: string;
  public password!: string;
}


User.init({
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  username: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  mobile: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
}, {
  sequelize,
  tableName: 'mpusers', // Updated table name
  timestamps: true,
});

export default User;
