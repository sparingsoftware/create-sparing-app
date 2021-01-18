"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ejsConfig_1 = require("./projects/ejsConfig");
const mainQuestions = [
    {
        name: 'template',
        type: 'list',
        message: 'What kind of app do You need?',
        choices: [
            {
                name: 'Nuxt app (nuxt-sparing-center)',
                value: ejsConfig_1.ProjectTemplateName.Nuxt
            },
            {
                name: 'Static site (WIP)',
                value: 'static'
            }
            // TODO webpack 5? gulp?
        ]
    },
    {
        name: 'projectName',
        type: 'input',
        message: 'Project name:',
        validate: (input) => /^([A-Za-z\-\_\d])+$/.test(input) ||
            'Project name may only include letters, numbers, underscores and hashes.'
    }
];
exports.default = mainQuestions;
