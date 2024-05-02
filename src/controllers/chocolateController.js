"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getWeatherData = void 0;
const chocolateService_js_1 = require("../services/chocolateService.js");
const express_validator_1 = require("express-validator");
/**
 * Gets the weather data for a city
 * @param req the request object
 * @param res the response object
 */
const getWeatherData = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    // We will use the validationResult function to check if there are any validation errors
    const errors = (0, express_validator_1.validationResult)(req);
    // If there are validation errors, we will log them and send a 400 status code
    if (!errors.isEmpty()) {
        console.error("Validation error", errors.mapped());
        res.status(400).json({ errors: errors.array() });
        return;
    }
    // We will use a try catch block to catch any errors
    try {
        // Get the city param from the request
        const { city } = req.params;
        console.log(city);
        // We will create a variable with a type of WeatherData
        let finalWeatherData;
        // We will use an if statement to check which city was passed in
        if (city === "london") {
            console.log((0, chocolateService_js_1.generateLondonWeatherData)());
            finalWeatherData = (0, chocolateService_js_1.generateLondonWeatherData)();
        }
        else if (city === "dublin") {
            finalWeatherData = (0, chocolateService_js_1.generateDublinWeatherData)();
        }
        else if (city === "paris") {
            finalWeatherData = (0, chocolateService_js_1.generateParisWeatherData)();
        }
        else if (city === "madrid") {
            finalWeatherData = (0, chocolateService_js_1.generateMadridWeatherData)();
        }
        else {
            // If the city is not london or dublin, we will throw an error
            res.status(404).send("City not found");
        }
        // Check if finalWeatherData is undefined (in case no city matches)
        if (finalWeatherData === undefined) {
            throw new Error("Weather data not generated");
        }
        // We will return the weather data as JSON
        res.status(200).json(finalWeatherData);
    }
    catch (error) {
        // If there is an error, we will log it and send a 500 status code
        console.error("Error in fetching weather data", error);
        res.status(500).send("Error in fetching weather data");
    }
});
exports.getWeatherData = getWeatherData;
