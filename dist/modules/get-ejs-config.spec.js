"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const get_ejs_config_1 = __importDefault(require("./get-ejs-config"));
describe('get-ejs-config module', () => {
    it('return Nuxt config', async (done) => {
        const projectName = 'test';
        const programmingLanguage = 'test';
        const sassUtilsCollection = 'test';
        const axiosGenerateCache = 'test';
        const fixBrowserStyles = 'test';
        const axiosRenameKeys = 'test';
        const axiosI18nHeader = 'test';
        const plugins = 'test';
        const inquirer = {
            async prompt() {
                return {
                    programmingLanguage,
                    fixBrowserStyles,
                    sassUtilsCollection,
                    plugins,
                    axiosRenameKeys,
                    axiosI18nHeader,
                    axiosGenerateCache
                };
            }
        };
        const ejsConfig = await get_ejs_config_1.default(projectName, 'nuxt', inquirer);
        expect(ejsConfig).toMatchObject({
            projectName,
            programmingLanguage,
            nuxtSparingCenter: {
                fixBrowserStyles,
                sassUtilsCollection,
                plugins,
                axiosRenameKeys,
                axiosI18nHeader,
                axiosGenerateCache
            }
        });
        done();
    });
    // TODO
    it('returns Simple config', async (done) => {
        const ejsConfig = await get_ejs_config_1.default('test-project-name', 'simple');
        expect(ejsConfig).toBe(null);
        done();
    });
});
