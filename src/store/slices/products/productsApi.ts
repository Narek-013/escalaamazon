import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// Определение типа ошибки
interface FetchProductsError {
  message: string;
}

type Product = {
  _id: string,
  name: string,
  price: number,
  description: string,
  type: string,
  images: [string],
  userId: string,
  createdAt: string,
  updatedAt: string,
  __v: number
}


export const fetchProducts = createAsyncThunk<Product[], { userToken: string }, { rejectValue: FetchProductsError }>(
  'products/fetchProducts',
  async function ({ userToken }: { userToken: string; }) {
    const { data: productsData } = await axios.get(`https://bazaaar.deals/api/product`, {
      headers: {
        Authorization: `Bearer ${userToken}`
      }
    })

    return productsData
  }
);