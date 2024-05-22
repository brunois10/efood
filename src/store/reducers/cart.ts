import { PayloadAction, createSlice } from '@reduxjs/toolkit'

type CartState = {
  items: CardapioType[]
  isOpen: boolean
  isCheckout: boolean
  isPayment: boolean
  isFinish: boolean
  isAdress: boolean
}

const initialState: CartState = {
  items: [],
  isOpen: false,
  isCheckout: false,
  isPayment: false,
  isFinish: false,
  isAdress: false,
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
    },
    open: (state) => {
      state.isOpen = true
    },
    close: (state) => {
      state.isOpen = false
    },
    clear: (state) => {
      state.items = []
      state.isFinish = false
      state.isCheckout = false
    },
    checkout: (state) => {
      state.isCheckout = true
    },
    returnCart: (state) => {
      state.isCheckout = false
    },
    paymentCart: (state) => {
      state.isPayment = true
    },
    returnCheckout: (state) => {
      state.isPayment = false
    },
    finishCheckout: (state) => {
      state.isFinish = true
      state.isPayment = false
    },
  },
})

export const {
  add,
  open,
  close,
  remove,
  checkout,
  returnCart,
  paymentCart,
  returnCheckout,
  finishCheckout,
  clear,
} = cartSlice.actions
export default cartSlice.reducer
