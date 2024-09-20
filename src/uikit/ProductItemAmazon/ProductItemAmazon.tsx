import { FC } from "react";

type ProductItemAmazonProps = {
    title: string;
    price: string;
    img: string
}

const ProductItemAmazon:FC<ProductItemAmazonProps> = ({title, price, img}) => {
    return (
        <div className="product-item">
            <img src={img} alt="img" />
            <h5>{title}</h5>
            <div className="product-item-border" />
            <p>{price}</p>
            <span className="product-item-span">Free Shipping</span>
            <img className="amazon-img" src="img/amazonbutton.png" alt="img" />
        </div>
    )
}

export default ProductItemAmazon
