import { Image } from '../../Images/Image'

function StepIndicator() {
    return (
        <section className="step-indicator">
            <div className="step-indicator__container _container">
                <img className="step-indicator-img" src={Image.stepIndicatorImg} alt="img" />
                <div className="step-items">
                    <div className='items'>
                        <div className='items-left'>
                            {/* @@include('../../uikit/ProductItemAmazon/_index.html',{'{'}"image":"img/productimg8.png","title":"Traditional dish","price":"40.60 €"{'}'}) */}
                            <img src={Image.stepImgFirst} alt="img" />
                        </div>
                        <div className='items-info'>
                            <span>Step 1</span>
                            <h2>We search and evaluate the products. We discuss the sales strategy</h2>
                            <p>We carefully research and evaluate your products to ensure they are ready for market success. We discuss together the ideal sales strategy, adapted to the specifics of each product, to maximize the chances of success and attract as many customers as possible.</p>
                            {/* @@include('../../uikit/button/_index.html',{'{'}"title":"Următorul pas"{'}'}) */}
                        </div>
                    </div>
                    <div className='step__items'>
                        <div className='items'>
                            <div className="step-item">
                                <button>
                                    <img src={Image.stepDelivery} alt="img" />
                                </button>
                                <span>Fast  Delivery</span>
                                <p>Our service ensures that your packages arrive quickly</p>
                            </div>
                            <img src={Image.stepImgCard} alt="#" />
                        </div>
                        <div className='items-info'>
                            <img src={Image.step2ell} alt="img" />
                            <span>Step 2</span>
                            <h2>We handle Amazon account creation and product listing.</h2>
                            <p>We handle the entire process of creating your Amazon account and listing your products. We ensure the correct initial settings, optimize descriptions and images so that your products are visible and attractive to potential buyers.</p>
                            {/* @@include('../../uikit/button/_index.html',{'{'}"title":"Next step"{'}'}) */}
                        </div>
                    </div>
                    <div className='step__items'>
                        <div className='items'>
                            {/* @@include('../../uikit/ProductItemAmazon/_index.html',{'{'}"image":"img/amazonimg7.png","title":"Handmade Doll ","price":"12.50 €"{'}'}) */}
                            <img src={Image.stepImg4} alt="img" />
                        </div>
                        <div className='items-info'>
                            <img src={Image.stepCircle} alt="img" />
                            <span>3 Step</span>
                            <h2>We manage inventory and logistics</h2>
                            <p>We handle inventory and logistics to ensure your products are always available and delivered promptly. From inventory to shipping, we make sure everything runs smoothly so you can focus on growing your business.</p>
                            {/* @@include('../../uikit/button/_index.html',{'{'}"title":"Next step"{'}'}) */}
                        </div>
                    </div>
                    <div className='step__items'>
                        <div className='items'>
                            {/* @@include('../../uikit/ProductItemAmazon/_index.html',{'{'}"image":"img/productimg3.png","title":"Farfurie tradițională","price":"40.60 €"{'}'}) */}
                            <img src={Image.stepImg3} alt="#" />
                        </div>
                        <div className='items-info'>
                            <span>Step 4</span>
                            <h2>We track performance and optimize sales</h2>
                            <p>We constantly monitor the performance of your products and adjust sales strategies to maximize results. We analyze sales data and customer feedback to optimize listings and increase the visibility and appeal of your products on Amazon.</p>
                            {/* @@include('../../uikit/button/_index.html',{'{'}"title":"Become a partner"{'}'}) */}
                        </div>
                    </div>
                </div>
            </div>
        </section>


    )
}

export default StepIndicator
