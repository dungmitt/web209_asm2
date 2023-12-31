
import { IProduct } from '@/interfaces/product';
import { PayloadAction, createSlice } from '@reduxjs/toolkit';


const initialState = {
    items: []
} as { items: any[] }

const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        add: (state, action: PayloadAction<IProduct>) => {
            const newProduct = action.payload;

            const existProductIndex = state.items.findIndex((item: any) => item.id == newProduct.id);
            if (existProductIndex === -1) {
                state.items.push(newProduct);
            } else {
                state.items[existProductIndex].quantity++;
            }
            localStorage.setItem('cart', JSON.stringify(state.items))
        },
        increase: (state, action: PayloadAction<number>) => {
            const currentProduct = state.items.find((item: any) => item.id === action.payload)
            currentProduct.quantity++
            localStorage.setItem('cart', JSON.stringify(state.items))
        },
        decrease: (state, action: PayloadAction<number>) => {
            const currentProduct = state.items.find((item: any) => item.id === action.payload)
            currentProduct.quantity--;

            if (currentProduct.quantity < 1) {
                const confirm = window.confirm('Bạn muốn xóa sản phẩm này khỏi giỏ hàng chứ ?');
                if (confirm) state.items = state.items.filter((item: any) => item.id !== action.payload)
                currentProduct.quantity = 1
            }
        }
    }
});

export const { add, increase, decrease } = cartSlice.actions;
export const cartReducer = cartSlice.reducer;