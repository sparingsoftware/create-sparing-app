"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = __importDefault(require("fs"));
const shelljs_1 = __importDefault(require("shelljs"));
const utils_1 = require("../utils");
function createProjectDir(projectPath) {
    if (fs_1.default.existsSync(projectPath)) {
        utils_1.log.error(`Folder ${projectPath} exists. Delete or use another name.`);
        shelljs_1.default.exit(1);
    }
    fs_1.default.mkdirSync(projectPath);
}
exports.default = createProjectDir;
