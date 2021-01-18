#!/usr/bin/env node
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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const inquirer = __importStar(require("inquirer"));
const create_project_1 = __importDefault(require("./create-project"));
const main_questions_1 = __importDefault(require("./main-questions"));
const nuxt_questions_1 = __importDefault(require("./projects/nuxt/nuxt-questions"));
const utils_1 = require("./utils");
utils_1.checkNodeVersion();
utils_1.renderLogo();
inquirer.prompt(main_questions_1.default).then(async (mainAnswers) => {
    let ejsConfig;
    // if (mainAnswers.template === ProjectTemplateName.Nuxt) {
    const projectAnswers = await inquirer.prompt(nuxt_questions_1.default);
    ejsConfig = {
        projectName: mainAnswers.projectName,
        programmingLanguage: projectAnswers.programmingLanguage,
        nuxtSparingCenter: {
            axiosGenerateCache: projectAnswers.axiosGenerateCache,
            axiosI18nHeader: projectAnswers.axiosI18nHeader,
            axiosRenameKeys: projectAnswers.axiosRenameKeys,
            fixBrowserStyles: projectAnswers.fixBrowserStyles,
            plugins: projectAnswers.plugins,
            sassUtilsCollection: projectAnswers.sassUtilsCollection
        }
    };
    // }
    create_project_1.default({
        projectName: mainAnswers.projectName,
        templateName: mainAnswers.template,
        ejsConfig
    });
    utils_1.installDependencies({
        dir: mainAnswers.projectName
    });
    utils_1.showFinalInfo();
});
