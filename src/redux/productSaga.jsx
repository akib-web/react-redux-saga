import { takeEvery , put} from "redux-saga/effects";
import { CART_ACTIONS, API_BASE_URL } from "./config";

function* getProducts(){
    // let data = yield fetch(`${API_BASE_URL}/products`)
    // data = yield data.json()
    let data = yield fetch('https://dummyjson.com/products')
    data = yield data.json()
    console.log('productsaga is called',data);
    yield put({type: CART_ACTIONS.TYPES.SET_PRODUCT_LIST, data});
}

export function* productSaga(){
    yield takeEvery(CART_ACTIONS.TYPES.PRODUCT_LIST, getProducts)
}

export default productSaga;