import React from 'react';
import { Row, Col, Card } from 'react-bootstrap';
import PageHeader from '../../../Layouts/PageHeader/PageHeader';
import styles from './SimpleMaps.module.scss';
import { WorldMap, USState, MapChart, EuropeMap } from '../../../Data/DataMaps/DataWorldMap';


const SimpleMaps = () => {

    return (

    <div className={styles.SimpleMaps}>
        <PageHeader titles="Maps" active="Maps" items={['Home']} />
        {/* <!-- Row --> */}
        <Row>
            <Col lg={6}>
                <Card className="m-b-20">
                    <Card.Header>
                        <Card.Title as="h3">World Map</Card.Title>
                    </Card.Header>
                    <Card.Body>
                    <div id="vmap1" className="stateh world_map h-400"> <WorldMap/></div>
                    </Card.Body>
                </Card>
            </Col>
            {/* <!-- end col --> */}
        
        {/* <!-- End row --> */}

        {/* <!-- Row --> */}
        
            <Col lg={6}>
                <Card className="m-b-20">
                    <Card.Header>
                        <Card.Title as="h3">SouthAmerica Map</Card.Title>
                    </Card.Header>
                    <Card.Body>
                       
                        <div id="vmap2" className="stateh h-400"> <MapChart/></div>
                    </Card.Body>
                </Card>
            </Col>
            </Row>  
            {/* <!-- end col --> */}
            <Row>
            <Col lg={6}>
                <Card>
                    <Card.Header>
                        <Card.Title as="h3">Europe Map</Card.Title>
                    </Card.Header>
                    <Card.Body>
                    <div id="vmap3" className="stateh h-400">
                    <EuropeMap/>
                    </div>
                    </Card.Body>
                </Card>
            </Col>

            {/* <!-- end col --> */}

            {/* <!-- End Row --> */}
            <Col lg={6}>
                <Card className="m-b-20">
                    <Card.Header>
                        <Card.Title as="h3">USA Map</Card.Title>
                    </Card.Header>
                    <Card.Body>
                    <div id="vmap4" className="stateh h-400">
                        <USState/>
                        </div>
                    </Card.Body>
                </Card>
            </Col>
            {/* <!-- end col --> */}
        </Row>
        {/* <!-- End Row --> */}
    </div>
)
    };

export default SimpleMaps;
