import { Request, Response } from "express";
import {
  generateCadburyChocolateData,
  generateMarsChocolateData,
  generateGalaxyChocolateData,
  generateLindtChocolateData,
} from "../services/chocolateService.js";
import { validationResult } from "express-validator";

/**
 * Gets the chocolate data for a chocolate
 * @param req the request object
 * @param res the response object
 */
export const getChocolateData = async (req: Request, res: Response) => {
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
    // Get the chocolate param from the request
    const { chocolate } = req.params;
    console.log(chocolate);

    // We will create a variable with a type of ChocolateData
    let finalChocolateData: ChocolateData | undefined;

    // We will use an if statement to check which chocolate was passed in
    if (chocolate === "london") {
      console.log(generateCadburyChocolateData());
      finalChocolateData = generateCadburyChocolateData();
    } else if (chocolate === "mars") {
      finalChocolateData = generateMarsChocolateData();
    } else if (chocolate === "galaxy") {
      finalChocolateData = generateGalaxyChocolateData();
    } else if (chocolate === "lindt") {
      finalChocolateData = generateLindtChocolateData();
    } else {
      // If the chocolate is not in the statement, we will throw an error
      res.status(404).send("Chocolate not found");
    }

    // Check if finalChocolateData is undefined (in case no chocolate matches)
    if (finalChocolateData === undefined) {
        throw new Error("Chocolate data not generated");
    }

    // We will return the chocolate data as JSON
    res.status(200).json(finalChocolateData);
  } catch (error) {
    // If there is an error, we will log it and send a 500 status code
    console.error("Error in fetching chocolate data", error);
    res.status(500).send("Error in fetching chocolate data");
  }
};