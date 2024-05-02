import { Request, Response } from "express";
import {
  generateDublinWeatherData,
  generateLondonWeatherData,
  generateParisWeatherData,
  generateMadridWeatherData,
} from "../services/chocolateService.js";
import { validationResult } from "express-validator";

/**
 * Gets the weather data for a city
 * @param req the request object
 * @param res the response object
 */
export const getWeatherData = async (req: Request, res: Response) => {
  // We will use the validationResult function to check if there are any validation errors
  const errors = validationResult(req);

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
    let finalWeatherData: WeatherData | undefined;

    // We will use an if statement to check which city was passed in
    if (city === "london") {
      console.log(generateLondonWeatherData());
      finalWeatherData = generateLondonWeatherData();
    } else if (city === "dublin") {
      finalWeatherData = generateDublinWeatherData();
    } else if (city === "paris") {
      finalWeatherData = generateParisWeatherData();
    } else if (city === "madrid") {
      finalWeatherData = generateMadridWeatherData();
    } else {
      // If the city is not london or dublin, we will throw an error
      res.status(404).send("City not found");
    }

    // Check if finalWeatherData is undefined (in case no city matches)
    if (finalWeatherData === undefined) {
        throw new Error("Weather data not generated");
    }

    // We will return the weather data as JSON
    res.status(200).json(finalWeatherData);
  } catch (error) {
    // If there is an error, we will log it and send a 500 status code
    console.error("Error in fetching weather data", error);
    res.status(500).send("Error in fetching weather data");
  }
};