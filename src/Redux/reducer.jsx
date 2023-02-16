import {ItemData} from "../Data/DataECommerce/reduxData.jsx" 

const data = ItemData

export default function reducer (state = data, action) {
    const{type, payload} = action;

    switch (type) {
        case "ADD_TO_CART":
            console.log(payload);
            state = ItemData.filter((idx) => {
                return idx.id == payload
            })
            return state
        
        case "PRODUCT":
            state = ItemData.filter((idx) => {
                return idx.id === payload
            })
            return state
            
            default:
                // return ItemData
        }
}