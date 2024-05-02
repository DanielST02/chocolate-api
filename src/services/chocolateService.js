"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateMadridWeatherData = exports.generateParisWeatherData = exports.generateDublinWeatherData = exports.generateLondonWeatherData = void 0;
const faker_1 = require("@faker-js/faker");
const generateLondonWeatherData = () => {
    // Generate random weather data
    const generatedWeatherData = {
        temperature: faker_1.faker.number.int({ min: -15, max: 30 }),
        Day1: faker_1.faker.number.int({ min: -15, max: 30 }),
        Day2: faker_1.faker.number.int({ min: -15, max: 30 }),
        Day3: faker_1.faker.number.int({ min: -15, max: 30 }),
        humidity: faker_1.faker.number.int({ min: 79, max: 86 }),
        wind: faker_1.faker.number.int({ min: 2, max: 78 }),
        rain: faker_1.faker.number.int({ min: 65, max: 75 }),
    };
    // Return weather data
    return generatedWeatherData;
};
exports.generateLondonWeatherData = generateLondonWeatherData;
const generateDublinWeatherData = () => {
    // Generate random weather data
    const generatedWeatherData = {
        temperature: faker_1.faker.number.int({ min: -15, max: 30 }),
        humidity: faker_1.faker.number.int({ min: 79, max: 86 }),
        wind: faker_1.faker.number.int({ min: 2, max: 78 }),
        rain: faker_1.faker.number.int({ min: 65, max: 75 }),
    };
    // Return weather data
    return generatedWeatherData;
};
exports.generateDublinWeatherData = generateDublinWeatherData;
const generateParisWeatherData = () => {
    // Generate random weather data
    const generatedWeatherData = {
        temperature: faker_1.faker.number.int({ min: -15, max: 30 }),
        humidity: faker_1.faker.number.int({ min: 79, max: 86 }),
        wind: faker_1.faker.number.int({ min: 2, max: 78 }),
        rain: faker_1.faker.number.int({ min: 65, max: 75 }),
    };
    // Return weather data
    return generatedWeatherData;
};
exports.generateParisWeatherData = generateParisWeatherData;
const generateMadridWeatherData = () => {
    // Generate random weather data
    const generatedWeatherData = {
        temperature: faker_1.faker.number.int({ min: -15, max: 30 }),
        humidity: faker_1.faker.number.int({ min: 79, max: 86 }),
        wind: faker_1.faker.number.int({ min: 2, max: 78 }),
        rain: faker_1.faker.number.int({ min: 65, max: 75 }),
    };
    // Return weather data
    return generatedWeatherData;
};
exports.generateMadridWeatherData = generateMadridWeatherData;
