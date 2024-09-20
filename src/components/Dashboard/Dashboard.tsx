import { Link, useNavigate } from 'react-router-dom';
import { Image } from '../../Images/Image';
import ProductItem from '../../uikit/ProductItem/ProductItem';
import Help from '../Help/Help';
import { useDispatch, useSelector } from 'react-redux';
import { selectProducts } from '../../store/slices/products/productsSlice';
import { useEffect, useState } from 'react';
import { fetchProducts } from '../../store/slices/products/productsApi';
import { usersSelector } from '../../store/slices/users/usersSlice';
import { AppDispatch } from '../../store/store';

type Product = {
    _id: string,
    name: string,
    price: number,
    description: string,
    type: string,
    images: [string],
    userId: string,
    createdAt: string,
    updatedAt: string,
    __v: number
};

function Dashboard() {
    const dispatch = useDispatch<AppDispatch>();
    const { productsData } = useSelector(selectProducts);
    const { userToken } = useSelector(usersSelector);
    const [getProducts, setGetProducts] = useState<boolean>(true);
    const navigate = useNavigate()

    useEffect(() => {
        if (userToken) {
            if (getProducts) {
                dispatch(fetchProducts({ userToken }));
                setGetProducts(false)
            }
        } else {
            navigate('/')
        }
    }, [getProducts]);

    return (
        <section className="dashboard">
            <div className="dashboard__container _container">
                <Help />
                <div className="dashboard-block">
                    <h1>Sales Overview</h1>
                    <span className="dashboard-span">(+5) more In 2021</span>
                    <img className="dashboard-img" src={Image.dashboardImg} alt="img" />
                    <div className="dashboard-product">
                        <h2>My products</h2>
                        <div className="dashboard-product__cards">
                            {productsData.length ? (
                                <>
                                    {
                                        productsData.map(product => (
                                            <ProductItem key={product._id} image={`https://bazaaar.deals/api/images/${product.images[0]}`} id={product._id} title={product.name} price={product.price} type={product.type} />
                                        ))
                                    }
                                    <Link to={'/product'} className="dashboard-button">
                                        <img src={Image.dashboardPlyus} alt="img" />
                                        Add a New Product
                                    </Link>
                                </>
                            ) : (
                                <Link to={'/product'} className="dashboard-button">
                                    <img src={Image.dashboardPlyus} alt="img" />
                                    Add a New Product
                                </Link>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Dashboard;