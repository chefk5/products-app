import { Product } from "../app/types";
import { baseURL } from "./constants";
import axios, { AxiosResponse } from "axios";

const axiosInstance = axios.create({
  baseURL: baseURL,
});

export const fetchProducts = async (): Promise<Product[]> => {
  const response: AxiosResponse<{ products: Product[] }> =
    await axiosInstance.get("/products");
  return response.data.products;
};
