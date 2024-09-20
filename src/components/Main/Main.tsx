import { Image } from "../../Images/Image"

function Main() {
    return (
        <section className="main">
            <div className="main__container _container">
                <div className="main__title">
                    <span className="sub-title">Easier impossible<img src="img/strawberry.png" alt="img" /></span>
                    <h1>Sell your products on Amazon with <br /><span>with our help</span></h1>
                    <p>We turn manufacturers' dreams into reality, from Amazon<br />listing to
                        logistics management and creation<br />LLC in USA. Let us take care of all
                        the details!</p>
                    <div className="main__title-buttons">
                        {/* @@include('../../uikit/button/_index.html',{'{'}"title":"Become a partner"{'}'}) */}
                        <button className="main-play">
                            <img src={Image.play} alt="img" />
                            <span>Find out how it works</span>
                        </button>
                    </div>
                </div>
                <div className="main__image">
                    {/* @@include('../../uikit/PositonButton/_index.html',{'{'}"image":"img/alarm.png" ,"title":"Express","time":"24h"{'}'}) */}
                    <img src={Image.mainAmazon} alt="img" />
                    {/* @@include('../../uikit/ProductItemAmazon/_index.html',{'{'}"image":"img/productimg8.png","title":"Home made plate","price":"$40.60"{'}'}) */}
                    {/* @@include('../../uikit/ProductItemAmazon/_index.html',{'{'}"image":"img/productimg3.png","title":"Handbag made with love","price":"$40.60"{'}'}) */}
                </div>
            </div>
        </section>


    )
}

export default Main
