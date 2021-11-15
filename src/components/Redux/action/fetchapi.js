import axios from "axios"

export const FETCH_API_PRODUCT = 'FETCH_API_PRODUCT'

export const RequestApiProduct = () => {
    return (dispatch) => {
        axios.get('https://json-server-app-demo.herokuapp.com/product-list')
            .then(res => {
                dispatch(FetchApiProduct(res.data))
            }).catch(errros => {
                console.log(errros,'fail call api');
            }) 
    }
}


export const FetchApiProduct = (payload) => {
    return {
        type: FETCH_API_PRODUCT,
        payload
    }
}

