import { AxiosResponse } from 'axios';
import React, { useState } from 'react'
//import { RouteComponentProps } from 'react-router';
import ProductViewModel from '../../../models/productview.model';
import { getProductById } from '../../../service/product-service';

type ProductDataStateType = ProductViewModel | never | null
type ErrorStateType = string | null
type LoadingStateType = boolean
// type RouteParamsType = {
//     id: string,
// }
// const ProductView = (props: RouteComponentProps<RouteParamsType>) => {

const ProductView = (props: any) => {
    const [productState, setProductState] = useState<ProductDataStateType>(null)
    const [errorState, setErrorState] = useState<ErrorStateType>('')
    const [loadingState, setLoadingState] = useState<LoadingStateType>(true)
    const { id } = props.match.params
    console.log(typeof id);
    let design: any;
    if (loadingState) {
        design = <p>Loading...</p>;
    }

    if (errorState !== '') {
        design = <p>{errorState}</p>;
    }

    if (productState || productState === null) {
        design = <p>Not Found</p>
    }

    design = <p>{productState?.productName}</p>

    getProductById(parseInt(id))
        .then(
            (resp: AxiosResponse) => {
                console.log(resp.data);
                const data: ProductViewModel = resp.data as ProductViewModel
                console.log(data);
                setProductState(data)
                setErrorState('')
                setLoadingState(false)
            },
            (err) => {
                setProductState(null)
                setErrorState(err.message)
                setLoadingState(false)
            }
        )
    return design
}

export default ProductView
