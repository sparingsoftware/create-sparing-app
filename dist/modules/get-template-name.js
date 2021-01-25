"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const inquirer_1 = __importDefault(require("inquirer"));
const types_1 = require("../types");
async function getTemplateName(inquirer = inquirer_1.default) {
    const templateNameQuestion = {
        name: 'templateName',
        type: 'list',
        message: 'What kind of app do You need?',
        choices: [
            {
                name: 'Nuxt app (nuxt-sparing-center)',
                value: types_1.TemplateName.Nuxt
            },
            {
                name: 'Static site (WIP)',
                value: types_1.TemplateName.Simple
            }
        ]
    };
    const answers = await inquirer.prompt([
        templateNameQuestion
    ]);
    return answers.templateName;
}
exports.default = getTemplateName;
