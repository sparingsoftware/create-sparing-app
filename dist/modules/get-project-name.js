"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const inquirer_1 = __importDefault(require("inquirer"));
const validate_npm_package_name_1 = __importDefault(require("validate-npm-package-name"));
async function getProjectName() {
    const projectNameQuestion = {
        name: 'projectName',
        type: 'input',
        message: 'Project name:',
        validate: (input) => validate_npm_package_name_1.default(input).validForNewPackages ||
            'Project name must be valid npm package name'
    };
    const answers = await inquirer_1.default.prompt([
        projectNameQuestion
    ]);
    return answers.projectName;
}
exports.default = getProjectName;
