"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = __importDefault(require("sequelize"));
const connection_1 = __importDefault(require("../db/connection"));
const Usuario = connection_1.default.define('Usuario', {
    nombre: {
        type: sequelize_1.default.STRING
    },
    email: {
        type: sequelize_1.default.STRING
    },
    estado: {
        type: sequelize_1.default.BOOLEAN
    }
});
exports.default = Usuario;
//# sourceMappingURL=usuario.js.map