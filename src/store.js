import { createStore } from 'redux'

const reducer = (state, action ) => {

    if (action.type === 'ADD_TO_CART') {
        return {
            ...state,
            cart: state.cart.concat(action.product)
        };
    } else if(action.type === 'REMOVE_FROM_CART') {
        return {
            ...state,
            cart: state.cart.filter(product => product.id !== action.product.id)
        }
    }

    return state;
};

function saveToLocalStorage(state) {
    try {
        const serializedState = JSON.stringify(state);
        localStorage.setItem('state', serializedState);
    } catch (e) {
        console.log(e);
    }
}

function loadFromLocalStorage() {
    try {
        const serializedState = localStorage.getItem('state')
        if (serializedState === null) {
            console.log('null')
            return { cart: [] }
        }
        return JSON.parse(serializedState)
    } catch (e) {
        console.log(e);
        return undefined;
    }
}

const persistedState = loadFromLocalStorage();

const store = createStore(reducer, persistedState);

store.subscribe(() => saveToLocalStorage(store.getState()));


// export default createStore(reducer, { cart: [] });
export default store;