
import axios from 'axios';

import {filterProducts} from '../helpers/serviceHelper.js'
import { API_BASE } from '../helpers/constants.js';

export const fetchProducts = async () => {
 
  try {
    const response = await axios.get(`${API_BASE}/products`);
    // console.log("products ", response.data)
    return filterProducts(response.data);

  } catch (error) {
   console.log(error.message);
  }
};



export const getProductoDetail = async (id)=>{
  try {
    const response = await axios.get(`${API_BASE}/products/${id}`);
    console.log("product byId ", response.data)
    return response.data;

  } catch (error) {
   console.log(error.message);
  }
}