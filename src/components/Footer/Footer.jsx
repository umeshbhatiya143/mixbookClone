import React from "react";
import ReactStars from "react-rating-stars-component";
import './Footer.css'
import Flogo from '../../img/flogo.webp'
import Plogo from '../../img/plogo.png'
import Tlogo from '../../img/tlogo.webp'
import Ilogo from '../../img/ilogo.png'
import BBB from '../../img/BBB.png'


export default function Footer() {

    return (
        <div className="Footer">
            <div className="footerUp">
                <div className="contact">
                    <h4 className="CHeading">Contact Us</h4>
                    <p>Have questions? Chat with us or email us at hello@mixbook.com. We'll be glad to help!</p>
                    <ul className="Clist" style={{ listStyleType: 'none' }}>
                        <li>Help</li>
                        <li>Returns</li>
                        <li>Shipping</li>
                        <li>Photo Book Pricing</li>
                        <li>Deals</li>
                        <li>About</li>
                        <li>Careers</li>
                        <li>Customer Stories</li>
                        <li>#1 Rated in Photo Books</li>
                        <li>Mobile App</li>
                        <li>Inspiration</li>
                    </ul>
                </div>
                <div className="prodContainer">
                    <div className="product">
                        <h4 className="PHeading">Products</h4>
                        <ul style={{ listStyleType: 'none' }}>
                            <li>Photo Books</li>
                            <li>Baby Photo Books</li>
                            <li>Travel Photo Books</li>
                            <li>Home Decor</li>
                            <li>Canvas Prints</li>
                            <li>Poster Prints</li>
                            <li>Acrylic Prints</li>
                            <li>Metal Prints</li>
                            <li>Cards</li>
                            <li>Designer Collection</li>


                        </ul>

                    </div>
                    <div className="product">

                        <ul style={{ listStyleType: 'none', marginTop: '130px' }}>
                            <li>Photo Books</li>
                            <li>Baby Photo Books</li>
                            <li>Travel Photo Books</li>
                            <li>Home Decor</li>
                            <li>Canvas Prints</li>
                            <li>Poster Prints</li>
                            <li>Acrylic Prints</li>
                            <li>Metal Prints</li>
                            <li>Cards</li>
                            <li>Designer Collection</li>

                        </ul>

                    </div>
                </div>
                <div className="product">
                    <h4 className="PHeading">Programs</h4>
                    <ul style={{ listStyleType: 'none' }}>
                        <li>For Business</li>
                        <li>School Yearbooks</li>
                        <li>Affiliate program</li>
                        <li>Volume Discounts</li>
                    </ul>
                    <h4 className="PHeading">Programs</h4>
                    <ul style={{ listStyleType: 'none' }}>
                        <li>Australia</li>
                        <li>Canada</li>
                        <li>European Union</li>
                        <li>United Kingdom</li>
                    </ul>
                </div>
            </div>

            <hr />

            <div className="footerDown">
                <div className="fleft">
                    <ReactStars
                        count={5}
                        size={24}
                        activeColor="#ffd700"
                    />
                    <br />
                    <p>No rating available</p>
                </div>
                <div className="fmiddle">
                    <h1>
                        Get Exclusive Offers And Mixbook News</h1>
                        <form action="">

                    <input type="email" name="email" id="" placeholder="EMAIL" />
                    <button className="fbtn">Sign Up</button>
                        </form>
                    <div className="socialmedia">
                         <img src={Flogo} alt="" />
                         <img src={Plogo} alt="" />
                         <img src={Tlogo} alt="" />
                         <img src={Ilogo} alt="" />
                    </div>
                    <div className="terms">
                        <ul style={{ listStyleType: 'none' }}>
                            <li>Press</li>
                            <li>Terms of Service</li>
                            <li>Privacy</li>
                            <li>Returns</li>
                        </ul>
                    </div>
                    <div className="copyright">
                        <p>&#169; 2006-2022 mixbook
                        </p>
                    </div>
                </div>
                <div className="fleft">
                    <ReactStars
                        count={5}
                        size={24}
                        activeColor="#ffd700"
                    />
                    <br />
                    <p>No rating available</p>
                    </div>
            </div>
        </div>
    )
}