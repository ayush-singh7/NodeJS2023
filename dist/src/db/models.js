"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductImageModel = exports.AddressModel = exports.ProductModel = exports.UserModel = exports.SessionModel = void 0;
var connection_1 = require("./connection");
exports.SessionModel = connection_1.sequelize.define("olx_sessions", {
    session_id: {
        type: connection_1.DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    user_id: {
        type: connection_1.DataTypes.INTEGER
    }
});
exports.UserModel = connection_1.sequelize.define("olx_users", {
    user_id: {
        type: connection_1.DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    first_name: {
        type: connection_1.DataTypes.STRING,
        defaultValue: null
    },
    last_name: {
        type: connection_1.DataTypes.STRING,
        defaultValue: null
    },
    email: {
        type: connection_1.DataTypes.STRING,
        unique: true,
        defaultValue: null
    },
    password: {
        type: connection_1.DataTypes.STRING,
        defaultValue: null
    },
    status: {
        type: connection_1.DataTypes.BOOLEAN,
        defaultValue: true
    },
    mobile_number: {
        type: connection_1.DataTypes.STRING,
        defaultValue: null
    },
    dob: {
        type: connection_1.DataTypes.DATE,
        defaultValue: null
    },
    gender: {
        type: connection_1.DataTypes.CHAR,
        defaultValue: null
    },
    profile_pic: {
        type: connection_1.DataTypes.BLOB,
        defaultValue: null
    }
});
exports.ProductModel = connection_1.sequelize.define("olx_products", {
    product_id: {
        type: connection_1.DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    user_id: {
        type: connection_1.DataTypes.INTEGER
    },
    product_name: {
        type: connection_1.DataTypes.STRING
    },
    description: {
        type: connection_1.DataTypes.STRING
    },
    base_price: {
        type: connection_1.DataTypes.INTEGER
    },
    current_price: {
        type: connection_1.DataTypes.INTEGER
    },
    bidder_id: {
        type: connection_1.DataTypes.INTEGER,
        defaultValue: null
    },
    category_id: {
        type: connection_1.DataTypes.STRING
    },
    subcategory_id: {
        type: connection_1.DataTypes.STRING,
    },
    address_id: {
        type: connection_1.DataTypes.INTEGER
    }
});
exports.AddressModel = connection_1.sequelize.define("olx_address", {
    address_id: {
        type: connection_1.DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    user_id: {
        type: connection_1.DataTypes.INTEGER
    },
    house_number: {
        type: connection_1.DataTypes.INTEGER
    },
    street_number: {
        type: connection_1.DataTypes.INTEGER
    },
    area: {
        type: connection_1.DataTypes.STRING
    },
    landmark: {
        type: connection_1.DataTypes.STRING
    },
    city: {
        type: connection_1.DataTypes.STRING
    },
    state: {
        type: connection_1.DataTypes.STRING
    },
    zipcode: {
        type: connection_1.DataTypes.INTEGER
    },
    address_type: {
        type: connection_1.DataTypes.STRING,
        defaultValue: true
    },
});
exports.ProductImageModel = connection_1.sequelize.define("olx_product_image", {
    image_id: {
        type: connection_1.DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    image_data: {
        type: connection_1.DataTypes.BLOB('long')
    },
    product_id: {
        type: connection_1.DataTypes.INTEGER
    }
});
