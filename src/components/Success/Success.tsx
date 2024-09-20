import React from 'react'
import { Image } from '../../Images/Image'
import SuccsessButton from '../../uikit/SuccsessButton/SuccsessButton'
import SuccsessItem from '../../uikit/SuccsessItem/SuccsessItem'

function Success() {
    return (
        <section className="succsess">
            <div className="succsess__container _container">
                <img className="succsess-img" src={Image.succsesImg} alt="img" />
                <div className="succsess-top">
                    <h2>Success stories</h2>
                    <h5>
                        We are proud of our customers' success. Find out how we've helped
                        businesses like yours bring their handmade products to the US market and
                        increase sales on Amazon. Every success story is a testament to our
                        dedication and expertise.
                    </h5>
                    <div className="succsess-items">
                        <SuccsessItem title='Artisan from Oslo' image={Image.succsesim2} text='Maria, an artisan from Oslo, created unique handmade jewelry, but had difficulty expanding her business internationally.' />
                        <SuccsessItem title='Craftsmen from Dorotea' image={Image.succsesimg} text="A group of craftsmen from Dorotea wanted to sell their traditional handicrafts outside of Norway , but they didn't know where to start." />
                        <SuccsessItem title='Furniture Maker' btnClass='succsess__container-items-active' image={Image.succsesim2} text='Alex, a designer of handmade furniture, wanted to tap into the American market but faced logistical and marketing challenges.' />
                    </div>
                </div>
                <button className="succsess-button">Discover  more cases <img src={Image.succsesBtn} alt="img" /></button>
            </div>
        </section>
    )
}

export default Success
