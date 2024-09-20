import React from 'react'
import { Image } from '../../Images/Image'
import { Link } from 'react-router-dom'

function Footer() {
    return (
      <footer className="footer">
        <div className="footer__container _container">
          <div className="footer__top">
            <div className="footer__logos">
              <Link to={"/"}>
                <img src={Image.footerLogo} alt="img" />
              </Link>
              <p>
                We turn manufacturers' dreams into reality, from Amazon listing to logistics management and creation LLC in USA. Let us take
                care of all the details!
              </p>
            </div>
            <div className="footer__top-title">
              <div className="footer-item">
                <h2>Company</h2>
                <ul>
                  <li>
                    <Link to="/">About Us</Link>
                  </li>
                  <li>
                    <Link to="/">Blog</Link>
                  </li>
                  <li>
                    <Link to="/">All Products</Link>
                  </li>
                  <li>
                    <Link to="/">Locations Map</Link>
                  </li>
                </ul>
              </div>
              <div className="footer-item">
                <h2>Services</h2>
                <ul>
                  <li>
                    <Link to="/">Order tracking</Link>
                  </li>
                  <li>
                    <Link to="/">Wish List</Link>
                  </li>
                  <li>
                    <Link to="/">My account</Link>
                  </li>
                  <li>
                    <Link to="/">Terms &amp; Conditions</Link>
                  </li>
                </ul>
              </div>
              <div className='footer-text'>
                <h2>Get in Touch</h2>
                <span>Subscribe to our weekly Newsletter and receive updates via email.</span>
              </div>
            </div>
          </div>
          <div className="footer__top-border" />
          <div className="footer__info">
            <p>
              All Rights Reserved <span>@ baazardeals 2021</span>
            </p>
            <div className='footer-privacy'>
              <span>
                <Link to="/">Terms &amp; Conditions</Link>
              </span>
              <span>
                <Link to="/">Privacy &amp; Policy</Link>
              </span>
            </div>
          </div>
          <div className="footer__bottom">
            <img src={Image.footerApple} alt="apple" />
            <img src={Image.footerUps} alt="ups" />
            <img src={Image.footerAmazon} alt="ups" />
            <img src={Image.footerDhl} alt="ups" />
            <img src={Image.footerFedex} alt="ups" />
          </div>
        </div>
      </footer>
    );
}

export default Footer
