import React from "react";
import './Work.css'
import PhotoBooks from '../../img/photobooks.png'
import mobile from '../../img/mobile.png'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Pagination } from "swiper";
import "swiper/css/pagination";
import row3Image from '../../img/row3.png'

export default function Work() {

    const clients = [
        {
            img: mobile,
            heading:
                "New! Instantly Organized Travel Photos",
            desc: "Books as fun to create as your trip was to take, from the palm of your hand."
        },
        {
            img: mobile,
            heading:
                "New! Instantly Organized Travel Photos",
            desc: "Books as fun to create as your trip was to take, from the palm of your hand."
        },
        {
            img: mobile,
            heading:
                "New! Instantly Organized Travel Photos",
            desc: "Books as fun to create as your trip was to take, from the palm of your hand."
        },
    ];





    return (
        <div className="work">
            <h3>What Will You Create Today?</h3>

            <div className="row1">
                <div className="wcard">
                    <img src={PhotoBooks} alt="" />
                    <img src="" alt="" />
                    <div className="space">
                        <p>Photo Books</p>
                    </div>
                </div>
                <div className="wcard">
                    <img src={PhotoBooks} alt="" />
                    <img src="" alt="" />
                    <div className="space">
                        <p>Photo Books</p>
                    </div>
                </div>
                <div className="wcard">
                    <img src={PhotoBooks} alt="" />
                    <img src="" alt="" />
                    <div className="space">
                        <p>Photo Books</p>
                    </div>
                </div>
                <div className="wcard">
                    <img src={PhotoBooks} alt="" />
                    <img src="" alt="" />
                    <div className="space">
                        <p>Photo Books</p>
                    </div>
                </div>
            </div>

            <div className="row2">


                <Swiper
                    // install Swiper modules
                    modules={[Pagination]}
                    slidesPerView={1}
                    pagination={{ clickable: true }}
                >
                    {clients.map((client, index) => {
                        return (
                            <SwiperSlide key={index}>
                                <div className="testimonial">
                                    <img src={client.img} alt="" />
                                    <h3>{client.heading}</h3>

                                    <p>{client.desc}</p>
                                    <button className="tbtn">Learn more</button>
                                </div>
                            </SwiperSlide>
                        );
                    })}
                </Swiper>
            </div>

            <div className="row3">

                <div className="row3left">
                    <h3>100% Hapiness Guaranteed</h3>

                    <p>At Mixbook, we believe your creation experience should be fun and uncomplicated. It’s why we work hard to ensure every step of your creation process — from design to your finished product — is just the way you want it every time, or we’ll make it right.</p>
                    <button className="btn5">GET INSPIRED</button>
                </div>
                <div className="row3right">
                    <img src={row3Image} alt="" />
                </div>
            </div>

            <div className="row4">
                <h3>Meet Our Community Of Mixbookers</h3>
                <h6>Get inspired by what others are making, or add your own project to
                    Instagram for a chance to be featured here.</h6>
                <button className="btn4">GET INSPIRED</button>
            </div>

        </div>
    )
}