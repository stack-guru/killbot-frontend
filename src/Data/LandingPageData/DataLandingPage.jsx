import React, { Component } from "react";
import { Col, Row } from "react-bootstrap";
import Slider from "react-slick";


export class Features extends Component {
  render() {
    const settings = {
      dots: false,
      infinite: true,
      slidesToShow: 6,
      slidesToScroll: 1,
      autoplay: true,
      speed: 2000,
      autoplaySpeed: 2000,
      cssEase: "linear",
      responsive: [
        {
          breakpoint: 320,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            infinite: true,
            dots: false,
            speed: 3000,
            autoplay: true,
          },
        },
        {
          breakpoint: 375,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            speed: 3000,
            autoplay: true,
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            speed: 3000,
            autoplay: true,
          }
        },
        ,
        {
          breakpoint: 800,
          settings: {
            slidesToShow: 4,
            slidesToScroll: 4,
            initialSlide: 2,
            infinite: true,
            speed: 3000,
            autoplay: true
          }
        },
      ]
    };
    
    return (

      <div className="indicator">
        <Slider {...settings}>
          <div className="">
            <img src={require("../../assets/images/landing/web/6.png")} alt='web-1' />
            <h5 className="mt-3 text-white">REACT</h5>
          </div>
          <div className="">
            <img src={require("../../assets/images/landing/web/5.png")} alt='web-3' />
            <h5 className="mt-3 text-white">REACT-BOOTSTRAP</h5>
          </div>
          <div className="">
            <img src={require("../../assets/images/landing/web/4.png")} alt='web-4' />
            <h5 className="mt-3 text-white">NPM</h5>
          </div>
          <div className="">
            <img src={require("../../assets/images/landing/web/8.png")} alt='web-5' />
            <h5 className="mt-3 text-white">YARN</h5>
          </div>
          <div className="">
            <img src={require("../../assets/images/landing/web/7.png")} alt='web-6' />
            <h5 className="mt-3 text-white">SASS</h5>
          </div>
          <div className="">
            <img src={require("../../assets/images/landing/web/1.png")} alt='web-7' />
            <h5 className="mt-3 text-white">CSS</h5>
          </div>
          <div className="">
            <img src={require("../../assets/images/landing/web/3.png")} alt='web-8' />
            <h5 className="mt-3 text-white">MUI</h5>
          </div>
          <div className="">
            <img src={require("../../assets/images/landing/web/2.png")} alt='web-9' />
            <h5 className="mt-3 text-white">GULP</h5>
          </div>
        </Slider>
      </div>
    );
  }
}

export class Testimonials extends Component {
  render() {
    const settings = {
      dots: false,
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 3000,
    };
    return (
      <div>
        <Slider {...settings}>

            <div className="text-center">
              <Row>
                <Col xl={8} md={12} className="d-block mx-auto">
                  <div className="testimonia">
                    <p className="text-white-80">
                      <i className="fa fa-quote-left fs-20 text-white-80"></i> Lorem ipsum dolor sit amet,
                      consectetur adipisicing elit. Quod eos id officiis hic tenetur quae quaerat
                      ad velit ab. Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Dolore cum accusamus eveniet molestias voluptatum inventore laboriosam
                      labore sit, aspernatur praesentium iste impedit quidem dolor veniam.
                    </p>
                    <h3 className="title">Elizabeth</h3>
                    <span className="post">Web Developer</span>
                    <div className="rating-stars block my-rating-5 mb-5" data-rating="4"></div>
                    
                  </div>
                </Col>
              </Row>
            </div>
            <div className="text-center">
              <div className="row">
                <div className="col-xl-8 col-md-12 d-block mx-auto">
                  <div className="testimonia">
                    <p className="text-white-80"><i className="fa fa-quote-left fs-20"></i> Nemo enim ipsam
                      voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia
                      consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque
                      porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur,
                      adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore.
                    </p>
                    <div className="testimonia-data">
                      <h3 className="title">williamson</h3>
                      <span className="post">Web Developer</span>
                      <div className="rating-stars">
                        <div className="rating-stars block my-rating-5 mb-5" data-rating="5"></div>
                        
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="text-center">
              <div className="row">
                <div className="col-xl-8 col-md-12 d-block mx-auto">
                  <div className="testimonia">
                    <p className="text-white-80"><i className="fa fa-quote-left fs-20"></i> Duis aute irure dolor
                      in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                      pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
                      officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis
                      iste natus error sit voluptatem accusantium doloremque laudantium.</p>
                    <div className="testimonia-data">
                      <h3 className="title">Sophie Carr</h3>
                      <span className="post">Web Developer</span>
                      <div className="rating-stars">
                        <div className="rating-stars block my-rating-5 mb-5" data-rating="5"></div>
                       
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

        </Slider>
      </div>
    );
  }
}

