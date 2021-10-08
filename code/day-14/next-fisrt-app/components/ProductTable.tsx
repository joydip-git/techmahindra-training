import React from 'react'
import ProductViewModel from '../models/productview.model'

type ProductTablePropType = {
    productList: ProductViewModel[],
}
const ProductTable = (props: ProductTablePropType) => {
    const { productList } = props
    return (

        <div className="table-responsive">
            <table className="table">
                <thead>
                    <tr>
                        <th>
                            Image
                        </th>
                        <th>
                            Name
                        </th>
                        <th>
                            Price
                        </th>
                        <th>
                            Likes
                        </th>
                        <th>
                            Delete
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {/* {
                        productList.map(p => {
                            return <ProductRow productInfo={p} key={p.productId} />
                        })
                    } */}
                    {
                        productList.map(p => {
                            return (<p key={p.productId}>
                                {p.productName}
                            </p>)
                        })
                    }
                </tbody>
            </table>
        </div>
    )
}

export default ProductTable
