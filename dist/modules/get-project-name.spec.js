"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const get_project_name_1 = __importDefault(require("./get-project-name"));
describe('get-project-name module', () => {
    it('returns project name', async (done) => {
        const inquirer = {
            async prompt(_) {
                return {
                    projectName: 'test'
                };
            }
        };
        const name = await get_project_name_1.default(inquirer);
        expect(name).toBe('test');
        done();
    });
    it('validates project name', async (done) => {
        const inquirer = {
            async prompt(questions) {
                const question = questions[0];
                if (question.validate) {
                    expect(question.validate('valid-name')).toBe(true);
                    expect(question.validate('valid_1name')).toBe(true);
                    expect(question.validate('`invalidname')).not.toBe(true);
                }
                expect(question.name).toBe('projectName');
                return {};
            }
        };
        await get_project_name_1.default(inquirer);
        done();
    });
});
