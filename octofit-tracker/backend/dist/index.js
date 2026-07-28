"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const cors_1 = __importDefault(require("cors"));
require("./config/database");
const api_1 = __importDefault(require("./routes/api"));
const baseUrl_1 = require("./config/baseUrl");
dotenv_1.default.config();
const app = (0, express_1.default)();
const port = Number(process.env.PORT || 8000);
const apiBaseUrl = (0, baseUrl_1.getApiBaseUrl)();
app.use((0, cors_1.default)());
app.use(express_1.default.json());
app.use('/api', api_1.default);
app.get('/api/base-url', (_req, res) => {
    res.json({ baseUrl: apiBaseUrl });
});
app.listen(port, '0.0.0.0', () => {
    console.log(`OctoFit backend listening on port ${port}`);
    console.log(`API base URL: ${apiBaseUrl}`);
});
