import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    sum: 0,
    productList: [],
    quantity: [],
}

export const menuSlice = createSlice({
    name: 'order',
    initialState,
    reducers: {
        addProduct: (state, action) => {
            state.sum += action.payload.price; // додавання ціни
            if(state.productList.indexOf(action.payload.productName, 0) === -1) { // додаємо у список продукт, якого ще не було
                state.productList.push(action.payload.productName);
                state.quantity.push(1);
            }
            else {
                state.quantity[state.productList.indexOf(action.payload.productName, 0)] += 1; // якщо продукт замовлюємо не вперше, збільшується кількість цього продукту
            }
            
        },
        clearAll: (state) => { // відправити дане замовлення в обробку та звільнити місце для нового замовлення
            state.sum = 0;
            state.productList.length = 0;
            state.quantity.length = 0;
        }
    },
})

export const { addProduct, clearAll } = menuSlice.actions;
export default menuSlice.reducer;