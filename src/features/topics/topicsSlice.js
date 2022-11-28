import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from 'uuid'

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
            //DESTRUCTURE ACTION
            const { name, icon } = action.payload;
            //CREATE UNIQUE ID
            const id = uuidv4();
            //BUILD NEW TOPIC
            const newTopic = {
                id,
                name,
                icon,
                quizIds: [],
            };
            //RETURN NEW TOPIC TO ADD TO STATE
            state.topics[id] = newTopic;
        }
    }
})

//ACTION CREATORS
export const { addTopic } = topicsSlice.actions;

//EXPORT TOPICS SELECTOR FOR INTIAL TOPICS STATE 
export const selectTopics = state => state.topics.topics

//EXPORT REDUCER FOR STORE
export default topicsSlice.reducer;