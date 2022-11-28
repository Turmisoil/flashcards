import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuidV4 } from 'uuid';
import { addQuizId } from "../topics/topicsSlice";

const initialState = {
    quizzes: {}
}

export const quizzesSlice = createSlice({
    name: 'quizzes',
    initialState,
    reducers: {
        addQuiz: (state, action) => {
            //DESTRUCTURE PAYLOAD
            const { name, topicId, id, cardIds } = action.payload;
            //CREATE NEW QUIZ
            const newQuiz = {
                id,
                name,
                topicId,
                cardIds,
            };
            //RETURN NEW QUIZ
            state.quizzes[id] = newQuiz;
        }
    }
})

//ADD QUIZ THUNK TO ADD QUIZ AND QUIZ ID IN ORDER 
export const addQuizThunk = payload => {
    return (dispatch) => {
        //ADD QUIZ
        dispatch(addQuiz(payload));
        //ADD QUIZ ID
        dispatch(addQuizId({topicId: payload.topicId, id: payload.id}))
    }
}

//ACTION CREATORS
export const { addQuiz } = quizzesSlice.actions;

//QUIZ STATE SELECTOR
export const selectQuizzes = state => state.quizzes.quizzes;

//QUIZ REDUCER
export default quizzesSlice.reducer;