"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const check_node_1 = __importDefault(require("./check-node"));
const shelljs_1 = __importDefault(require("shelljs"));
const utils_1 = require("../utils");
jest.mock('../utils');
jest.mock('shelljs');
const execMock = utils_1.exec;
describe('check-node module', () => {
    it('checks node version', () => {
        execMock.mockReturnValue('v14.12.10');
        check_node_1.default();
        expect(execMock).toBeCalledWith('node -v');
    });
    it('does nothing if node version is 14.x.x', () => {
        execMock.mockReturnValue('v14.12.10');
        expect(check_node_1.default()).toBeTruthy();
    });
    it('shows error if node version is not 14.x.x', () => {
        execMock.mockReturnValue('v6.12.10');
        check_node_1.default();
        expect(utils_1.log.error).toBeCalled();
    });
    it('exits if node version is not 14.x.x', () => {
        execMock.mockReturnValue('v144.12.10');
        check_node_1.default();
        expect(shelljs_1.default.exit).toBeCalledWith(1);
    });
});
