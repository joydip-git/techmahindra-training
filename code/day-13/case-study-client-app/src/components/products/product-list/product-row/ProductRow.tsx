import React from 'react'
import { Link } from 'react-router-dom'
import ProductViewModel from '../../../../models/productview.model'

type ProductRowPropType = {
    productInfo: ProductViewModel
}
const ProductRow = (props: ProductRowPropType) => {
    const imgStyle = { margin: '2px', width: '50px' }
    const { productInfo } = props
    return (
        <tr>
            <td>
                {/* <Link to={`/products/view/${productInfo.productId}`}> */}
                <Link to={
                    {
                        pathname: `/products/view/${productInfo.productId}`,
                    }
                }>
                    <img src={productInfo.imageUrl}
                        alt='NA'
                        title={productInfo.productName}
                        style={imgStyle}
                    />
                </Link>
            </td>
            <td>
                <Link to={
                    {
                        pathname: `/products/update/${productInfo.productId}`,
                    }
                }>
                    {productInfo.productName}
                </Link>
            </td>
            <td>
                {productInfo.price}
            </td>
            <td>
                {productInfo.likes}
            </td>
            <td>
                <button className="btn btn-danger">Delete</button>
            </td>
        </tr>
    )
}

export default ProductRow
