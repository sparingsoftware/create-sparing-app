"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const inquirer_1 = __importDefault(require("inquirer"));
const nuxt_1 = require("../projects/nuxt");
const types_1 = require("../types");
async function getEjsConfig(projectName, templateName) {
    let ejsConfig;
    switch (templateName) {
        /**
         * Nuxt
         */
        case types_1.TemplateName.Nuxt:
            const nuxt = await inquirer_1.default.prompt(nuxt_1.nuxtQuestion);
            ejsConfig = {
                projectName: projectName,
                nuxtSparingCenter: {
                    axiosGenerateCache: nuxt.axiosGenerateCache,
                    axiosI18nHeader: nuxt.axiosI18nHeader,
                    axiosRenameKeys: nuxt.axiosRenameKeys,
                    fixBrowserStyles: nuxt.fixBrowserStyles,
                    plugins: nuxt.plugins,
                    sassUtilsCollection: nuxt.sassUtilsCollection
                }
            };
            break;
        /**
         * Simple html/css/js project
         */
        case types_1.TemplateName.Simple:
            ejsConfig = null; // TODO
    }
    return ejsConfig;
}
exports.default = getEjsConfig;
