import * as types from "../actionTypes/types";

export const removeTask = (id) => {
    return {
        type: types.REMOVE_TASK,
        id
    };
};

export const removeCart = (id) => {
    return {
        type: types.REMOVE_CART,
        id
    };
};

export const addCart = (id) => {
    return {
        type: types.ADD_CART,
        id
    };
};
