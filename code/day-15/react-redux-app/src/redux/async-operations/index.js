import axiosInstance from "../../Axios/axiosInstance"
import { getDataSuccessAction, getDataFailureAction } from '../actions/index'

export const getProductsAsync = (dispatch) => {
    setTimeout(() => {
        axiosInstance.get('all')
            .then(
                (resp) => {
                    //store.dispatch(getDataSuccessAction(resp.data))
                    dispatch(getDataSuccessAction(resp.data))
                },
                (err) => {
                    //store.dispatch(getDataFailureAction(err))
                    dispatch(getDataFailureAction(err.message))
                }
            )

    }, 5000)
}