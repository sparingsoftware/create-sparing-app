"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.nuxtQuestion = void 0;
exports.nuxtQuestion = [
    {
        name: 'fixBrowserStyles',
        type: 'list',
        message: 'Overwrite user agent styles:',
        choices: [
            {
                name: 'reset.css',
                value: 'reset'
            },
            {
                name: 'normalize.css',
                value: 'normalize'
            }
        ]
    },
    {
        name: 'sassUtilsCollection',
        type: 'confirm',
        message: 'Import sass-utils-collection?',
        default: true
    },
    {
        name: 'plugins',
        type: 'checkbox',
        message: 'Add sparing plugins:',
        choices: ['vue-on-resize', 'v-clamp', '100vh']
    },
    {
        name: 'axiosI18nHeader',
        type: 'confirm',
        message: '(nuxt i18n) Add "Accept-Language" header to every axios request?',
        default: false
    }
    // TODO Add form-builder
];
