"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const shelljs_1 = __importDefault(require("shelljs"));
const utils_1 = require("../utils");
function checkNodeVersion() {
    if (!utils_1.exec('node -v').startsWith('v14.')) {
        utils_1.log.error('Sorry, Sparing CLI requires node version 14');
        shelljs_1.default.exit(1);
        return false;
    }
    return true;
}
exports.default = checkNodeVersion;
