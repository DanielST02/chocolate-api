import { param } from "express-validator";

/**
 * Validates the chocolate name param
 * @returns {ValidationChain} - Express validator validation chain
 * @example
 * router.get(
 *  "/:chocolate",
 * validateChocolateName,
 * getChocolateData
 * );
 */
export const validateChocolateName = param("chocolate")
  // We will use the isString method to check if the chocolate param is a string
  .isString()
  // We will use the isIn method to check if the city param is either cadbury, mars, galaxy or lindt
  .isIn(["cadbury", "mars", "galaxy", "lindt"])
  // We will use the withMessage method to set a custom error message
  .withMessage("Chocolate name must be either cadbury, mars, galaxy or lindt");
