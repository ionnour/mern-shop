import * as actionTypes from "../constants/productConstants";
import axios from 'axios';

export const getProducts = () => async (dispatch) => {
  try {
    dispatch({type: actionTypes.GET_PRODUCTS_REQUEST});

    const {data} = await axios.get("/api/products");

    dispatch({
      type: actionTypes.GET_PRODUCTS_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: actionTypes.GET_PRODUCTS_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message 
          : error.message,
    });
  }
};

export const getProductDetails = (id) => async (dispach) => {
  try{
    dispach({ type: actionTypes.GET_PRODUCT_DETAILS_REQUEST});

    const {data} = await axios.get(`/api/products/${id}`);

    dispatch({
      type: actionTypes.GET_PRODUCTS_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispach({
      type: actionTypes.GET_PRODUCTS_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const removeProductDetails = () => (dispach) => {
  dispach({ type: actionTypes.GET_PRODUCT_DETAILS_RESET});
};