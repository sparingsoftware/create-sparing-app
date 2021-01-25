"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const create_project_dir_1 = __importDefault(require("./create-project-dir"));
const shelljs_1 = __importDefault(require("shelljs"));
const fs_1 = __importDefault(require("fs"));
const utils_1 = require("../utils");
jest.mock('../utils');
jest.mock('fs');
jest.mock('shelljs');
describe('create-project-dir module', () => {
    const examplePath = 'example/path';
    const existsSyncMock = fs_1.default.existsSync;
    it('creates directory if it is not exist', () => {
        existsSyncMock.mockReturnValue(false);
        create_project_dir_1.default(examplePath);
        expect(fs_1.default.mkdirSync).toBeCalledWith(examplePath);
    });
    it('shows error if directory exists', () => {
        existsSyncMock.mockReturnValue(true);
        create_project_dir_1.default(examplePath);
        expect(utils_1.log.error).toBeCalledWith(`Folder ${examplePath} exists. Delete or use another name.`);
    });
    it('exits if directory exists', () => {
        existsSyncMock.mockReturnValue(true);
        create_project_dir_1.default(examplePath);
        expect(shelljs_1.default.exit).toBeCalledWith(1);
    });
});
