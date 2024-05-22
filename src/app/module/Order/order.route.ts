import { Router } from "express";
import { createOrderController, getAllOrdersController, getSingleOrderByIdController } from "./order.controller";

export const router_two = Router();

router_two.post("/", createOrderController);
router_two.get("/", getAllOrdersController);
router_two.get("/:id", getSingleOrderByIdController);
