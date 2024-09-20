function LocalProducers() {
    return (
        <section className="local_products">
            <div className="local_products__container _container">
                <img className="local_products__container-img" src="/img/localimg3.png" alt="img" />
                <img className="local_products__container-img-left" src="/img/localimg3.png" alt="img" />
                <h2>We support local producers</h2>
                <p>
                    We are passionate about supporting local producers to bring their unique
                    products to a global audience on Amazon. With our full services, you can
                    focus on what you do best – creating quality products – while we take care
                    of the rest.
                </p>
                <div className="local_products__card">
                    <div className="local_products__card-item">
                        <div className="local_products__card-active">
                            <img src="/img/localimg2.png" alt="img" />
                            <p>Marketing Consulting</p>
                            <span>We are dedicated to understanding your product in depth. Before
                                launching it into the market, we develop a well-thought-out
                                marketing strategy, ensuring that your product is ready to capture
                                the attention and interest of consumers.</span>
                        </div>
                        <div className="local_products__card-hover" />
                    </div>
                    <div className="local_products__card-item">
                        <div className="local_products__card-active">
                            <img src="/img/localimg1.png" alt="img" />
                            <p>Amazon publishing</p>
                            <span>We take care of the entire process of publishing your products on
                                Amazon. From creating listings and optimizing descriptions, to
                                managing inventory and pricing, we make sure your product is
                                presented in its best light.</span>
                        </div>
                        <div className="local_products__card-hover" />
                    </div>
                    <div className="local_products__card-item">
                        <div className="local_products__card-active">
                            <img src="/img/localimg.png" alt="img" />
                            <p>Logistics and consulting</p>
                            <span>All logistics are in our expert hands. We handle inventory
                                management, packing and shipping, ensuring that products reach your
                                customers quickly and safely. In addition, we provide after-sales
                                services to maintain customer satisfaction and encourage positive
                                reviews.</span>
                        </div>
                        <div className="local_products__card-hover" />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default LocalProducers
