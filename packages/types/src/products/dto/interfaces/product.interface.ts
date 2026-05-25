import { CreateProductRequest } from "../create-product.request";

export interface Product extends CreateProductRequest {
  id: string;
}
