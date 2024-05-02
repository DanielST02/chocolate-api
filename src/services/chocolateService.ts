import { faker } from "@faker-js/faker";
import { storeChocolateData } from "../helpers/helpers.js";

export const generateCadburyChocolateData = (): ChocolateData => {
  // Generate random chocolate data
  const generatedChocolateData: ChocolateData = {
    chocolate: "Cadbury",
    calories: faker.number.int({ min: 100, max: 500 }),
    sugar: faker.number.int({ min: 10, max: 40 }),
    price: faker.number.int({ min: 1, max: 9 }),
    rating: faker.number.int({ min: 1, max: 5 }),
  };

  storeChocolateData(generatedChocolateData).catch(console.error);

  // Return chocolate data
  return generatedChocolateData;
};

export const generateMarsChocolateData = (): ChocolateData => {
  // Generate random chocolate data
  const generatedChocolateData: ChocolateData = {
    chocolate: "Mars",
    calories: faker.number.int({ min: 100, max: 500 }),
    sugar: faker.number.int({ min: 10, max: 40 }),
    price: faker.number.int({ min: 1, max: 9 }),
    rating: faker.number.int({ min: 1, max: 5 }),
  };

  storeChocolateData(generatedChocolateData).catch(console.error);

  // Return chocolate data
  return generatedChocolateData;
};

export const generateGalaxyChocolateData = (): ChocolateData => {
  // Generate random chocolate data
  const generatedChocolateData: ChocolateData = {
    chocolate: "Galaxy",
    calories: faker.number.int({ min: 100, max: 500 }),
    sugar: faker.number.int({ min: 10, max: 40 }),
    price: faker.number.int({ min: 1, max: 9 }),
    rating: faker.number.int({ min: 1, max: 5 }),
  };

  storeChocolateData(generatedChocolateData).catch(console.error);

  // Return chocolate data
  return generatedChocolateData;
};

export const generateLindtChocolateData = (): ChocolateData => {
  // Generate random chocolate data
  const generatedChocolateData: ChocolateData = {
    chocolate: "Lindt",
    calories: faker.number.int({ min: 100, max: 500 }),
    sugar: faker.number.int({ min: 10, max: 40 }),
    price: faker.number.int({ min: 1, max: 9 }),
    rating: faker.number.int({ min: 1, max: 5 }),
  };

  storeChocolateData(generatedChocolateData).catch(console.error);

  // Return chocolate data
  return generatedChocolateData;
};