"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const animeController_1 = __importDefault(require("../controllers/animeController"));
class AnimeRoutes {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.get('/', animeController_1.default.list);
        this.router.get('/:id', animeController_1.default.getOne);
        this.router.post('/', animeController_1.default.create);
        this.router.delete('/:id', animeController_1.default.delete);
        this.router.put('/:id', animeController_1.default.update);
    }
}
const animeRoutes = new AnimeRoutes();
exports.default = animeRoutes.router;
