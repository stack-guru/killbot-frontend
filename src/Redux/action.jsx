export const AddToCart = (id) => async dispatch => {
    dispatch({
        type: "ADD_TO_CART",
        payload: id
    })
}

export const ProductReduxData = (id) => async dispatch => {
    dispatch({
        type: "PRODUCT",
        payload: id
    })
}