import { IInitialState } from "../../types";
import { ActionType, Actions } from "../action-types";

const initialState: IInitialState = {
    reducer: {
        categories: undefined,
        selectedCategory: undefined,
        products: undefined,
        activeProduct: undefined,
        searchInput: undefined,
        isLoading: false,
        error: undefined
    }

};



const Reducer = (state = initialState, action: Actions) => {
    switch (action.type) {
        case ActionType.GET_CATEGORIES:
            return {
                ...state,
                isLoading: true,
                error: undefined
            }
        case ActionType.SET_CATEGORIES:
            return {
                ...state,
                isLoading: false,
                categories: action.payload
            }
        case ActionType.SELECTED_CATEGORY:
            return {
                ...state,
                selectedCategory: action.payload
            }
        case ActionType.GET_PRODUCTS:
            return {
                ...state,
                isLoading: true,
                error: undefined
            }
        case ActionType.SET_PRODUCTS:
            return {
                ...state,
                isLoading: false,
                products: action.payload
            }
        case ActionType.SET_SEARCH_INPUT:
            return {
                ...state,
                searchInput: action.payload
            }
        case ActionType.GET_PRODUCT:
            return {
                ...state,
                isLoading: true,
                error: undefined
            }
        case ActionType.SET_PRODUCT:
            return {
                ...state,
                isLoading: false,
                activeProduct: action.payload
            }
        case ActionType.DELETE_PRODUCT:
            return {
                ...state,
                error: undefined
            }
        case ActionType.SET_ERROR:
            return {
                ...state,
                isLoading: false,
                error: action.payload
            }
        default:
            return state
    }
}

export default Reducer;