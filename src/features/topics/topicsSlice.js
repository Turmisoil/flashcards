import { createSlice } from "@reduxjs/toolkit";

//INITIAL STATE
const initialState = {
    topics: {}
}

//SLICE
export const topicsSlice = createSlice({
    name: 'topics',
    initialState,
    reducers: {
        addTopic: (state, action) => {
            state.topics['topics'] = {
                id: action.payload.id,
                name: action.payload.name,
                icon: action.payload.icon,
            }
        }
    }
})

//ACTION CREATORS
const { addTopic } = topicsSlice.actions;

//EXPORT TOPICS SELECTOR FOR INTIAL TOPICS STATE 
export const topicsSelector = state => state.topics.topics

//EXPORT REDUCER FOR STORE
export default topicsSlice.reducer;