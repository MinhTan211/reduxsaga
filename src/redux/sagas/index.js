import { put, takeLatest, all } from "redux-saga/effects";
import { feacthGet } from "../../api/feacth";

function* fetchNews() {
  const json = yield feacthGet("get", 1).then((response) => response.data);
  yield put({ type: "NEW_RECEIVED", json: json });
}

function* actionWatcher() {
  yield takeLatest("GET_NEWS", fetchNews);
}

export default function* rootSaga() {
  yield all([actionWatcher()]);
}
