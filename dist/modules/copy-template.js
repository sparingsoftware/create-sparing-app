"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = __importDefault(require("fs"));
const ejs_1 = __importDefault(require("ejs"));
const path_1 = __importDefault(require("path"));
function copyTemplate(templatePath, projectPath, ejsConfig) {
    const filesToCreate = fs_1.default.readdirSync(templatePath);
    filesToCreate.forEach(file => {
        const origFilePath = path_1.default.join(templatePath, file);
        const stats = fs_1.default.statSync(origFilePath);
        if (stats.isFile()) {
            const fileRead = fs_1.default.readFileSync(origFilePath, 'utf8');
            const contents = ejsConfig ? ejs_1.default.render(fileRead, ejsConfig) : fileRead;
            const writePath = path_1.default.join(projectPath, file);
            fs_1.default.writeFileSync(writePath, contents, 'utf8');
        }
        if (stats.isDirectory()) {
            fs_1.default.mkdirSync(path_1.default.join(projectPath, file));
            copyTemplate(path_1.default.join(templatePath, file), path_1.default.join(projectPath, file), ejsConfig);
        }
    });
}
exports.default = copyTemplate;
