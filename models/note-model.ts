// import { sequelize, DataTypes } from 

import { DataTypes, sequelize } from "../database/db";


const UserModel = sequelize.define("users", {
    id: {
         type:DataTypes.INTEGER,    
         primaryKey: true
        },
        username: DataTypes.TEXT,
        email: DataTypes.TEXT,
        password: DataTypes.TEXT,
        room_id: DataTypes.TEXT,
      }, {
        timestamps: false
});

export default UserModel;