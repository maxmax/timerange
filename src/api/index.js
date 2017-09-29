import axios from 'axios';
import {Api} from '../config/properties';

export default {
  getItems : () => {
    return axios.get(Api.items);
  }
}
