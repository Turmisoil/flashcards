import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    cards: {}
}

export const cardsSlice = createSlice({
    name: 'cards',
    initialState,
    reducers: {
        addCard: (state, action) => {
            const { id, front, back } = action.payload;
            const newCard = {
                id,
                front,
                back,
            };
            state.cards[id] = newCard;
        }
    }
})

export const selectCards = state => state.cards.cards;
export const { addCard } = cardsSlice.actions;
export default cardsSlice.reducer;