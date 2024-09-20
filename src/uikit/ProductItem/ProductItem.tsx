import { FC } from "react"
import { useDispatch } from "react-redux"
import { useNavigate } from "react-router-dom"
import { changeProduct } from "../../store/slices/products/productsSlice"


type ProductItemProps = {
    image: string,
    title: string,
    price: number,
    type: string,
    id?: string
}

const ProductItem:FC<ProductItemProps> = ({image, title, price, type, id}) => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    return (
        <div className="product-item">
            <img src={image} alt="img" />
            <h5>{title}</h5>
            <div className="product-item-border" />
            <p>${price}</p>
            <span className="product-item-span">{type}</span>
            {
                id && 
                <button onClick={() => {
                    dispatch(changeProduct(id))
                    navigate('/product')
                }}>Edit</button>
            }
        </div>
    )
}

export default ProductItem
