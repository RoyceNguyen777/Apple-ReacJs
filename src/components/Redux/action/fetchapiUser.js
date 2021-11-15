import axios from "axios"


export const FETCH_API_USER = 'FETCH_API_USER'

export const RequestApiUser = () => {
    return (dispatch) => {
        axios.get('https://json-server-app-demo.herokuapp.com/user')
            .then(res => {
                dispatch(FetchApiUser(res.data))
            })
    }
}
export const FetchApiUser = (payload) => {
    return {
        type: FETCH_API_USER,
        payload
    }
}