import { all, fork } from "redux-saga/effects";

//public
import AccountSaga from "./auth/register/saga";
import AuthSaga from "./auth/login/saga";
import LayoutSaga from "./layout/saga";
import calendarSaga from "./calendar/saga";

export default function* rootSaga() {
  yield all([
    fork(AccountSaga),
    fork(AuthSaga),
    fork(LayoutSaga),
    fork(calendarSaga),
  ]);
}
