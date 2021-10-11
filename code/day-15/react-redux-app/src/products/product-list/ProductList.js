import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { getProductsAsync } from '../../redux/async-operations/index'


const ProductList = () => {
    const {
        loading: loadingValue,
        error: errorValue,
        products: productsValue
    } = useSelector((combinedState) => combinedState.productsState)

    const dispatchFnRef = useDispatch()
    useEffect(
        () => {
            dispatchFnRef(getProductsAsync)
        }, []
    )
    let design
    if (loadingValue) {
        design = <p>Loading...</p>
    } else if (errorValue !== '') {
        design = <p>{errorValue}</p>
    } else if (productsValue.length === 0) {
        design = <p>No products found</p>
    } else {
        design = (
            <ol>
                {
                    productsValue.map(
                        (p) => {
                            return (
                                <Link key={p.productId}
                                    to={`/products/${p.productId}`}>
                                    <li>{p.productName}</li>
                                </Link>
                            )
                        }
                    )
                }
            </ol>
        )
    }
    return design
}
export default ProductList
