"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.exec = exports.log = void 0;
const shelljs_1 = __importDefault(require("shelljs"));
const chalk_1 = __importDefault(require("chalk"));
exports.log = {
    error(msg) {
        console.log(chalk_1.default.red(msg));
    },
    info(msg) {
        console.log(chalk_1.default.whiteBright(msg));
    },
    black(msg) {
        console.log(chalk_1.default.bgRgb(0, 0, 0).whiteBright(msg));
    }
};
function exec(command) {
    return shelljs_1.default.exec(command, { silent: true }).stdout;
}
exports.exec = exec;
