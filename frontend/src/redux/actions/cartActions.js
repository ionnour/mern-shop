import * as actionTypes from "../constants/cartConstants";
import axios from "axios";

export const addToCart = (id, qty) => async (dispatch, getState) => {
  const {data} = await axios.get(`/api/products/${id}`);

  dispatch({
    type: actionTypes.ADD_TO_CART,
    payLoad: {
      product: data._id,
      name: data.name,
      imageURL: data.imageURL,
      price: data.price,
      countInStock: data.countInStock,
      qty,
    },
  });

  localStorage.setItem("cart", JSON.stringify(getState().cart.cartItems));
};

export const removeFromCart = (id) => (dispatch, getState) => {
  dispatch({
    type: actionTypes.REMOVE_FROM_CART,
    payLoad: id,
  });

  localStorage.setItem("cart", JSON.stringify(getState().cart.cartItems));
}