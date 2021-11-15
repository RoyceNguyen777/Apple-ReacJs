import axios from "axios"

export const FETCH_API_CATEGORY = 'FETCH_API_CATEGORY'
export const RequestApiCategory = () => {
    return (dispatch) => {
        axios.get('https://json-server-app-demo.herokuapp.com/categories')
            .then(res => {
                dispatch(FetchApiCategory(res.data))
            })
    }
}
export const FetchApiCategory = (payload) => {
    return {
        type: FETCH_API_CATEGORY,
        payload
    }
}