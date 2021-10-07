import { AxiosResponse } from 'axios';
import React, { useState, useEffect } from 'react'
import { Optional } from 'typescript-optional';
import ProductViewModel from '../../../models/productview.model';
import { getProductById } from '../../../service/product-service';
import { useHistory, useLocation, useParams } from 'react-router-dom'

type ProductViewStateType = {
    product: Optional<ProductViewModel>,
    errorMessage: string;
    loading: boolean
}

type ParamsType = { id: string }
// const ProductView = (props: any) => {
const ProductView = () => {

    const [viewState, setViewState] = useState<ProductViewStateType>({
        product: Optional.empty<ProductViewModel>(),
        errorMessage: '',
        loading: true
    })

    const { product, loading, errorMessage } = viewState
    // const { id } = props.match.params
    // const history = useHistory()
    // const location = useLocation()
    const { id } = useParams<ParamsType>()
    useEffect(
        () => {
            getProductById(parseInt(id))
                .then(
                    (resp: AxiosResponse) => {
                        console.log(resp.data);
                        const data: ProductViewModel = resp.data as ProductViewModel
                        setViewState({
                            product: Optional.of(data),
                            errorMessage: '',
                            loading: false
                        })
                    },
                    (err: any) => {
                        setViewState({
                            product: Optional.empty<ProductViewModel>(),
                            errorMessage: err.message,
                            loading: false
                        })
                    }
                )
            return () => {
                console.log('destroyed');
            }
        },
        [id]
    )

    let design: any;
    if (loading) {
        design = <p>Loading...</p>;
    } else if (errorMessage !== '') {
        design = <p>{viewState.errorMessage}</p>;
    } else if (product.isEmpty()) {
        design = <p>Not Found</p>;
    } else {
        design = <p>{product.get().productName}</p>
    }

    return design
}

export default ProductView
