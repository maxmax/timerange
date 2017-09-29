import { call, put } from "redux-saga/effects";
import {
  getItems,
  error
} from '../actions/days';
import Api from '../../api';

function *loadItems(){
  try{
    const days = yield call(Api.getItems);
    yield put(getItems(days.data));
  }
  catch(e){
    yield put(error(e.message));
  }
}

export default function *days() {
  yield loadItems();
}
