
import { endPoints } from './../../services/endpoints';
import axios from "../../services/axios"
import { ActionType } from "../action-types";
import { Dispatch } from "redux";
import { CategoryType, IInitialState, ProductType } from "../../types";
import qs from 'qs'

export const selectCategory = (value: string) => {
  return { type: ActionType.SELECTED_CATEGORY, payload: value };
};

export const getCategories = () => async (dispatch: Dispatch) => {
  dispatch({ type: ActionType.GET_CATEGORIES })
  try {
    const { data } = await axios.get<CategoryType[]>(endPoints.getCategories());
    dispatch({ type: ActionType.SET_CATEGORIES, payload: data });
  } catch (error) {
    const errorMessage = "Error occur while get Categories" + error
    dispatch({ type: ActionType.SET_ERROR, payload: errorMessage });

  }
};

export const getProducts = () => async (dispatch: Dispatch, getState: () => IInitialState) => {
  const selectedCategory = getState().reducer.selectedCategory
  const searchInput = getState().reducer.searchInput
  const query = qs.stringify({
    name: searchInput === "" ? undefined : searchInput,
    category: selectedCategory === "Categories" ? undefined : selectedCategory
  })
  dispatch({ type: ActionType.GET_PRODUCTS })
  try {
    const { data } = await axios.get<ProductType[]>(endPoints.getProducts(query));
    dispatch({ type: ActionType.SET_PRODUCTS, payload: data })
  } catch (error) {
    const errorMessage = "Error occur while get Products" + error
    dispatch({ type: ActionType.SET_ERROR, payload: errorMessage })

  }
}

export const setSearchInput = (value: string) => {
  return { type: ActionType.SET_SEARCH_INPUT, payload: value }
}

export const getProduct = (id?: string) => async (dispatch: Dispatch) => {
  dispatch({ type: ActionType.GET_PRODUCT })
  try {
    const { data } = await axios.get<ProductType>(endPoints.getProductItem(id))
    dispatch({ type: ActionType.SET_PRODUCT, payload: data })
  } catch (error) {
    const errorMessage = "Error occur while get Product" + error
    dispatch({ type: ActionType.SET_ERROR, payload: errorMessage })

  }
}

export const addProduct = (newProduct: ProductType, navigate: (path: string) => void) => async (dispatch: Dispatch) => {
  try {
    await axios.post(endPoints.addProduct(), newProduct)
    dispatch({ type: ActionType.POST_PRODUCT })
    navigate("/");
  } catch (error) {
    const errorMessage = "Error occur while add Product" + error
    dispatch({ type: ActionType.SET_ERROR, payload: errorMessage })
  }
}

export const deleteProduct = (id: string) => async (dispatch: Dispatch, getState: () => IInitialState) => {
  dispatch({ type: ActionType.DELETE_PRODUCT })
  const selectedCategory = getState().reducer.selectedCategory
  const searchInput = getState().reducer.searchInput
  const query = qs.stringify({
    name: searchInput === "" ? undefined : searchInput,
    category: selectedCategory === "Categories" ? undefined : selectedCategory
  })
  try {
    await axios.delete(endPoints.deleteProductItem(id))
    dispatch({ type: ActionType.GET_PRODUCTS })
    const { data } = await axios.get<ProductType[]>(endPoints.getProducts(query));
    dispatch({ type: ActionType.SET_PRODUCTS, payload: data })

  } catch (error) {
    const errorMessage = "Error occur while delete Product" + error
    dispatch({ type: ActionType.SET_ERROR, payload: errorMessage })
  }
}