import { createStore } from 'redux'

const reducer = (state, action ) => {

    if (action.type === 'ADD_TO_CART') {
        return {
            ...state,
            cart: state.cart.concat(action.product),
            total: calculateTotal(state.cart.concat(action.product))
        };
    } else if(action.type === 'REMOVE_FROM_CART') {
        return {
            ...state,
            cart: state.cart.filter(product => product.id !== action.product.id),
            total: calculateTotal(state.cart.filter(product => product.id !== action.product.id))
        }
    } else if(action.type === 'ADD_SHIPPING') {
        return {
            ...state,
            shipping: action.shipping
        }
    }

    return state;
};

function calculateTotal(products) {
    return products.reduce((a, {price}) => a + price, 0);
}

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
            return {
                    cart: [],
                    total: 0
                    }
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