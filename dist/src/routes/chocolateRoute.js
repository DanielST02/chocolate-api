import express from "express";
import { getChocolateData } from "../controllers/chocolateController.js";
import { validateChocolateName } from "../middleware/validators.js";
// We will create a router object
const router = express.Router();
// We will create a route for the chocolate data based on the chocolate name
router.get("/:chocolate", validateChocolateName, getChocolateData);
// We will export the router
export default router;
//# sourceMappingURL=chocolateRoute.js.map