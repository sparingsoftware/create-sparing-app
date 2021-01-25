"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const shelljs_1 = __importDefault(require("shelljs"));
const utils_1 = require("../utils");
function installDependencies(projectPath) {
    utils_1.log.info('\nInstalling dependencies, it may take a while...');
    shelljs_1.default.cd(projectPath);
    utils_1.exec('npm install');
}
exports.default = installDependencies;
