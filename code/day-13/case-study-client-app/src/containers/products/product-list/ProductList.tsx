import { AxiosResponse } from 'axios'
import React, { Component } from 'react'
import ProductFilter from '../../../components/products/product-list/product-filter/ProductFilter'
import ProductSort from '../../../components/products/product-list/product-sort/ProductSort'
import ProductTable from '../../../components/products/product-list/product-table/ProductTable'
import ProductViewModel from '../../../models/productview.model'
import { getProducts } from '../../../service/product-service'

type ProductListStateType = {
    products: ProductViewModel[],
    loading: boolean,
    errorMessage: string
}
export default class ProductList extends Component<{}, ProductListStateType> {
    state = {
        products: [],
        loading: true,
        errorMessage: ''
    }
    render() {
        const { products, errorMessage, loading } = this.state
        let design: JSX.Element | string = ''
        if (loading) {
            design = (<p>Loading...</p>);
            return design;
        }
        if (errorMessage !== '') {
            design = <p>{errorMessage}</p>
            return design;
        }
        if (products && products.length === 0) {
            design = <p>No product found</p>
            return design;
        }
        design = (
            <div className='panel panel-primary' style={{ border: '2px solid black', borderRadius: '5px', margin: '5px' }}>
                <div className='panel panel-body'>
                    <div className='row'>
                        <ProductFilter />
                        <ProductSort />
                    </div>
                    <br />
                    <ProductTable productList={products} />
                </div>
            </div>
        )
        return design;
    }
    componentDidMount() {
        getProducts()
            .then(
                (resp: AxiosResponse) => {
                    if (resp.status === 200) {
                        const products: ProductViewModel[] = [...resp.data] as ProductViewModel[]
                        this.setState({
                            products: products,
                            loading: false
                        })
                    }
                },
                (err) => {
                    console.log(err);
                    this.setState({
                        products: [],
                        loading: false,
                        errorMessage: err.message
                    })
                }
            )
    }
}
