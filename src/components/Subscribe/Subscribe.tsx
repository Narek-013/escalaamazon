import { Image } from "../../Images/Image"

function Subscribe() {
    return (
        <section className="subscribe" style={{backgroundImage: `url(${Image.subscribeBack})`}}>
            <div className="subscribe__container _container">
                <p>NEWSLETTER</p>
                <h2>Subscribe for offers and updates!</h2>
                <div className="subscribe-input">
                    <input type="text" placeholder="Your email and you're ready" />
                    <button>Subscribe</button>
                    <img className="polygon-img" src={Image.subscribePolygon} alt="img" />
                    <img src={Image.subscribeEllipse} alt="img" />
                </div>
            </div>
        </section>
    )
}

export default Subscribe
