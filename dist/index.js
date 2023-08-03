"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var app_1 = require("./src/app");
try {
    // Initialize Application
    app_1.Application.init();
}
catch (err) {
    // Handle application errors with friendly messages
    console.error(err.message);
}
