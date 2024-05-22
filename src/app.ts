import express, { Request, Response } from "express";
import { router } from "./module/Product/product.route";
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


app.use("/api/", router);

app.get("/", (req: Request, res: Response) => {
  res.send("Hello Next!");
});

export default app;
