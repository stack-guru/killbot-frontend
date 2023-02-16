import React, { useState } from 'react';
import { Card, Row, Col, Form, Collapse } from 'react-bootstrap';
import styles from './Carousels.module.scss';
import PageHeader from '../../../Layouts/PageHeader/PageHeader';
import { Carousel } from "react-bootstrap";
import Slider from "react-slick";

const Carousels = () => {

  const [Default, setDefault] = useState(false);
  const [Indicator, setIndicator] = useState(false);
  const [Arrow, setArrow] = useState(false);
  const [Bootstrap, setBootstrap] = useState(false);
  const [Top, setTop] = useState(false);
  const [TopRight, setTopRight] = useState(false);
  const [TopLeft, setTopLeft] = useState(false);
  const [BottomRight, setBottomRight] = useState(false);
  const [BottomLeft, setBottomLeft] = useState(false);
  const [BG, setBG] = useState(false);
  const [GradientBG, setGradientBG] = useState(false);



  // Default Carousel

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 2000,
    cssEase: "linear",
  };


  // Carousel with indicators

  const indicater = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 2000,
    cssEase: "linear"
  };

  //  Carousel with controls

  const control = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    autoplay: false,
    autoplaySpeed: 2000,
    cssEase: "linear"
  };

  // Carousel with top indicators

  const indicatingTop = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 2000,
    cssEase: "linear"
  };

  // Carousel with top-right indicators

  const indicaterTopright = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 2000,
    cssEase: "linear"
  };

  // Carousel with top-left indicators

  const leftIndicator = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 2000,
    cssEase: "linear"
  };

  // Carousel with bottom-right indicators

  const bottomRight = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 2000,
    cssEase: "linear"
  };

  // Carousel with bottom-left indicators

  const bottomLeft = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 2000,
    cssEase: "linear"
  };
  return (

    <div className={styles.Carousel}>
      <PageHeader titles="Carousel" active="Carousel" items={['Advanced Elements']} />
      {/* <!-- ROW-1 OPEN --> */}
      <Row>
        <Col lg={6} xl={4}>
          <Card>
            <Card.Header >
              <Card.Title as="h3">Default Carousel</Card.Title>
              <Form className="ms-auto">
                <Form.Check type="switch" label="Show Code" id="custom-switch" onClick={() => setDefault(!Default)} className="showcode d-flex ms-auto mx-2" />
              </Form>
            </Card.Header>
            <Card.Body className="h-100">

              <Slider {...settings}>

                <img className="d-block w-100 br-5" alt="" src={require("../../../assets/images/media/19.jpg")} data-bs-holder-rendered="true" />

                <img className="d-block w-100 br-5" alt="" src={require("../../../assets/images/media/20.jpg")} data-bs-holder-rendered="true" />

                <img className="d-block w-100 br-5" alt="" src={require("../../../assets/images/media/21.jpg")} data-bs-holder-rendered="true" />

                <img className="d-block w-100 br-5" alt="" src={require("../../../assets/images/media/22.jpg")} data-bs-holder-rendered="true" />

                <img className="d-block w-100 br-5" alt="" src={require("../../../assets/images/media/23.jpg")} data-bs-holder-rendered="true" />

              </Slider>
              <Collapse in={Default} className="mt-2">
                <pre>
                  <code>
                    {`
 export class DefaultCarousel extends Component {
  render() {
      const settings = {
          dots: false,
          infinite: true,
          speed: 500,
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
          autoplay: true,
          autoplaySpeed: 2000,
          cssEase: "linear",
      };
      return (
          <div>
              <Slider {...settings}>

                          <img className="d-block w-100 br-5" alt="" src={require("../../assets/images/media/19.jpg")} data-bs-holder-rendered="true" />

                          <img className="d-block w-100 br-5" alt="" src={require("../../assets/images/media/20.jpg")} data-bs-holder-rendered="true" />

                          <img className="d-block w-100 br-5" alt="" src={require("../../assets/images/media/21.jpg")} data-bs-holder-rendered="true" />

                          <img className="d-block w-100 br-5" alt="" src={require("../../assets/images/media/22.jpg")} data-bs-holder-rendered="true" />

                          <img className="d-block w-100 br-5" alt="" src={require("../../assets/images/media/23.jpg")} data-bs-holder-rendered="true" />

              </Slider>
          </div>
      );
  }
}

`}
                  </code>
                </pre>
              </Collapse>
            </Card.Body>

          </Card>
        </Col>
        <Col lg={6} xl={4}>
          <Card>
            <Card.Header>
              <Card.Title as="h3">Carousel with indicators</Card.Title>
              <Form className="ms-auto">
                <Form.Check type="switch" label="Show Code" id="custom-switch" onClick={() => setIndicator(!Indicator)} className="showcode d-flex ms-auto mx-2" />
              </Form>
            </Card.Header>
            <Card.Body className="h-100">
              <Slider {...indicater}>

                <img className="d-block w-100 br-5" alt="" src={require("../../../assets/images/media/24.jpg")} />

                <img className="d-block w-100 br-5" alt="" src={require("../../../assets/images/media/25.jpg")} />

                <img className="d-block w-100 br-5" alt="" src={require("../../../assets/images/media/1.jpg")} />

                <img className="d-block w-100 br-5" alt="" src={require("../../../assets/images/media/2.jpg")} />

                <img className="d-block w-100 br-5" alt="" src={require("../../../assets/images/media/3.jpg")} />
              </Slider>
              <Collapse in={Indicator} className="mt-2">
                <pre>
                  <code>
                    {`
  export class CarouselwithIndicator extends Component {
    render() {
        const settings = {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false,
            autoplay: true,
            autoplaySpeed: 2000,
            cssEase: "linear"
        };
        return (
            <div>
                <Slider {...settings}>

                            <img className="d-block w-100 br-5" alt="" src={require("../../assets/images/media/24.jpg")}/>

                            <img className="d-block w-100 br-5" alt="" src={require("../../assets/images/media/25.jpg")}/>

                            <img className="d-block w-100 br-5" alt="" src={require("../../assets/images/media/1.jpg")}/>

                            <img className="d-block w-100 br-5" alt="" src={require("../../assets/images/media/2.jpg")}/>

                            <img className="d-block w-100 br-5" alt="" src={require("../../assets/images/media/3.jpg")}/>
                </Slider>
            </div>
        );
    }
}
`}
                  </code>
                </pre>
              </Collapse>
            </Card.Body>
          </Card>
        </Col>
        <Col lg={6} xl={4}>
          <Card>
            <Card.Header>
              <Card.Title as="h3">Carousel with controls</Card.Title>
              <Form className="ms-auto">
                <Form.Check type="switch" label="Show Code" id="custom-switch" onClick={() => setArrow(!Arrow)} className="showcode d-flex ms-auto mx-2" />
              </Form>
            </Card.Header>
            <Card.Body className="h-100">
              <Slider {...control}>

                <img className="d-block w-100 br-5" alt="" src={require("../../../assets/images/media/4.jpg")} />

                <img className="d-block w-100 br-5" alt="" src={require("../../../assets/images/media/5.jpg")} />

                <img className="d-block w-100 br-5" alt="" src={require("../../../assets/images/media/6.jpg")} />

                <img className="d-block w-100 br-5" alt="" src={require("../../../assets/images/media/7.jpg")} />

                <img className="d-block w-100 br-5" alt="" src={require("../../../assets/images/media/8.jpg")} />


              </Slider>
              <Collapse in={Arrow} className="mt-2">
                <pre>
                  <code>
                    {`
  export class CarouselwithControls extends Component {
    render() {
        const settings = {
            dots: false,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: true,
            autoplay: false,
            autoplaySpeed: 2000,
            cssEase: "linear"
        };
        return (
            <div>
                <Slider {...settings}>
                
                            <img className="d-block w-100 br-5" alt="" src={require("../../assets/images/media/4.jpg")}/>

                            <img className="d-block w-100 br-5" alt="" src={require("../../assets/images/media/5.jpg")}/>

                            <img className="d-block w-100 br-5" alt="" src={require("../../assets/images/media/6.jpg")}/>

                            <img className="d-block w-100 br-5" alt="" src={require("../../assets/images/media/7.jpg")}/>

                            <img className="d-block w-100 br-5" alt="" src={require("../../assets/images/media/8.jpg")}/>


                </Slider>
            </div>
        );
    }
}

`}
                  </code>
                </pre>
              </Collapse>
            </Card.Body>
          </Card>
        </Col>
        <Col lg={6} xl={4}>
          <Card>
            <Card.Header>
              <Card.Title as="h3">Carousel with captions</Card.Title>
              <Form className="ms-auto">
                <Form.Check type="switch" label="Show Code" id="custom-switch" onClick={() => setBootstrap(!Bootstrap)} className="showcode d-flex ms-auto mx-2" />
              </Form>
            </Card.Header>
            <Card.Body className="h-100">
              <Carousel>
                <Carousel.Item>
                  <img
                    className="d-block w-100 br-5 active"
                    src={require("../../../assets/images/media/9.jpg")}
                    alt="First slide"
                  />
                  <Carousel.Caption>
                    <h3>Slide label</h3>
                    <p>Secure other greater pleasures</p>
                  </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className="d-block w-100 br-5"
                    src={require("../../../assets/images/media/10.jpg")}
                    alt="Second slide"
                  />

                  <Carousel.Caption>
                    <h3>Slide label</h3>
                    <p>Secure other greater pleasures</p>
                  </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className="d-block w-100 br-5"
                    src={require("../../../assets/images/media/11.jpg")}
                    alt="Third slide"
                  />

                  <Carousel.Caption>
                    <h3>Slide label</h3>
                    <p>Secure other greater pleasures</p>
                  </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className="d-block w-100 br-5"
                    src={require("../../../assets/images/media/12.jpg")}
                    alt="Third slide"
                  />

                  <Carousel.Caption>
                    <h3>Slide label</h3>
                    <p>Secure other greater pleasures</p>
                  </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className="d-block w-100 br-5"
                    src={require("../../../assets/images/media/13.jpg")}
                    alt="Third slide"
                  />

                  <Carousel.Caption>
                    <h3>Slide label</h3>
                    <p>Secure other greater pleasures</p>
                  </Carousel.Caption>
                </Carousel.Item>
              </Carousel>
              <Collapse in={Bootstrap} className="mt-2">
                <pre>
                  <code>
                    {`
 export function CarouselwithCaption() {

  return (
<Carousel>
  <Carousel.Item>
      <img
          className="d-block w-100 br-5 active"
          src={require("../../assets/images/media/9.jpg")}
          alt="First slide"
      />
      <Carousel.Caption>
      <h3>Slide label</h3>
      <p>Secure other greater pleasures</p>
      </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
      <img
          className="d-block w-100 br-5"
          src={require("../../assets/images/media/10.jpg")}
          alt="Second slide"
      />

      <Carousel.Caption>
      <h3>Slide label</h3>
      <p>Secure other greater pleasures</p>
      </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
      <img
          className="d-block w-100 br-5"
          src={require("../../assets/images/media/11.jpg")}
          alt="Third slide"
      />
      
      <Carousel.Caption>
      <h3>Slide label</h3>
      <p>Secure other greater pleasures</p>
      </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
      <img
          className="d-block w-100 br-5"
          src={require("../../assets/images/media/12.jpg")}
          alt="Third slide"
      />
      
      <Carousel.Caption>
      <h3>Slide label</h3>
      <p>Secure other greater pleasures</p>
      </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
      <img
          className="d-block w-100 br-5"
          src={require("../../assets/images/media/13.jpg")}
          alt="Third slide"
      />
      
      <Carousel.Caption>
      <h3>Slide label</h3>
      <p>Secure other greater pleasures</p>
      </Carousel.Caption>
  </Carousel.Item>
</Carousel>
)
}

`}
                  </code>
                </pre>
              </Collapse>
            </Card.Body>
          </Card>
        </Col>
        <Col lg={6} xl={4}>
          <Card>
            <Card.Header>
              <Card.Title as="h3">Carousel with top indicators</Card.Title>
              <Form className="ms-auto">
                <Form.Check type="switch" label="Show Code" id="custom-switch" onClick={() => setTop(!Top)} className="showcode d-flex ms-auto mx-2" />
              </Form>
            </Card.Header>
            <Card.Body className="h-100">
              <div id="carousel-indicators1" className="carousel slide" data-bs-ride="carousel">
                <div className="Top">
                  <Slider {...indicatingTop}>

                    <img className="d-block w-100 br-5" alt="" src={require("../../../assets/images/media/14.jpg")} />

                    <img className="d-block w-100 br-5" alt="" src={require("../../../assets/images/media/15.jpg")} />

                    <img className="d-block w-100 br-5" alt="" src={require("../../../assets/images/media/16.jpg")} />

                    <img className="d-block w-100 br-5" alt="" src={require("../../../assets/images/media/17.jpg")} />

                    <img className="d-block w-100 br-5" alt="" src={require("../../../assets/images/media/18.jpg")} />


                  </Slider>
                </div>
              </div>
              <Collapse in={Top} className="mt-2">
                <pre>
                  <code>
                    {`
 export class CarouselwithTopIndicator extends Component {
  render() {
      const settings = {
          dots: true,
          infinite: true,
          speed: 500,
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
          autoplay: true,
          autoplaySpeed: 2000,
          cssEase: "linear"
      };
      return (
          <div className="Top">
              <Slider {...settings}>

                          <img className="d-block w-100 br-5" alt="" src={require("../../assets/images/media/14.jpg")}/>

                          <img className="d-block w-100 br-5" alt="" src={require("../../assets/images/media/15.jpg")}/>

                          <img className="d-block w-100 br-5" alt="" src={require("../../assets/images/media/16.jpg")}/>

                          <img className="d-block w-100 br-5" alt="" src={require("../../assets/images/media/17.jpg")}/>

                          <img className="d-block w-100 br-5" alt="" src={require("../../assets/images/media/18.jpg")}/>
              </Slider>
          </div>
      );
  }
}

`}
                  </code>
                </pre>
              </Collapse>
            </Card.Body>
          </Card>
        </Col>
        <Col lg={6} xl={4}>
          <Card>
            <Card.Header>
              <Card.Title as="h3">Carousel with top-right indicators</Card.Title>
              <Form className="ms-auto">
                <Form.Check type="switch" label="Show Code" id="custom-switch" onClick={() => setTopRight(!TopRight)} className="showcode d-flex ms-auto mx-2" />
              </Form>
            </Card.Header>
            <Card.Body className="h-100">
              <div id="carousel-indicators2" className="carousel slide" data-bs-ride="carousel">


                <div className="Top-right">
                  <Slider {...indicaterTopright}>

                    <img className="d-block w-100 br-5" alt="" src={require("../../../assets/images/media/19.jpg")} />

                    <img className="d-block w-100 br-5" alt="" src={require("../../../assets/images/media/20.jpg")} />

                    <img className="d-block w-100 br-5" alt="" src={require("../../../assets/images/media/21.jpg")} />

                    <img className="d-block w-100 br-5" alt="" src={require("../../../assets/images/media/22.jpg")} />

                    <img className="d-block w-100 br-5" alt="" src={require("../../../assets/images/media/23.jpg")} />

                  </Slider>
                </div>
              </div>
              <Collapse in={TopRight} className="mt-2">
                <pre>
                  <code>
                    {`
 export class CarouselwithTopRightIndicator extends Component {
  render() {
      const settings = {
          dots: true,
          infinite: true,
          speed: 500,
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
          autoplay: true,
          autoplaySpeed: 2000,
          cssEase: "linear"
      };
      return (
          <div className="Top-right">
              <Slider {...settings}>

                          <img className="d-block w-100 br-5" alt="" src={require("../../assets/images/media/19.jpg")}/>

                          <img className="d-block w-100 br-5" alt="" src={require("../../assets/images/media/20.jpg")}/>

                          <img className="d-block w-100 br-5" alt="" src={require("../../assets/images/media/21.jpg")}/>

                          <img className="d-block w-100 br-5" alt="" src={require("../../assets/images/media/22.jpg")}/>

                          <img className="d-block w-100 br-5" alt="" src={require("../../assets/images/media/23.jpg")}/>
              </Slider>
          </div>
      );
  }
}

`}
                  </code>
                </pre>
              </Collapse>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      {/* <!-- ROW-1 CLOSED --> */}

      {/* <!-- ROW-2 OPEN --> */}
      <Row>
        <Col lg={6} xl={4}>
          <Card>
            <Card.Header>
              <Card.Title as="h3">Carousel with top-left indicators</Card.Title>
              <Form className="ms-auto">
                <Form.Check type="switch" label="Show Code" id="custom-switch" onClick={() => setTopLeft(!TopLeft)} className="showcode d-flex ms-auto mx-2" />
              </Form>
            </Card.Header>
            <Card.Body className="h-100">
              <div id="carousel-indicators3" className="carousel slide" data-bs-ride="carousel">
                <div className="Top-left">
                  <Slider {...leftIndicator}>

                    <img className="d-block w-100 br-5" alt="" src={require("../../../assets/images/media/24.jpg")} />

                    <img className="d-block w-100 br-5" alt="" src={require("../../../assets/images/media/25.jpg")} />

                    <img className="d-block w-100 br-5" alt="" src={require("../../../assets/images/media/1.jpg")} />

                    <img className="d-block w-100 br-5" alt="" src={require("../../../assets/images/media/2.jpg")} />

                    <img className="d-block w-100 br-5" alt="" src={require("../../../assets/images/media/3.jpg")} />
                  </Slider>
                </div>
              </div>
              <Collapse in={TopLeft} className="mt-2">
                <pre>
                  <code>
                    {`
 export class CarouselwithTopLeftIndicator extends Component {
  render() {
      const settings = {
          dots: true,
          infinite: true,
          speed: 500,
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
          autoplay: true,
          autoplaySpeed: 2000,
          cssEase: "linear"
      };
      return (
          <div className="Top-left">
              <Slider {...settings}>

                          <img className="d-block w-100 br-5" alt="" src={require("../../assets/images/media/24.jpg")}/>

                          <img className="d-block w-100 br-5" alt="" src={require("../../assets/images/media/25.jpg")}/>

                          <img className="d-block w-100 br-5" alt="" src={require("../../assets/images/media/1.jpg")}/>

                          <img className="d-block w-100 br-5" alt="" src={require("../../assets/images/media/2.jpg")}/>

                          <img className="d-block w-100 br-5" alt="" src={require("../../assets/images/media/3.jpg")}/>
              </Slider>
          </div>
      );
  }
}

`}
                  </code>
                </pre>
              </Collapse>
            </Card.Body>
          </Card>
        </Col>
        {/* <!-- COL-END --> */}
        <Col lg={6} xl={4}>
          <Card>
            <Card.Header>
              <Card.Title as="h3">Carousel with bottom-right indicators</Card.Title>
              <Form className="ms-auto">
                <Form.Check type="switch" label="Show Code" id="custom-switch" onClick={() => setBottomRight(!BottomRight)} className="showcode d-flex ms-auto mx-2" />
              </Form>
            </Card.Header>
            <Card.Body className="h-100">
              <div id="carousel-indicators4" className="carousel slide" data-bs-ride="carousel">

                <Slider {...bottomRight}>

                  <img className="d-block w-100 br-5" alt="" src={require("../../../assets/images/media/4.jpg")} />

                  <img className="d-block w-100 br-5" alt="" src={require("../../../assets/images/media/5.jpg")} />

                  <img className="d-block w-100 br-5" alt="" src={require("../../../assets/images/media/6.jpg")} />

                  <img className="d-block w-100 br-5" alt="" src={require("../../../assets/images/media/7.jpg")} />

                  <img className="d-block w-100 br-5" alt="" src={require("../../../assets/images/media/8.jpg")} />
                </Slider>
              </div>
              <Collapse in={BottomRight} className="mt-2">
                <pre>
                  <code>
                    {`
 export class CarouselwithbottomRightIndicator extends Component {
  render() {
      const settings = {
          dots: true,
          infinite: true,
          speed: 500,
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
          autoplay: true,
          autoplaySpeed: 2000,
          cssEase: "linear"
      };
      return (
          <div className="bottom-right">
              <Slider {...settings}>

                          <img className="d-block w-100 br-5" alt="" src={require("../../assets/images/media/4.jpg")}/>

                          <img className="d-block w-100 br-5" alt="" src={require("../../assets/images/media/5.jpg")}/>

                          <img className="d-block w-100 br-5" alt="" src={require("../../assets/images/media/6.jpg")}/>

                          <img className="d-block w-100 br-5" alt="" src={require("../../assets/images/media/7.jpg")}/>

                          <img className="d-block w-100 br-5" alt="" src={require("../../assets/images/media/8.jpg")}/>
              </Slider>
          </div>
      );
  }
}

`}
                  </code>
                </pre>
              </Collapse>
            </Card.Body>
          </Card>
        </Col>
        {/* <!-- COL-END --> */}
        <Col lg={6} xl={4}>
          <Card>
            <Card.Header>
              <Card.Title as="h3">Carousel with bottom-left indicators</Card.Title>
              <Form className="ms-auto">
                <Form.Check type="switch" label="Show Code" id="custom-switch" onClick={() => setBottomLeft(!BottomLeft)} className="showcode d-flex ms-auto mx-2" />
              </Form>
            </Card.Header>
            <Card.Body className="h-100">
              <div id="carousel-indicators5" className="carousel slide" data-bs-ride="carousel">
                <Slider {...bottomLeft}>

                  <img className="d-block w-100 br-5" alt="" src={require("../../../assets/images/media/9.jpg")} />

                  <img className="d-block w-100 br-5" alt="" src={require("../../../assets/images/media/10.jpg")} />

                  <img className="d-block w-100 br-5" alt="" src={require("../../../assets/images/media/11.jpg")} />

                  <img className="d-block w-100 br-5" alt="" src={require("../../../assets/images/media/12.jpg")} />

                  <img className="d-block w-100 br-5" alt="" src={require("../../../assets/images/media/13.jpg")} />
                </Slider>
              </div>
              <Collapse in={BottomLeft} className="mt-2">
                <pre>
                  <code>
                    {`
 export class CarouselwithbottomLeftIndicator extends Component {
  render() {
      const settings = {
          dots: true,
          infinite: true,
          speed: 500,
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
          autoplay: true,
          autoplaySpeed: 2000,
          cssEase: "linear"
      };
      return (
          <div className="bottom-left">
              <Slider {...settings}>

                          <img className="d-block w-100 br-5" alt="" src={require("../../assets/images/media/9.jpg")}/>

                          <img className="d-block w-100 br-5" alt="" src={require("../../assets/images/media/10.jpg")}/>

                          <img className="d-block w-100 br-5" alt="" src={require("../../assets/images/media/11.jpg")}/>

                          <img className="d-block w-100 br-5" alt="" src={require("../../assets/images/media/12.jpg")}/>

                          <img className="d-block w-100 br-5" alt="" src={require("../../assets/images/media/13.jpg")}/>
              </Slider>
          </div>
      );
  }
}

`}
                  </code>
                </pre>
              </Collapse>
            </Card.Body>
          </Card>
        </Col>
        {/* <!-- COL-END --> */}
        <div className="col-md-12 col-lg-6">
          <Card>
            <Card.Header>
              <Card.Title as="h3">Carousel with Background color captions</Card.Title>
              <Form className="ms-auto">
                <Form.Check type="switch" label="Show Code" id="custom-switch" onClick={() => setBG(!BG)} className="showcode d-flex ms-auto mx-2" />
              </Form>
            </Card.Header>
            <Card.Body className="h-100">
              <Carousel>
                <Carousel.Item>
                  <img
                    className="d-block w-100 br-5 active"
                    src={require("../../../assets/images/media/backgrounds/3.jpg")}
                    alt="First slide"
                  />
                  <Carousel.Caption>
                    <h3>Slide label</h3>
                    <p>The wise man therefore always holds in these matters to this principle of selection he rejects pleasures.</p>
                  </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className="d-block w-100 br-5"
                    src={require("../../../assets/images/media/backgrounds/1.jpg")}
                    alt="Second slide"
                  />

                  <Carousel.Caption>
                    <h3>Slide label</h3>
                    <p>The wise man therefore always holds in these matters to this principle of selection he rejects pleasures.</p>
                  </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className="d-block w-100 br-5"
                    src={require("../../../assets/images/media/backgrounds/2.jpg")}
                    alt="Third slide"
                  />

                  <Carousel.Caption>
                    <h3>Slide label</h3>
                    <p>The wise man therefore always holds in these matters to this principle of selection he rejects pleasures.</p>
                  </Carousel.Caption>
                </Carousel.Item>
              </Carousel>
              <Collapse in={BG} className="mt-2">
                <pre>
                  <code>
                    {`
export function CarouselwithBackgroundColorCaption() {

  return (
<Carousel>
  <Carousel.Item>
      <img
          className="d-block w-100 br-5 active"
          src={require("../../assets/images/media/backgrounds/3.jpg")}
          alt="First slide"
      />
      <Carousel.Caption>
      <h3>Slide label</h3>
      <p>The wise man therefore always holds in these matters to this principle of selection he rejects pleasures.</p>
      </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
      <img
          className="d-block w-100 br-5"
          src={require("../../assets/images/media/backgrounds/1.jpg")}
          alt="Second slide"
      />

      <Carousel.Caption>
      <h3>Slide label</h3>
      <p>The wise man therefore always holds in these matters to this principle of selection he rejects pleasures.</p>
      </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
      <img
          className="d-block w-100 br-5"
          src={require("../../assets/images/media/backgrounds/2.jpg")}
          alt="Third slide"
      />
      
      <Carousel.Caption>
      <h3>Slide label</h3>
      <p>The wise man therefore always holds in these matters to this principle of selection he rejects pleasures.</p>
      </Carousel.Caption>
  </Carousel.Item>
</Carousel>
)
}
`}
                  </code>
                </pre>
              </Collapse>
            </Card.Body>
          </Card>
        </div>
        {/* <!-- COL-END --> */}
        <div className="col-md-12 col-lg-6">
          <Card>
            <Card.Header>
              <Card.Title as="h3">Carousel with GradientBackground caption</Card.Title>
              <Form className="ms-auto">
                <Form.Check type="switch" label="Show Code" id="custom-switch" onClick={() => setGradientBG(!GradientBG)} className="showcode d-flex ms-auto mx-2" />
              </Form>
            </Card.Header>
            <Card.Body className="h-100">
              <Carousel>
                <Carousel.Item>
                  <img
                    className="d-block w-100 br-5 active"
                    src={require("../../../assets/images/media/backgrounds/4.jpg")}
                    alt="First slide"
                  />
                  <Carousel.Caption>
                    <h3>Slide label</h3>
                    <p>The wise man therefore always holds in these matters to this principle of selection he rejects pleasures.</p>
                  </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className="d-block w-100 br-5"
                    src={require("../../../assets/images/media/backgrounds/5.jpg")}
                    alt="Second slide"
                  />

                  <Carousel.Caption>
                    <h3>Slide label</h3>
                    <p>The wise man therefore always holds in these matters to this principle of selection he rejects pleasures.</p>
                  </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className="d-block w-100 br-5"
                    src={require("../../../assets/images/media/backgrounds/6.jpg")}
                    alt="Third slide"
                  />

                  <Carousel.Caption>
                    <h3>Slide label</h3>
                    <p>The wise man therefore always holds in these matters to this principle of selection he rejects pleasures.</p>
                  </Carousel.Caption>
                </Carousel.Item>
              </Carousel>
              <Collapse in={GradientBG} className="mt-2">
                <pre>
                  <code>
                    {`
 export function CarouselwithGradientBackgroundCaption() {

  return (
<Carousel>
  <Carousel.Item>
      <img
          className="d-block w-100 br-5 active"
          src={require("../../assets/images/media/backgrounds/4.jpg")}
          alt="First slide"
      />
      <Carousel.Caption>
      <h3>Slide label</h3>
      <p>The wise man therefore always holds in these matters to this principle of selection he rejects pleasures.</p>
      </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
      <img
          className="d-block w-100 br-5"
          src={require("../../assets/images/media/backgrounds/5.jpg")}
          alt="Second slide"
      />

      <Carousel.Caption>
      <h3>Slide label</h3>
      <p>The wise man therefore always holds in these matters to this principle of selection he rejects pleasures.</p>
      </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
      <img
          className="d-block w-100 br-5"
          src={require("../../assets/images/media/backgrounds/6.jpg")}
          alt="Third slide"
      />
      
      <Carousel.Caption>
      <h3>Slide label</h3>
      <p>The wise man therefore always holds in these matters to this principle of selection he rejects pleasures.</p>
      </Carousel.Caption>
  </Carousel.Item>
</Carousel>
)
}

`}
                  </code>
                </pre>
              </Collapse>
            </Card.Body>
          </Card>
        </div>
        {/* <!-- COL-END --> */}
      </Row>
      {/* <!-- ROW-2 CLOSED --> */}
    </div>
  )
};

export default Carousels;
