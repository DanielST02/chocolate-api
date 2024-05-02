"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const chocolateController_js_1 = require("../controllers/chocolateController.js");
const validators_js_1 = require("../middleware/validators.js");
// We will create a router object
const router = express_1.default.Router();
// We will create a route for the weather data based on the city name
router.get("/:city", validators_js_1.validateCityName, chocolateController_js_1.getWeatherData);
// We will export the router
exports.default = router;
