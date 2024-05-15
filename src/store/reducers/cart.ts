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
      state.items.push(action.payload)
    },
    remove: (state, action: PayloadAction<number>) => {
      let removed = false
      const updatedCart = state.items.filter((item) => {
        if (!removed && item.id === action.payload) {
          removed = true
          return false
        }
        return true
      })
      state.items = updatedCart
      console.log(state.items)
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
