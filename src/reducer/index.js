import { configureStore, applyMiddleware } from '@reduxjs/toolkit';
import  reduxThunk  from 'redux-thunk';
import { userReducer } from './userReducer';

export const rootStore = configureStore({
    reducer: {
        userReducer
    }
}, applyMiddleware(reduxThunk));


