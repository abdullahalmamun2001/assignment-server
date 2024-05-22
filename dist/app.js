"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const product_route_1 = require("./module/Product/product.route");
const order_route_1 = require("./module/Order/order.route");
// import { router_two } from "./module/Order/order.route";
const app = (0, express_1.default)();
//parsers
app.use(express_1.default.json());
// middleware \
// app.use((req: any, res: any, next: any) => {
//   res.status(404).json({
//     success: false,
//     message: "Route not found",
//   });
//   next();
// });
app.use("/api/products", product_route_1.router);
app.use("/api/orders", order_route_1.router_two);
app.get("/", (req, res) => {
    res.status(500).json({
        success: false,
        message: "Not Found Route"
    });
});
exports.default = app;
