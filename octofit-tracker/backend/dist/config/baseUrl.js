"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getApiBaseUrl = getApiBaseUrl;
const codespaceName = process.env.CODESPACE_NAME;
function getApiBaseUrl() {
    if (codespaceName) {
        return `https://${codespaceName}-8000.app.github.dev`;
    }
    return 'http://localhost:8000';
}
