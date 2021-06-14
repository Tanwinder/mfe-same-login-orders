import { all, fork } from 'redux-saga/effects';
// import eventsSaga from './eventSaga';
import Orders from '../components/Orders/OrdersSaga'

export default function* rootSaga() {
    yield all([
        // fork(eventsSaga),
        fork(Orders)
    ])
}