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
const nuxt_1 = require("../projects/nuxt");
const types_1 = require("../types");
async function getEjsConfig(projectName, templateName) {
    let ejsConfig;
    switch (templateName) {
        /**
         * Nuxt
         */
        case types_1.TemplateName.Nuxt:
            const nuxt = await inquirer.prompt(nuxt_1.nuxtQuestion);
            ejsConfig = {
                projectName: projectName,
                programmingLanguage: nuxt.programmingLanguage,
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
