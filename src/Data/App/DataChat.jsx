import React, { Component } from 'react';
import Lightbox from "react-image-lightbox";
import "react-image-lightbox/style.css";

import img1 from '../../assets/images/media/files/01.jpg';
import img2 from '../../assets/images/media/files/02.jpg';
import img3 from '../../assets/images/media/files/03.jpg';
import img4 from '../../assets/images/media/files/04.jpg';
import img5 from '../../assets/images/media/files/05.jpg';
import img6 from '../../assets/images/media/files/06.jpg';
import img7 from '../../assets/images/media/files/07.jpg';
import { Card, Col, Row } from 'react-bootstrap';


const images = [img1, img2, img3, img4, img5, img6, img7];




export class Media extends Component {
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
            <div className="">
                <h5 className="mb-3 pt-5">Media :</h5>
                <Row className="masonry list-unstyled">
                    <Col xs={6} sm={4} md={4} xl={4} className=" border-bottom-0">
                        <Card className="custom-card">
                            <img className='img-responsive br-5' src={require("../../assets/images/media/files/01.jpg")} alt='media1' onClick={() => this.setState({ isOpen: true })} />
                        </Card>
                    </Col>
                    <Col xs={6} sm={4} md={4} xl={4} className=" border-bottom-0">
                        <Card className="custom-card">
                            <img className='img-responsive br-5' src={require("../../assets/images/media/files/02.jpg")} alt='media2' onClick={() => this.setState({ isOpen: true })} />
                        </Card>
                    </Col>
                    <Col xs={6} sm={4} md={4} xl={4} className=" border-bottom-0">
                        <Card className="custom-card">
                            <img className='img-responsive br-5' src={require("../../assets/images/media/files/03.jpg")} alt='media3' onClick={() => this.setState({ isOpen: true })} />
                        </Card>
                    </Col>
                    <Col xs={6} sm={4} md={4} xl={4} className=" border-bottom-0">
                        <Card className="custom-card">
                            <img className='img-responsive br-5' src={require("../../assets/images/media/files/04.jpg")} alt='media4' onClick={() => this.setState({ isOpen: true })} />
                        </Card>
                    </Col>
                    <Col xs={6} sm={4} md={4} xl={4} className=" border-bottom-0">
                        <Card className="custom-card">
                            <img className='img-responsive br-5' src={require("../../assets/images/media/files/05.jpg")} alt='media5' onClick={() => this.setState({ isOpen: true })} />
                        </Card>
                    </Col>
                    <Col xs={6} sm={4} md={4} xl={4} className=" border-bottom-0">
                        <Card className="custom-card">
                            <img className='img-responsive br-5' src={require("../../assets/images/media/files/06.jpg")} alt='media6' onClick={() => this.setState({ isOpen: true })} />
                        </Card>
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


