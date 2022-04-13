import { CategoryType, ProductType } from "../../types";

export enum ActionType {
    SELECTED_CATEGORY = "SELECTED_CATEGORY",
    GET_CATEGORIES = "GET_CATEGORIES",
    SET_CATEGORIES = "SET_CATEGORIES",
    GET_PRODUCTS = "GET_PRODUCTS",
    SET_PRODUCTS = "SET_PRODUCTS",
    SET_SEARCH_INPUT = "SET_SEARCH_INPUT",
    GET_PRODUCT = "GET_PRODUCT",
    SET_PRODUCT = "SET_PRODUCT",
    POST_PRODUCT = "POST_PRODUCT",
    DELETE_PRODUCT = "DELETE_PRODUCT",
    SET_ERROR = "SET_ERROR"
}

export interface IGetCategoriesAction {
    type: ActionType.GET_CATEGORIES;
}
export interface ISetCategoriesAction {
    type: ActionType.SET_CATEGORIES;
    payload: CategoryType[];
}
export interface ISelectedCategoryAction {
    type: ActionType.SELECTED_CATEGORY;
    payload: string
}
export interface IGetProductsAction {
    type: ActionType.GET_PRODUCTS;
}
export interface ISetProductsAction {
    type: ActionType.SET_PRODUCTS;
    payload: ProductType[];
}
export interface ISetSearchInputAction {
    type: ActionType.SET_SEARCH_INPUT;
    payload: string
}
export interface IGetProductAction {
    type: ActionType.GET_PRODUCT;
}
export interface ISetProductAction {
    type: ActionType.SET_PRODUCT;
    payload: ProductType;
}
export interface IPostProductAction {
    type: ActionType.POST_PRODUCT;
}
export interface IDeleteProductAction {
    type: ActionType.DELETE_PRODUCT;
}
export interface ISetErrorAction {
    type: ActionType.SET_ERROR;
    payload: string
}
export type Actions = IGetCategoriesAction | ISetCategoriesAction
    | ISelectedCategoryAction | IGetProductsAction | ISetProductsAction
    | ISetSearchInputAction | IGetProductAction | ISetProductAction
    | IPostProductAction | IDeleteProductAction | ISetErrorAction