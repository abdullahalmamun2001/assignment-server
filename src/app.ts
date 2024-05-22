import express, { Request, Response } from "express";
import { router } from "./app/module/Product/product.route";
import { router_two } from "./app/module/Order/order.route";

// import { router_two } from "./module/Order/order.route";
const app = express();

//parsers
app.use(express.json());
// middleware \
// app.use((req: any, res: any, next: any) => {
//   res.status(404).json({
//     success: false,
//     message: "Route not found",
//   });
//   next();
// });


app.use("/api/products", router);
app.use("/api/orders", router_two);

app.get("/", (req: Request, res: Response) => {
  res.status(500).json({
    success:false,
    message:"Not Found Route"
  })
});

export default app;
