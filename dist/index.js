#!/usr/bin/env node
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const path_1 = __importDefault(require("path"));
const check_node_1 = __importDefault(require("./modules/check-node"));
const render_logo_1 = __importDefault(require("./modules/render-logo"));
const get_project_name_1 = __importDefault(require("./modules/get-project-name"));
const get_template_name_1 = __importDefault(require("./modules/get-template-name"));
const get_ejs_config_1 = __importDefault(require("./modules/get-ejs-config"));
const create_project_dir_1 = __importDefault(require("./modules/create-project-dir"));
const copy_template_1 = __importDefault(require("./modules/copy-template"));
const install_dependencies_1 = __importDefault(require("./modules/install-dependencies"));
const init_git_repository_1 = __importDefault(require("./modules/init-git-repository"));
const show_final_info_1 = __importDefault(require("./modules/show-final-info"));
async function main() {
    check_node_1.default();
    render_logo_1.default();
    const templateName = await get_template_name_1.default();
    const projectName = await get_project_name_1.default();
    const templatePath = path_1.default.join(__dirname, '../templates', templateName);
    const projectPath = path_1.default.join(process.cwd(), projectName);
    const ejsConfig = await get_ejs_config_1.default(projectName, templateName);
    create_project_dir_1.default(projectPath);
    copy_template_1.default(templatePath, projectPath, ejsConfig);
    install_dependencies_1.default(projectPath);
    init_git_repository_1.default(projectPath);
    show_final_info_1.default();
}
main();
