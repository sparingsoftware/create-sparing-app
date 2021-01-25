"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const init_git_repository_1 = __importDefault(require("./init-git-repository"));
describe('init-git repository module', () => {
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
    it('logs info about initalization', () => {
        init_git_repository_1.default(testProjectPath, log, shell, exec);
        expect(log.info).toBeCalled();
    });
    it('changes dir fot git initialization', () => {
        init_git_repository_1.default(testProjectPath, log, shell, exec);
        expect(shell.cd).toBeCalledWith(testProjectPath);
    });
    it('initializes new git repository', () => {
        init_git_repository_1.default(testProjectPath, log, shell, exec);
        expect(exec).toBeCalledWith('git init');
    });
});
