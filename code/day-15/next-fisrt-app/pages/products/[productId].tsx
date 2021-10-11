import { AxiosResponse } from 'axios'
import { GetStaticPaths, GetStaticProps } from 'next'
import { useRouter } from 'next/router'
import React from 'react'
import axiosInstance from '../../Axios/axiosInstance'
import ProductViewModel from '../../models/productview.model'

const ProductDetail = (props: { product: ProductViewModel }) => {
    //const productId = useRouter().query.pid
    const router = useRouter()
    let design: any;
    if (router.isFallback) {
        design = <p>Loading...</p>;
        return design
    }

    design = (
        <div>
            {props.product.productName}
        </div>
    )
    return design
}
type paramsType = { params: { productId: string } }

export const getStaticPaths: GetStaticPaths = async () => {
    const resp: AxiosResponse = await axiosInstance.get('all')
    const allProducts = resp.data as ProductViewModel[]
    const paths: paramsType[] = allProducts.slice(0, 2).map(p => {
        return {
            params: {
                productId: p.productId.toString()
            }
        }
    })
    return {
        paths: paths,
        fallback: true
    }
}
export const getStaticProps: GetStaticProps = async (context) => {
    const productId = context.params?.productId
    const resp = await axiosInstance.get(`get/product/${productId}`)
    return {
        props: {
            product: resp.data
        }
    }
}
export default ProductDetail
