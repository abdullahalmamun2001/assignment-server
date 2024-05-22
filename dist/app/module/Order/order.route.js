"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.router_two = void 0;
const express_1 = require("express");
const order_controller_1 = require("./order.controller");
exports.router_two = (0, express_1.Router)();
exports.router_two.post("/", order_controller_1.createOrderController);
exports.router_two.get("/", order_controller_1.getAllOrdersController);
exports.router_two.get("/:id", order_controller_1.getSingleOrderByIdController);
