import React, { Component } from "react";
import Slider from "react-slick";


export default class CenterMode extends Component {
    
    render() {
        const settings = {
            customPaging: function (i) {
                return (
                    <div className="thumb">
                        <img src={require(`../../assets/images/products/1${i + 1}.jpg`)} alt='products' />
                    </div>
                );
            },
            dots: true,
            dotsClass: "slick-dots slick-thumb",
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1
        };
        return (
            
            <div className=" Product-details slider-carousel">

                <Slider {...settings}>

                    
                    <div className='slider-thumb'>
                        <img src={require('../../assets/images/png/7.png')} alt='pngs-11' />
                    </div>
                    <div className='slider-thumb'>
                        <img src={require('../../assets/images/png/6.png')} alt='pngs-12' />
                    </div>
                    <div className='slider-thumb'>
                        <img src={require('../../assets/images/png/5.png')} alt='pngs-13' />
                    </div>
                    <div className='slider-thumb'>
                        <img src={require('../../assets/images/png/8.png')} alt='pngs-14' />
                    </div>
                    
                </Slider>

            </div>
        );
    }
}


export const relatedproductData = [
    {id: 4, pic: require("../../assets/images/products/3.jpg"), heading: 'Flower Pot For Home Decor', price2: '$18,299',price1: '$16,599'},
    {id: 7, pic: require("../../assets/images/products/5.jpg"), heading: 'Black Digital Camera', price2: '$56,599',price1: '$24,999'},
    {id: 2, pic: require("../../assets/images/products/8.jpg"), heading: 'Candy Pure Rose Water', price2: '$25,599',price1: '$8,099'},
    {id: 3, pic: require("../../assets/images/products/9.jpg"), heading: 'White Tshirt For Men', price2: '$18,399',price1: '$11,199'}
]