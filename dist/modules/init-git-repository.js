"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const shelljs_1 = __importDefault(require("shelljs"));
const utils_1 = require("../utils");
function initGitRepository(projectPath) {
    utils_1.log.info('Initializing a new git repository...');
    shelljs_1.default.cd(projectPath);
    utils_1.exec('git init');
}
exports.default = initGitRepository;
