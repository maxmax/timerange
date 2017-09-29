import {
  DAYS_GET_ITEMS,
  DAYS_ERROR
} from '../actions/days';
import {Map} from 'immutable';

const initialState = Map({
  lastItem: '',
  items: []
});

export default (state=initialState, action)=>{
  switch (action.type){
    case DAYS_GET_ITEMS:
      return state.update('items', list => action.items);
    case DAYS_ERROR :
      return state.update('error', value => action.message);
    default :
      return state;
  }
}
