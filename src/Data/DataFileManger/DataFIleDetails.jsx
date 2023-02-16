import React, { Component } from "react";
import Lightbox from "react-image-lightbox";
import "react-image-lightbox/style.css";
import Slider from "react-slick";

import img1 from '../../assets/images/media/files/01.jpg';
import img2 from '../../assets/images/media/files/02.jpg';
import img3 from '../../assets/images/media/files/03.jpg';
import img4 from '../../assets/images/media/files/04.jpg';
import img5 from '../../assets/images/media/files/05.jpg';
import img6 from '../../assets/images/media/files/06.jpg';

import { Col, Row, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const images = [img1, img2, img3, img4, img5, img6];

export class LightGallery extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      photoIndex: 0,
      isOpen: false
    };
  }

  render() {
    const { photoIndex, isOpen } = this.state;

    return (
      <div>
        <Row className="masonry">

          <Col xs={6} sm={4} md={4} xl={4} className="mb-5  border-bottom-0" onClick={() => this.setState({ isOpen: true })} data-sub-html="">
            <Link to="">

              <img className="img-responsive br-5" src={require("../../assets/images/media/files/01.jpg")} alt="Thumb-1" />
            </Link>
          </Col>
          <Col xs={6} sm={4} md={4} xl={4} className="mb-5 border-bottom-0" onClick={() => this.setState({ isOpen: true })} data-sub-html="<h4>Gallery Image 2</h4><p> Many desktop publishing packages and web page editors now use Lorem Ipsum</p>">
            <Link to="">
              <img className="img-responsive br-5" src={require("../../assets/images/media/files/02.jpg")} alt="Thumb-2" />
            </Link>
          </Col>
          <Col xs={6} sm={4} md={4} xl={4} className="mb-5 border-bottom-0" onClick={() => this.setState({ isOpen: true })} data-sub-html="<h4>Gallery Image 3</h4><p> Many desktop publishing packages and web page editors now use Lorem Ipsum</p>">
            <Link to="">
              <img className="img-responsive br-5" src={require("../../assets/images/media/files/03.jpg")} alt="Thumb-1" />
            </Link>
          </Col>
          <Col xs={6} sm={4} md={4} xl={4} className="mb-5 border-bottom-0" onClick={() => this.setState({ isOpen: true })} data-sub-html=" <h4>Gallery Image 4</h4><p> Many desktop publishing packages and web page editors now use Lorem Ipsum</p>">
            <Link to="">
              <img className="img-responsive br-5" src={require("../../assets/images/media/files/04.jpg")} alt="Thumb-2" />
            </Link>
          </Col>
          <Col xs={6} sm={4} md={4} xl={4} className="mb-5 border-bottom-0" onClick={() => this.setState({ isOpen: true })} data-sub-html="<h4>Gallery Image 5</h4><p> Many desktop publishing packages and web page editors now use Lorem Ipsum</p>">
            <Link to="">
              <img className="img-responsive br-5" src={require("../../assets/images/media/files/05.jpg")} alt="Thumb-1" />
            </Link>
          </Col>
          <Col xs={6} sm={4} md={4} xl={4} className="mb-5 border-bottom-0" onClick={() => this.setState({ isOpen: true })} data-sub-html="<h4>Gallery Image 6</h4><p> Many desktop publishing packages and web page editors now use Lorem Ipsum</p>">
            <Link to="">
              <img className="img-responsive br-5" src={require("../../assets/images/media/files/06.jpg")} alt="Thumb-2" />
            </Link>
          </Col>
        </Row>
        {isOpen && (
          <Lightbox
            mainSrc={images[photoIndex]}
            nextSrc={images[(photoIndex + 1) % images.length]}
            prevSrc={images[(photoIndex + images.length - 1) % images.length]}
            onCloseRequest={() => this.setState({ isOpen: false })}
            onMovePrevRequest={() =>
              this.setState({
                photoIndex: (photoIndex + images.length - 1) % images.length
              })
            }
            onMoveNextRequest={() =>
              this.setState({
                photoIndex: (photoIndex + 1) % images.length
              })
            }
          />
        )}
      </div>
    );
  }
}

export class RecentFolder extends Component {
  render() {
    const settings = {
      className: 'details',
      dots: false,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: false
        }
      },
      {
        
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
          dots:false,
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
    };
    return (
      <div>
        <Slider {...settings}>

          <div className="item p-2">
            <Card className="overflow-hidden border p-0 mb-0 bg-white">
              <Link to={`${process.env.PUBLIC_URL}/FileManager/filedetails`}><img src={require("../../assets/images/media/files/03.jpg")} alt="img" height="124" className="w-100" /></Link>
              <Card.Footer>
                <div className="d-flex">
                  <div className="">
                    <h5 className="mb-0 fw-semibold text-break">image2.jpg</h5>
                  </div>
                  <div className="ms-auto my-auto">
                    <span className="text-muted mb-0">66 KB</span>
                  </div>
                </div>
              </Card.Footer>
            </Card>
          </div>
          <div className="item p-2">
            <Card className="overflow-hidden border p-0 mb-0 bg-white">
              <Link to={`${process.env.PUBLIC_URL}/FileManager/filedetails`} className="mx-auto my-3"><img src={require("../../assets/images/media/files/documents/6.png")} alt="img" /></Link>
              <Card.Footer>
                <div className="d-flex">
                  <div className="">
                    <h5 className="mb-0 fw-semibold text-break">file.pdf</h5>
                  </div>
                  <div className="ms-auto my-auto">
                    <span className="text-muted mb-0">32 KB</span>
                  </div>
                </div>
              </Card.Footer>
            </Card>
          </div>
          <div className="item p-2">
            <Card className="overflow-hidden border p-0 mb-0 bg-white">
              <Link to={`${process.env.PUBLIC_URL}/FileManager/filedetails`}><img src={require("../../assets/images/media/files/07.jpg")} alt="img" height="124" className="w-100" /></Link>
              <Card.Footer>
                <div className="d-flex">
                  <div className="">
                    <h5 className="mb-0 fw-semibold text-break">image1.jpg</h5>
                  </div>
                  <div className="ms-auto my-auto">
                    <span className="text-muted mb-0">76 KB</span>
                  </div>
                </div>
              </Card.Footer>
            </Card>
          </div>
          <div className="item p-2">
            <Card className="overflow-hidden border p-0 mb-0 bg-white">
              <Link to={`${process.env.PUBLIC_URL}/FileManager/filedetails`} className="mx-auto my-3"><img src={require("../../assets/images/media/files/documents/2.png")} alt="img" /></Link>
              <Card.Footer>
                <div className="d-flex">
                  <div className="">
                    <h5 className="mb-0 fw-semibold text-break">excel.xls</h5>
                  </div>
                  <div className="ms-auto my-auto">
                    <span className="text-muted mb-0">34 KB</span>
                  </div>
                </div>
              </Card.Footer>
            </Card>
          </div>
          <div className="item p-2">
            <Card className="overflow-hidden border p-0 mb-0 bg-white">
              <Link to={`${process.env.PUBLIC_URL}/FileManager/filedetails`}><img src={require("../../assets/images/media/files/06.jpg")} alt="img" height="124" className="w-100" /></Link>
              <Card.Footer>
                <div className="d-flex">
                  <div className="">
                    <h5 className="mb-0 fw-semibold text-break">nature.jpg</h5>
                  </div>
                  <div className="ms-auto my-auto">
                    <span className="text-muted mb-0">66 KB</span>
                  </div>
                </div>
              </Card.Footer>
            </Card>
          </div>
          <div className="item p-2">
            <Card className="overflow-hidden border p-0 mb-0 bg-white">
              <Link to={`${process.env.PUBLIC_URL}/FileManager/filedetails`} className="mx-auto my-3"><img src={require("../../assets/images/media/files/documents/7.png")} alt="img" /></Link>
              <Card.Footer>
                <div className="d-flex">
                  <div className="">
                    <h5 className="mb-0 fw-semibold text-break">demo.ppt</h5>
                  </div>
                  <div className="ms-auto my-auto">
                    <span className="text-muted mb-0">67 KB</span>
                  </div>
                </div>
              </Card.Footer>
            </Card>
          </div>
          <div className="item p-2">
            <Card className="overflow-hidden border p-0 mb-0 bg-white">
              <Link to={`${process.env.PUBLIC_URL}/FileManager/filedetails`}><img src={require("../../assets/images/media/files/02.jpg")} alt="img" height="124" className="w-100" /></Link>
              <Card.Footer>
                <div className="d-flex">
                  <div className="d-flex">
                    <h5 className="mb-0 fw-semibold text-break">image1.jpg</h5>
                  </div>
                  <div className="ms-auto my-auto">
                    <span className="text-muted mb-0">76 KB</span>
                  </div>
                </div>
              </Card.Footer>
            </Card>
          </div>
        </Slider>

      </div>

    );
  }
}