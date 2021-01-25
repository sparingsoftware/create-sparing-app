"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const shelljs_1 = __importDefault(require("shelljs"));
const utils_1 = require("../utils");
function installDependencies(projectPath, log = utils_1.log, shell = shelljs_1.default, exec = utils_1.exec) {
    log.info('\nInstalling dependencies, it may take a while...');
    shell.cd(projectPath);
    exec('npm install');
}
exports.default = installDependencies;
