import React, { Component } from 'react';
import Lightbox from "react-image-lightbox";
import "react-image-lightbox/style.css";

import img1 from '../../assets/images/media/1.jpg';
import img2 from '../../assets/images/media/2.jpg';
import img3 from '../../assets/images/media/3.jpg';
import img4 from '../../assets/images/media/4.jpg';
import img5 from '../../assets/images/media/5.jpg';
import img6 from '../../assets/images/media/6.jpg';
import img7 from '../../assets/images/media/7.jpg';
import img8 from '../../assets/images/media/8.jpg';
import img9 from '../../assets/images/media/9.jpg';
import img10 from '../../assets/images/media/10.jpg';
import img11 from '../../assets/images/media/11.jpg';
import { Col, Row } from 'react-bootstrap';


const images = [ img1, img2, img3, img4, img5, img6, img7, img8, img9, img10, img11 ];
  
  


export class LightGallery extends Component {
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
      <Col xs={6} sm={4} md={4} xl={3} className="brick">
        <img src={require("../../assets/images/media/1.jpg")} alt='media1' onClick={() => this.setState({ isOpen: true })}/>
        </Col>
        <Col xs={6} sm={4} md={4} xl={3}  className="brick">
        <img src={require("../../assets/images/media/2.jpg")} alt='media2' onClick={() => this.setState({ isOpen: true })}/>
        </Col>
        <Col xs={6} sm={4} md={4} xl={3}  className="brick">
         <img src={require("../../assets/images/media/3.jpg")} alt='media3' onClick={() => this.setState({ isOpen: true })}/>
         </Col>
         <Col xs={6} sm={4} md={4} xl={3}  className="brick">
         <img src={require("../../assets/images/media/4.jpg")} alt='media4' onClick={() => this.setState({ isOpen: true })}/>
         </Col>
         <Col xs={6} sm={4} md={4} xl={4}  className="brick">
         <img src={require("../../assets/images/media/5.jpg")} alt='media5' onClick={() => this.setState({ isOpen: true })}/>
         </Col>
         <Col xs={6} sm={4} md={4} xl={4} className="brick">
         <img src={require("../../assets/images/media/6.jpg")} alt='media6' onClick={() => this.setState({ isOpen: true })}/>
         </Col>
         <Col xs={6} sm={4} md={4} xl={4} className="brick">
         <img src={require("../../assets/images/media/7.jpg")} alt='media7' onClick={() => this.setState({ isOpen: true })}/>
         </Col>
         <Col xs={6} sm={4} md={4} xl={3} className="brick">
         <img src={require("../../assets/images/media/8.jpg")} alt='media8' onClick={() => this.setState({ isOpen: true })}/>
         </Col>
         <Col xs={6} sm={4} md={4} xl={3} className="brick">
         <img src={require("../../assets/images/media/9.jpg")} alt='media9' onClick={() => this.setState({ isOpen: true })}/>
         </Col>
         <Col xs={6} sm={4} md={4} xl={3} className="brick">
         <img src={require("../../assets/images/media/10.jpg")} alt='media10' onClick={() => this.setState({ isOpen: true })}/>
         </Col>
         <Col xs={6} sm={4} md={4} xl={3} className="brick">
         <img src={require("../../assets/images/media/11.jpg")} alt='media11' onClick={() => this.setState({ isOpen: true })}/>
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