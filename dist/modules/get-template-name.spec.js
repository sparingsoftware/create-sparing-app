"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const get_template_name_1 = __importDefault(require("./get-template-name"));
describe('get-template-name module', () => {
    it('has question with templates names', async (done) => {
        const inquirer = {
            async prompt(questions) {
                const question = questions[0];
                if (question) {
                    expect(question.name).toBe('templateName');
                    expect(question.type).toBe('list');
                    const chocies = question.choices.map(question => question.value);
                    expect(chocies.includes('nuxt')).toBeTruthy();
                    expect(chocies.includes('simple')).toBeTruthy();
                }
                return {};
            }
        };
        get_template_name_1.default(inquirer);
        done();
    });
    it('returns template name', async (done) => {
        const inquirer = {
            async prompt(_) {
                return {
                    templateName: 'test'
                };
            }
        };
        const name = await get_template_name_1.default(inquirer);
        expect(name).toBe('test');
        done();
    });
});
