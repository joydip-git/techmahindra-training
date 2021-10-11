import { Dispatch } from "react"
import { AnyAction } from "redux"
import axiosInstance from "../../Axios/axiosInstance"
import { getDataSuccessAction, getDataFailureAction } from '../actions/index'

export const getProductsAsync = (dispatch: Dispatch<AnyAction>) => {
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