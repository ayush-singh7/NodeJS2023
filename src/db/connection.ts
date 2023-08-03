import { DataTypes, Sequelize } from 'sequelize';
import { serverLogger } from '../utility/serverLogger';

const sequelize = new Sequelize('postgres', 'postgres', 'ayush123', {
  host: 'localhost',
  dialect: 'postgres'
});

async function connectDB() {
  try {

    await sequelize.authenticate();
    serverLogger.info("✅ Connection has been established successfully.");
    await sequelize.sync();
    
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
}

export { connectDB, sequelize,  DataTypes };
