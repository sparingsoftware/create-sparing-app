"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const inquirer = __importStar(require("inquirer"));
const types_1 = require("../types");
async function getTemplateName() {
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
