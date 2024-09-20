import React, { useEffect, useState } from 'react'
import { Image } from '../../Images/Image'
import axios from 'axios';
import { useSelector } from 'react-redux';
import { usersSelector } from '../../store/slices/users/usersSlice';
import { useNavigate } from 'react-router-dom';

function Tariff() {
    const { userToken } = useSelector(usersSelector)
    const [productsData, setProductsData] = useState<any[]>([])
    const navigate = useNavigate()
    useEffect(() => {
        if (userToken) {
            axios.get('https://bazaaar.deals/api/stripe/products', {
                headers: {
                    Authorization: `Bearer ${userToken}`
                }
            }).then((res) => {
                setProductsData([...res.data])
            })
        }
    }, [])
    return (
        <section className="tariff">
            <div className="tariff__container _container">
                <div className="tariff-image">
                    <img src={Image.tariffImg} alt="img" />
                    <img src={Image.tariffImg2} alt="img" />
                </div>
                <h3>Tariff plans</h3>
                <p>
                    we offer two flexible pricing packages to suit your business needs:
                    Starter and Pro
                </p>
                <div className="tariff__items">
                    <div className="tariff__items-pro" style={{ backgroundImage: `url(${Image.tariffPatern})` }}>
                        <p>Pro <span>HOT</span></p>
                        <p>For those who are ready to maximize their sales.</p>
                        <h5>56€ <span> / month</span></h5>
                        <div />
                        <ul>
                            <li>
                                <img src={Image.tariffCheck} alt="img" />Unlimited products on Amazon
                            </li>
                            <li><img src={Image.tariffCheck} alt="img" />Priority support</li>
                            <li><img src={Image.tariffCheck} alt="img" />Priority support</li>
                            <li><img src={Image.tariffCheck} alt="img" />Advanced management</li>
                            <li><img src={Image.tariffCheck} alt="img" />Personalized strategies</li>
                            <li><img src={Image.tariffCheck} alt="img" />Detailed reporting</li>
                        </ul>
                        <button onClick={() => {
                            if(userToken) {
                                if(productsData) {
                                    axios.post(`https://bazaaar.deals/api/stripe/checkout`, {
                                        priceId: productsData[0].priceId
                                    },{
                                        headers: {
                                            Authorization: `Bearer ${userToken}`
                                        }
                                    }).then((res) => {
                                        window.location = res.data
                                    })
                                }
                            }else {
                                navigate('/login')
                            }
                        }}>Get Started</button>
                    </div>
                    <div className="tariff__items-starter">
                        <div className="tariff__items-text">
                            <h4>Starter</h4>
                            <p>
                                Ideal for those who are just starting out and want to test the US
                                market.
                            </p>
                            <h5>34€ <span>/month</span></h5>
                            <div />
                            <ul>
                                <li>
                                    <img src={Image.tariffCheckImg} alt="img" />Up to 10 products on Amazon
                                </li>
                                <li><img src={Image.tariffCheckImg} alt="img" />Email support</li>
                                <li>
                                    <img src={Image.tariffCheckImg} alt="img" />Access to online guides and
                                    resources
                                </li>
                                <li><img src={Image.tariffCheckImg} alt="img" />Basic logistics</li>
                                <li><img src={Image.tariffCheckImg} alt="img" />Inventory management</li>
                            </ul>
                        </div>
                        <button onClick={() => {
                            if(userToken) {
                                if(productsData) {
                                    axios.post(`https://bazaaar.deals/api/stripe/checkout`, {
                                        priceId: productsData[1].priceId
                                    },{
                                        headers: {
                                            Authorization: `Bearer ${userToken}`
                                        }
                                    }).then((res) => {
                                        window.location = res.data
                                    })
                                }
                            }else {
                                navigate('/login')
                            }
                        }}>Start now</button>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Tariff
