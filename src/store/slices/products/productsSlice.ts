import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { fetchProducts } from "./productsApi";

// Определение типа для продукта
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
};

// Определение типа для начального состояния
interface ProductsState {
  productsData: Product[];
  // Можно добавить поле для ошибок
  error: string | null;
  changedProduct: string | null
}

// Начальное состояние
const initialState: ProductsState = {
  productsData: [],
  changedProduct: null,
  error: null,
};

export const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    changeProduct: (state, {payload}) => {
      state.changedProduct = payload
    }
  },
  extraReducers: (builder) => {
    builder.addCase(fetchProducts.fulfilled, (state, {payload}) => {
      if (payload) {
        state.productsData = [...payload]
      }
    })
  }
});

export const selectProducts = (state: { products: ProductsState }) => state.products;
export const {changeProduct} = productsSlice.actions
export const productsReducer = productsSlice.reducer;