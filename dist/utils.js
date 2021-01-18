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
exports.showFinalInfo = exports.renderLogo = exports.installDependencies = exports.checkNodeVersion = exports.log = void 0;
const shell = __importStar(require("shelljs"));
const chalk_1 = __importDefault(require("chalk"));
exports.log = {
    error(msg) {
        console.log(chalk_1.default.red(msg));
    },
    info(msg) {
        console.log(chalk_1.default.whiteBright(msg));
    },
    black(msg) {
        console.log(chalk_1.default.bgRgb(0, 0, 0).whiteBright(msg));
    }
};
function exec(command) {
    return shell.exec(command, { silent: true }).stdout;
}
function checkNodeVersion() {
    if (!shell.which('node')) {
        shell.echo('Sorry, Sparing CLI requires node');
        shell.exit(1);
    }
    if (!exec('node -v').startsWith('v14.')) {
        shell.echo('Sorry, Sparing CLI requires node version 14');
        shell.exit(1);
    }
}
exports.checkNodeVersion = checkNodeVersion;
function installDependencies({ dir }) {
    exports.log.info('\nInstalling dependencies (it may take a while...)');
    shell.cd(dir);
    exec('npm i');
}
exports.installDependencies = installDependencies;
function renderLogo() {
    exports.log.black('\n           ');
    exports.log.black('   S P X   ');
    exports.log.black('   A R I   ');
    exports.log.black('   X N G   ');
    exports.log.black('           \n');
}
exports.renderLogo = renderLogo;
function showFinalInfo() {
    exports.log.info('Done');
}
exports.showFinalInfo = showFinalInfo;
