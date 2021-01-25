"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const install_dependencies_1 = __importDefault(require("./install-dependencies"));
describe('install-dependecies module', () => {
    const testProjectPath = '/project-path';
    let log;
    let shell;
    let exec;
    beforeEach(() => {
        log = {
            info: jest.fn()
        };
        shell = {
            cd: jest.fn()
        };
        exec = jest.fn();
    });
    it('logs info about dependencies installation', () => {
        install_dependencies_1.default(testProjectPath, log, shell, exec);
        expect(log.info).toBeCalled();
    });
    it('changes dir for dependecies installation', () => {
        install_dependencies_1.default(testProjectPath, log, shell, exec);
        expect(shell.cd).toBeCalledWith(testProjectPath);
    });
    it('installs dependencies', () => {
        install_dependencies_1.default(testProjectPath, log, shell, exec);
        expect(exec).toBeCalledWith('npm install');
    });
});
