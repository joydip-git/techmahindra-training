import axios from 'axios'
import ProductViewModel from '../models/productview.model'

export const getProducts = () => {
    return axios.get('http://localhost:8000/products/all')
}
export const getProductById = (productId: number) => {
    return axios.get(`http://localhost:8000/products/get/product/${productId}`)
}
export const getProductsByName = (productName: string) => {
    return axios.get(`http://localhost:8000/products/get/${productName}`)
}
export const addProduct = (product: ProductViewModel) => {
    return axios.post('http://localhost:8000/products/add', product)
}
export const updateProduct = (productId: number, product: ProductViewModel) => {
    return axios.patch(`http://localhost:8000/products/update/product/${productId}`, product)
}
export const deleteProduct = (productId: number) => {
    return axios.delete(`http://localhost:8000/products/delete/${productId}`)
}
