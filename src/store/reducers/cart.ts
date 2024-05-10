import { PayloadAction, createSlice } from '@reduxjs/toolkit'

type CartState = {
  items: CardapioType[]
  isOpen: boolean
}

const initialState: CartState = {
  items: [],
  isOpen: false,
}

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    add: (state, action: PayloadAction<CardapioType>) => {
      const restaurante = state.items.find(
        (item) => item.id === action.payload.id,
      )

      if (!restaurante) {
        state.items.push(action.payload)
      } else {
        alert('O lanche já está no carrinho')
      }
    },
    remove: (state, action: PayloadAction<number>) => {
      state.items = state.items.filter((item) => item.id !== action.payload)
    },
    open: (state) => {
      state.isOpen = true
    },
    close: (state) => {
      state.isOpen = false
    },
  },
})

export const { add, open, close, remove } = cartSlice.actions
export default cartSlice.reducer
