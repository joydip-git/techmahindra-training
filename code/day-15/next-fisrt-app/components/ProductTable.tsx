import React from 'react'
import ProductViewModel from '../models/productview.model'
import Link from 'next/link'

type ProductTablePropType = {
    productList: ProductViewModel[],
}
const ProductTable = (props: ProductTablePropType) => {
    const { productList } = props
    return (

        <div className="table-responsive">
            {
                productList.map(p => {
                    return (
                        <Link key={p.productId} href={`/products/${p.productId}`} passHref>
                            <p>
                                {p.productName}
                            </p>
                        </Link>
                    )
                })
            }
        </div>
    )
}

export default ProductTable
