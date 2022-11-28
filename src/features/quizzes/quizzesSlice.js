import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuidV4 } from 'uuid';

const initialState = {
    quizzes: {}
}

export const quizzesSlice = createSlice({
    name: 'quizzes',
    initialState,
    reducers: {
        addQuiz: (state, action) => {
            //DESTRUCTURE PAYLOAD
            const { name, topicId, id } = action.payload;
            //CREATE NEW QUIZ
            const newQuiz = {
                id,
                name,
                topicId,
                cardIds: [],
            };
            //RETURN NEW QUIZ
            return state.quizzes = {
                ...state.quizzes,
                [id]: newQuiz
            }
        }
    }
})

//ACTION CREATORS
export const { addQuiz } = quizzesSlice.actions;

//QUIZ STATE SELECTOR
export const selectQuizzes = state => state.quizzes.quizzes;

//QUIZ REDUCER
export default quizzesSliceReducer = quizzesSlice.reducer;