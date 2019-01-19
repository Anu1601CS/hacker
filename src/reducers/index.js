import * as types from "../actionTypes/types";

const task = (state, action) => {
    switch (action.type) {
        case types.REMOVE_TASK:
            if (state.id === action.id) {
                return false;
            }
            return true;
        case types.REMOVE_CART:
            if (state.id == action.id && state.quantity > 0) {
                state.quantity = state.quantity - 1;
            }
            return state;
        case types.ADD_CART:
            if (state.id == action.id) {
                state.quantity = state.quantity + 1;
            }
            return state;
        default:
            return state;
    }
};

const tasks = (state = [], action) => {
    switch (action.type) {
        case types.REMOVE_TASK:
            return state.filter(t =>
                task(t, action)
            );
        case types.REMOVE_CART:
            return state.map(t =>
                task(t, action)
            );
        case types.ADD_CART:
            return state.map(t =>
                task(t, action)
            );
        default:
            return state;
    }
};

export default tasks;
