"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateSingleProduct = exports.deleteSingleProduct = exports.getSingleProduct = exports.createProduct = void 0;
const product_model_1 = require("./product.model");
;
;
const createProduct = (data) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield product_model_1.productModel.create(data);
    return result;
});
exports.createProduct = createProduct;
const getSingleProduct = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield product_model_1.productModel.findOne({ _id: new Object(id) });
    return result;
});
exports.getSingleProduct = getSingleProduct;
const deleteSingleProduct = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield product_model_1.productModel.deleteOne({ _id: new Object(id) });
    return result;
});
exports.deleteSingleProduct = deleteSingleProduct;
const updateSingleProduct = (filter, updateData, options) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield product_model_1.productModel.updateOne(filter, updateData, options);
    return result;
});
exports.updateSingleProduct = updateSingleProduct;
