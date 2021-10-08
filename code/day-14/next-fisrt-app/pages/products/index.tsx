import React from 'react'
import ProductTable from '../../components/ProductTable'
import { GetStaticProps } from 'next'
import axios, { AxiosResponse } from 'axios'
import ProductViewModel from '../../models/productview.model'

const ProductList = (props: any) => {
    const { products } = props
    return (
        <div className='panel panel-primary' style={{ border: '2px solid black', borderRadius: '5px', margin: '5px' }}>
            <div className='panel panel-body'>
                <ProductTable productList={products} />
            </div>
        </div>
    )
}

export const getStaticProps: GetStaticProps = async () => {
    const resp: AxiosResponse = await axios.get('http://localhost:8000/products/all')
    console.log('getting page data');
    const products = resp.data as ProductViewModel[]
    return {
        props: {
            products: products
        }
    }
}

export default ProductList

