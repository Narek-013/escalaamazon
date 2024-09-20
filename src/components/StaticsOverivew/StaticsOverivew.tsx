
function StaticsOverivew() {
    return (
        <section className="static-overview">
            <div className="static-overview__container _container">
                <h1>Sales Overview</h1>
                <span className="static-overview__container-span">(+5) more In 2021</span>
                <img className="static-overview__container-img" src="/img/Data.png" alt="img" />
                <div className="static-overview__container-product">
                    <h2>My products</h2>
                    <div className="static-overview__container-product__card-block">
                        <div className="static-overview__container-product__card">
                            {/* @@include('../../uikit/ProductItem/_index.html',{'{'}"image":"/img/productimg1.png"{'}'}) */}
                            {/* @@include('../../uikit/ProductItem/_index.html',{'{'}"image":"/img/productimg3.png"{'}'}) */}
                            {/* @@include('../../uikit/ProductItem/_index.html',{'{'}"image":"/img/productimg2.png"{'}'}) */}
                        </div>
                        <button className="static-overview__container-product__card-block-button">
                            <img src="/img/plus.png" alt="img" />
                            Add a New Product
                        </button>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default StaticsOverivew
