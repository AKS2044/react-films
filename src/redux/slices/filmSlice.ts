import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface FilmState {
    value: number
}

const initialState: FilmState = {
    value: 0,
}

export const filmSlice = createSlice({
    name: 'film',
    initialState,
    reducers: {
        increment: (state) => {
        state.value += 1
        },
        decrement: (state) => {
        state.value -= 1
        },
        incrementByAmount: (state, action: PayloadAction<number>) => {
        state.value += action.payload
        },
    },
})

export const { increment, decrement, incrementByAmount } = filmSlice.actions

export default filmSlice.reducer