import {configureStore} from '@reduxjs/toolkit'
import rootReducer from './rootReducer'
import {productSaga} from './productSaga'
import createSagaMiddlerware from 'redux-saga'

const sagaMiddleware = createSagaMiddlerware();
const store = configureStore({
    reducer:rootReducer,
    middleware:()=>[sagaMiddleware]
});

sagaMiddleware.run(productSaga)

export default store;
