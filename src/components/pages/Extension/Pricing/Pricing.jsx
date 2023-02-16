import React from 'react';
import styles from './Pricing.module.scss';
import PageHeader from '../../../../Layouts/PageHeader/PageHeader';
import { Col, Row, ListGroup, Card, Button, Badge,Tab, Nav } from 'react-bootstrap';


const Pricing = () => {

  return (

  <div className={styles.Pricing}>
    <PageHeader titles="Pricing" active="Pricing" items={['Pages']} />
    {/* <!-- ROW-1 OPEN --> */}
    <Row>
      <Col sm={6} xxl={3} md={6} lg={6}>
        <div className="panel price panel-color">
          <div className="pb-4 ps-5 border-bottom">
            <h3 className="pb-2">Personal</h3>
            <span>Try it Free, Get access to all Features for 60 days. No plan credit card required. </span>
          </div>
          <div className="panel-body p-0 ps-5">
            <p className="lead py-0 text-primary"><strong>$15 </strong>/ month</p>
            <p><i className="fe fe-plus me-1 mx-1"></i>$1.9 per Listing</p>
          </div>
          <div className="panel-footer text-center px-5 border-0 pt-0">
            <Button variant="primary" className="btn-block btn-pill">Purchase Now!</Button>
          </div>
          <ListGroup variant="flush" className="pb-5">
            <ListGroup.Item className="border-0"><i className="mdi mdi-circle-outline text-primary p-2 fs-12"></i><strong> 2 Free</strong> Domain Name</ListGroup.Item>
            <ListGroup.Item className="border-0"><i className="mdi mdi-circle-outline text-primary p-2 fs-12"></i><strong>3 </strong> One-Click Apps</ListGroup.Item>
            <ListGroup.Item className="border-0"><i className="mdi mdi-circle-outline text-primary p-2 fs-12"></i><strong> 1 </strong> Databases</ListGroup.Item>
            <ListGroup.Item className="border-0"><i className="mdi mdi-circle-outline text-primary p-2 fs-12"></i><strong> Money </strong> BackGuarantee</ListGroup.Item>
            <ListGroup.Item className="border-bottom-0"><i className="mdi mdi-circle-outline text-primary p-2 fs-12"></i><strong> 24/7</strong> support</ListGroup.Item>
          </ListGroup>
        </div>
      </Col>
      {/* <!-- COL-END --> */}
      <Col sm={6} xxl={3} md={6} lg={6}>
        <div className="panel price panel-color">
          <div className="pb-4 ps-5 border-bottom">
            <h3 className="pb-2">Team</h3>
            <span>Try it Free, Get access to all Features for 60 days. No plan credit card required. </span>
          </div>
          <div className="panel-body p-0 ps-5">
            <p className="lead py-0 text-secondary"><strong>$25 </strong>/ month</p>
            <p><i className="fe fe-plus me-1 mx-1"></i>$1.9 per Listing</p>
          </div>
          <div className="panel-footer text-center px-5 border-0 pt-0">
            <Button variant='secondary' className="btn-block btn-pill">Purchase Now!</Button>
          </div>
          <ListGroup variant="flush" className="pb-5">
            <ListGroup.Item className="border-0"><i className="mdi mdi-circle-outline text-secondary p-2 fs-12"></i><strong> 3 Free</strong> Domain Name</ListGroup.Item>
            <ListGroup.Item className="border-0"><i className="mdi mdi-circle-outline text-secondary p-2 fs-12"></i><strong>4 </strong> One-Click Apps</ListGroup.Item>
            <ListGroup.Item className="border-0"><i className="mdi mdi-circle-outline text-secondary p-2 fs-12"></i><strong> 2 </strong> Databases</ListGroup.Item>
            <ListGroup.Item className="border-0"><i className="mdi mdi-circle-outline text-secondary p-2 fs-12"></i><strong> Money </strong> BackGuarantee</ListGroup.Item>
            <ListGroup.Item className="border-bottom-0"><i className="mdi mdi-circle-outline text-secondary p-2 fs-12"></i><strong> 24/7</strong> support</ListGroup.Item>
          </ListGroup>
        </div>
      </Col>
      {/* <!-- COL-END --> */}
      <Col sm={6} xxl={3} md={6} lg={6}>
        <div className="panel price panel-color bg-success-transparent">
          <div className="pb-4 ps-5 border-bottom">
            <h3 className="pb-2">Business <span className="badge bg-success ms-5 mb-1 mt-1 fs-12 text-end">Recommended</span></h3>
            <span>Try it Free, Get access to all Features for 60 days. No plan credit card required. </span>
          </div>
          <div className="panel-body p-0 ps-5">
            <p className="lead py-0 text-success"><strong>$99 </strong>/ month</p>
            <p className="mb-0 pb-4"><i className="fe fe-plus me-1 mx-1"></i>$1.9 per Listing</p>
          </div>
          <div className="panel-footer text-center px-5 border-0 pt-0">
            <Button variant='success' className="btn-block btn-pill">Purchase Now!</Button>
          </div>
          <ListGroup variant="flush" className="pb-5">
            <ListGroup.Item className="border-0"><i className="mdi mdi-circle-outline text-success p-2 fs-12"></i><strong> 5 Free</strong> Domain Name</ListGroup.Item>
            <ListGroup.Item className="border-0"><i className="mdi mdi-circle-outline text-success p-2 fs-12"></i><strong>8 </strong> One-Click Apps</ListGroup.Item>
            <ListGroup.Item className="border-0"><i className="mdi mdi-circle-outline text-success p-2 fs-12"></i><strong> 2 </strong> Databases</ListGroup.Item>
            <ListGroup.Item className="border-0"><i className="mdi mdi-circle-outline text-success p-2 fs-12"></i><strong> Money </strong> BackGuarantee</ListGroup.Item>
            <ListGroup.Item className="border-bottom-0"><i className="mdi mdi-circle-outline text-success p-2 fs-12"></i><strong> 24/7</strong> support</ListGroup.Item>
          </ListGroup>
        </div>
      </Col>
      {/* <!-- COL-END --> */}
      <Col sm={6} xxl={3} md={6} lg={6}>
        <div className="panel price panel-color">
          <div className="pb-4 ps-5 border-bottom">
            <h3 className="pb-2">Corporate</h3>
            <span>Try it Free, Get access to all Features for 60 days. No plan credit card required. </span>
          </div>
          <div className="panel-body p-0 ps-5">
            <p className="lead py-0 text-danger"><strong>$35 </strong>/ month</p>
            <p><i className="fe fe-plus me-1 mx-1"></i>$1.9 per Listing</p>
          </div>
          <div className="panel-footer text-center px-5 border-0 pt-0">
            <Button variant='danger' className="btn-block btn-pill">Purchase Now!</Button>
          </div>
          <ListGroup variant="flush" className="pb-5">
            <ListGroup.Item className="border-0"><i className="mdi mdi-circle-outline text-danger p-2 fs-12"></i><strong> 4 Free</strong> Domain Name</ListGroup.Item>
            <ListGroup.Item className="border-0"><i className="mdi mdi-circle-outline text-danger p-2 fs-12"></i><strong>6 </strong> One-Click Apps</ListGroup.Item>
            <ListGroup.Item className="border-0"><i className="mdi mdi-circle-outline text-danger p-2 fs-12"></i><strong> 2 </strong> Databases</ListGroup.Item>
            <ListGroup.Item className="border-0"><i className="mdi mdi-circle-outline text-danger p-2 fs-12"></i><strong> Money </strong> BackGuarantee</ListGroup.Item>
            <ListGroup.Item className="border-bottom-0"><i className="mdi mdi-circle-outline text-danger p-2 fs-12"></i><strong> 24/7</strong> support</ListGroup.Item>
          </ListGroup>
        </div>
      </Col>
      {/* <!-- COL-END --> */}
    </Row>
    {/* <!-- ROW-1 CLOSED --> */}

    {/* <!-- ROW-2 OPEN --> */}
    <Row>
      <Card.Title as='h4' className="mt-4">Pricing cards 4 colums</Card.Title>
      <Col sm={6} xxl={3} md={6} lg={6}>
        <div className="panel price panel-color">
          <div className="ps-5 d-flex">
            <div>
              <h3 className="pb-0 text-secondary">Team</h3>
              <p>per agent per month</p>
            </div>
            <div className="panel-body ms-auto">
              <p className="lead py-0"><strong>$25 </strong>/ month</p>
            </div>
          </div>
          <ListGroup variant="flush" className="pb-5">
            <ListGroup.Item className="border-0"><i className="mdi mdi-checkbox-marked-circle-outline text-secondary p-2 fs-16"></i><strong> 3 Free</strong> Domain Name</ListGroup.Item>
            <ListGroup.Item className="border-0"><i className="mdi mdi-checkbox-marked-circle-outline text-secondary p-2 fs-16"></i><strong>4 </strong> One-Click Apps</ListGroup.Item>
            <ListGroup.Item className="border-0"><i className="mdi mdi-checkbox-marked-circle-outline text-secondary p-2 fs-16"></i><strong> 2 </strong> Databases</ListGroup.Item>
            <ListGroup.Item className="border-0"><i className="mdi mdi-checkbox-marked-circle-outline text-secondary p-2 fs-16"></i><strong> Money </strong> BackGuarantee</ListGroup.Item>
            <ListGroup.Item className="border-bottom-0"><i className="mdi mdi-checkbox-marked-circle-outline text-secondary p-2 fs-16"></i><strong> 24/7</strong> support</ListGroup.Item>
          </ListGroup>
          <div className="panel-footer text-center px-5 border-0 pb-5 br-7">
            <Button variant='secondary' className="btn-block btn-pill">Purchase Now!</Button>
          </div>
        </div>
      </Col>
      {/* <!-- COL-END --> */}
      <Col sm={6} xxl={3} md={6} lg={6}>
        <div className="panel price panel-color border border-primary p-0 pb-1">
          <div className="p-0 ps-5 d-flex">
            <div>
              <h3 className="pb-0 text-primary">Personal</h3>
              <p>per agent per month</p>
            </div>
            <div className="panel-body ms-auto">
              <p className="lead py-0"><strong>$15 </strong>/ month</p>
            </div>
          </div>
          <ListGroup variant="flush" className="pb-5">
            <ListGroup.Item className="border-0"><i className="mdi mdi-checkbox-marked-circle-outline text-primary p-2 fs-16"></i><strong> 2 Free</strong> Domain Name</ListGroup.Item>
            <ListGroup.Item className="border-0"><i className="mdi mdi-checkbox-marked-circle-outline text-primary p-2 fs-16"></i><strong>3 </strong> One-Click Apps</ListGroup.Item>
            <ListGroup.Item className="border-0"><i className="mdi mdi-checkbox-marked-circle-outline text-primary p-2 fs-16"></i><strong> 1 </strong> Databases</ListGroup.Item>
            <ListGroup.Item className="border-0"><i className="mdi mdi-checkbox-marked-circle-outline text-primary p-2 fs-16"></i><strong> Money </strong> BackGuarantee</ListGroup.Item>
            <ListGroup.Item className="border-bottom-0"><i className="mdi mdi-checkbox-marked-circle-outline text-primary p-2 fs-16"></i><strong> 24/7</strong> support</ListGroup.Item>
          </ListGroup>
          <div className="panel-footer text-center px-5 border-0 pb-5 br-7">
            <Button variant='primary' className="btn-block btn-pill">Purchase Now!</Button>
          </div>
        </div>
      </Col>
      {/* <!-- COL-END --> */}
      <Col sm={6} xxl={3} md={6} lg={6}>
        <div className="panel price panel-color">
          <div className="ps-5 d-flex">
            <div>
              <h3 className="pb-0 text-danger">Corporate</h3>
              <p>per agent per month</p>
            </div>
            <div className="panel-body ms-auto">
              <p className="lead py-0"><strong>$35 </strong>/ month</p>
            </div>
          </div>
          <ListGroup variant="flush" className="pb-5">
            <ListGroup.Item className="border-0"><i className="mdi mdi-checkbox-marked-circle-outline text-danger p-2 fs-16"></i><strong> 4 Free</strong> Domain Name</ListGroup.Item>
            <ListGroup.Item className="border-0"><i className="mdi mdi-checkbox-marked-circle-outline text-danger p-2 fs-16"></i><strong>6 </strong> One-Click Apps</ListGroup.Item>
            <ListGroup.Item className="border-0"><i className="mdi mdi-checkbox-marked-circle-outline text-danger p-2 fs-16"></i><strong> 2 </strong> Databases</ListGroup.Item>
            <ListGroup.Item className="border-0"><i className="mdi mdi-checkbox-marked-circle-outline text-danger p-2 fs-16"></i><strong> Money </strong> BackGuarantee</ListGroup.Item>
            <ListGroup.Item className="border-bottom-0"><i className="mdi mdi-checkbox-marked-circle-outline text-danger p-2 fs-16"></i><strong> 24/7</strong> support</ListGroup.Item>
          </ListGroup>
          <div className="panel-footer text-center px-5 border-0 pb-5 br-7">
            <Button variant='danger' className="btn-block btn-pill">Purchase Now!</Button>
          </div>
        </div>
      </Col>
      {/* <!-- COL-END --> */}
      <Col sm={6} xxl={3} md={6} lg={6}>
        <div className="panel price panel-color">
          <div className="ps-5 d-flex">
            <div>
              <h3 className="pb-0 text-success">Business</h3>
              <p>per agent per month</p>
            </div>
            <div className="panel-body ms-auto">
              <p className="lead py-0"><strong>$99 </strong>/ month</p>
            </div>
          </div>
          <ListGroup variant="flush" className="pb-5">
            <ListGroup.Item className="border-0"><i className="mdi mdi-checkbox-marked-circle-outline text-success p-2 fs-16"></i><strong> 5 Free</strong> Domain Name</ListGroup.Item>
            <ListGroup.Item className="border-0"><i className="mdi mdi-checkbox-marked-circle-outline text-success p-2 fs-16"></i><strong>8 </strong> One-Click Apps</ListGroup.Item>
            <ListGroup.Item className="border-0"><i className="mdi mdi-checkbox-marked-circle-outline text-success p-2 fs-16"></i><strong> 2 </strong> Databases</ListGroup.Item>
            <ListGroup.Item className="border-0"><i className="mdi mdi-checkbox-marked-circle-outline text-success p-2 fs-16"></i><strong> Money </strong> BackGuarantee</ListGroup.Item>
            <ListGroup.Item className="border-bottom-0"><i className="mdi mdi-checkbox-marked-circle-outline text-success p-2 fs-16"></i><strong> 24/7</strong> support</ListGroup.Item>
          </ListGroup>
          <div className="panel-footer text-center px-5 border-0 pb-5 br-7">
            <Button variant='success' className="btn-block btn-pill">Purchase Now!</Button>
          </div>
        </div>
      </Col>
      {/* <!-- COL-END --> */}
      <Card.Title as='h4' className="mt-4">Pricing cards 4 colums</Card.Title>
      {/* <!-- ROW-4 OPEN --> */}
      <Col sm={6} xxl={3} md={6} lg={6} className="primary">
        <Card>
          <div className="princing-item">
            <div className="pricing-divider text-center pt-5">
              <h2 className="text-primary">Basic</h2>
              <span><svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" enableBackground="new 0 0 24 24" viewBox="0 0 24 24"><path fill="var(--primary-bg-color)" d="M7.0009766,13c-0.8284302,0-1.5,0.6715698-1.5,1.5s0.6715698,1.5,1.5,1.5c0.828064-0.0009155,1.4991455-0.671936,1.5-1.5C8.5009766,13.6715698,7.8294067,13,7.0009766,13z M7.0009766,15c-0.276123,0-0.5-0.223877-0.5-0.5s0.223877-0.5,0.5-0.5c0.2759399,0.0005493,0.4994507,0.2240601,0.5,0.5C7.5009766,14.776123,7.2771606,15,7.0009766,15z M13.5,14h-3c-0.276123,0-0.5,0.223877-0.5,0.5s0.223877,0.5,0.5,0.5h3c0.276123,0,0.5-0.223877,0.5-0.5S13.776123,14,13.5,14z M20.1950684,10.25177l-1.5505371-4.8230591C18.1824341,3.9794922,16.8345947,2.9967651,15.3135376,3H8.6865234C7.1654053,2.9967041,5.8175659,3.9794312,5.3554688,5.4286499L3.8049316,10.25177C2.7443848,10.7144775,2.0013428,11.7692261,2,13v3c0.0016479,1.4848633,1.083252,2.7087402,2.5,2.9490967V20.5c0,0.0001831,0,0.0003662,0,0.0005493C4.5001831,20.7765503,4.723999,21.0001831,5,21c0.0001831,0,0.0003662,0,0.0006104,0C5.2765503,20.9998169,5.5001831,20.776001,5.5,20.5V19h13v1.5c0,0.0001831,0,0.0003662,0,0.0005493C18.5001831,20.7765503,18.723999,21.0001831,19,21c0.0001831,0,0.0003662,0,0.0006104,0c0.2759399-0.0001831,0.4995728-0.223999,0.4993896-0.5v-1.5509033C20.916748,18.7087402,21.9983521,17.4848633,22,16v-3C21.9986572,11.7692261,21.2556152,10.7144775,20.1950684,10.25177z M6.3066406,5.7353516C6.6368408,4.6999512,7.5997314,3.9978638,8.6864624,4h6.6270142c1.086792-0.0021973,2.0496826,0.6999512,2.3798828,1.7353516L19.0644531,10H19H5H4.9355469L6.3066406,5.7353516z M21,16c-0.0014038,1.1040039-0.8959961,1.9985962-2,2H5c-1.1040039-0.0014038-1.9985962-0.8959961-2-2v-3c0.0014038-1.1040039,0.8959961-1.9985962,2-2h14c1.1040039,0.0014038,1.9985962,0.8959961,2,2V16z M17.0009766,13c-0.8284302,0-1.5,0.6715698-1.5,1.5s0.6715698,1.5,1.5,1.5c0.828064-0.0009155,1.4991455-0.671936,1.5-1.5C18.5009766,13.6715698,17.8294067,13,17.0009766,13z M17.0009766,15c-0.276123,0-0.5-0.223877-0.5-0.5s0.223877-0.5,0.5-0.5c0.2759399,0.0005493,0.4994507,0.2240601,0.5,0.5C17.5009766,14.776123,17.2771606,15,17.0009766,15z" /></svg></span>
              <h4 className="display-5 text-primary fw-bold my-3"><span className="h3">$</span> 120 <span className="h5">/mo</span></h4>
            </div>
            <div className=" br-be-0 br-bs-0 bg-white mt-0 shadow">
              <ListGroup variant="flush">
                <ListGroup.Item><i className="fe fe-check text-primary p-2 fw-bold"></i><b>10</b> users included for this pack</ListGroup.Item>
                <ListGroup.Item><i className="fe fe-check text-primary p-2 fw-bold"></i><b>2 GB</b> of storage you will get</ListGroup.Item>
                <ListGroup.Item><i className="fe fe-check text-primary p-2 fw-bold"></i><b>Free </b>Email support for every user</ListGroup.Item>
                <ListGroup.Item><i className="fe fe-check text-primary p-2 fw-bold"></i><b> 24/7</b> support </ListGroup.Item>
                <ListGroup.Item className="border-bottom-0"><i className="fe fe-check text-primary p-2 fw-bold"></i><b>Help center access</b></ListGroup.Item>
              </ListGroup>
              <Card.Footer className="text-center p-5">
                <Button variant='primary' className="btn-block">Sign Up Now</Button>
              </Card.Footer>
            </div>
          </div>
        </Card>
      </Col>
      {/* <!-- COL-END --> */}
      <Col sm={6} xxl={3} md={6} lg={6} className="danger">
        <Card>
          <div className="princing-item">
            <div className="pricing-divider text-center pt-5">
              <h2 className="text-danger">Unlimited</h2>
              <span><svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" enableBackground="new 0 0 24 24" viewBox="0 0 24 24"><path fill="#E82646" d="M16,14.375c-0.3451538,0-0.625,0.2798462-0.625,0.625s0.2798462,0.625,0.625,0.625s0.625-0.2798462,0.625-0.625S16.3451538,14.375,16,14.375z M19.0561523,19.3491211c1.6499634-0.93396,2.5132446-2.8222046,2.1401367-4.6810913l-1.6933594-9C19.1010742,3.541687,17.2440186,2.0015869,15.0800781,2H8.9199219C6.7559814,2.0015869,4.8989258,3.541687,4.4970703,5.6680298l-1.6933594,9c-0.3731079,1.8588867,0.4901733,3.7471313,2.1401367,4.6810913l-1.7973633,1.7973633c-0.1986084,0.1918335-0.2041016,0.5083618-0.0122681,0.7069702c0.1918335,0.1986694,0.5083618,0.2041626,0.7069702,0.0122681c0.0042114-0.0039673,0.0083008-0.0080566,0.0122681-0.0122681l2.0700073-2.0699463C6.3444214,19.9196777,6.7832031,19.9926758,7.2255859,20h9.5488281c0.4423218-0.0073242,0.8811646-0.0803223,1.302063-0.2164917l2.0700073,2.0700073c0.1986084,0.1918335,0.5151367,0.1863403,0.7069702-0.0122681c0.1871948-0.1937256,0.1871948-0.5009766,0-0.6947632L19.0561523,19.3491211z M5.4794922,5.8535156C5.7920532,4.1994629,7.2365723,3.0013428,8.9199219,3h6.1601562c1.6833496,0.0013428,3.1278687,1.1994629,3.4404297,2.8535156l0.4643555,2.4680176c-2.6467285,3.857605-7.9196167,4.8392334-11.7772217,2.1925049C6.3481445,9.9243164,5.6048584,9.1810303,5.0151367,8.3215332L5.4794922,5.8535156z M17.4196777,18.9398804C17.2069092,18.9797974,16.9909058,18.999939,16.7744141,19H7.2255859c-1.9332275-0.0004272-3.500061-1.5679932-3.4995728-3.5012207c0.000061-0.2164917,0.0201416-0.4324951,0.0601196-0.6452637l0.979187-5.2042847c3.3881836,3.9956055,9.3739014,4.4880371,13.3695068,1.0998535c0.3961182-0.3359375,0.7639771-0.7037354,1.0998535-1.0998535l0.979187,5.2042847C20.5706787,16.75354,19.3196411,18.5830688,17.4196777,18.9398804z M8,14.375c-0.3451538,0-0.625,0.2798462-0.625,0.625S7.6548462,15.625,8,15.625S8.625,15.3451538,8.625,15S8.3451538,14.375,8,14.375z" /></svg></span>
              <h4 className="display-5 text-danger fw-bold my-3"><span className="h3">$</span> 180 <span className="h5">/mo</span></h4>
            </div>
            <div className=" br-be-0 br-bs-0 bg-white mt-0 shadow">
              <ListGroup variant="flush">
                <ListGroup.Item><i className="fe fe-check text-danger p-2 fw-bold"></i><b>10</b> users included for this pack</ListGroup.Item>
                <ListGroup.Item><i className="fe fe-check text-danger p-2 fw-bold"></i><b>2 GB</b> of storage you will get</ListGroup.Item>
                <ListGroup.Item><i className="fe fe-check text-danger p-2 fw-bold"></i><b>Free </b>Email support for every user</ListGroup.Item>
                <ListGroup.Item><i className="fe fe-check text-danger p-2 fw-bold"></i><b> 24/7</b> support</ListGroup.Item>
                <ListGroup.Item className="border-bottom-0"><i className="fe fe-check text-danger p-2 fw-bold"></i><b>Help center access</b></ListGroup.Item>
              </ListGroup>
              <Card.Footer className="text-center p-5">
                <Button variant='danger' className="btn btn-danger btn-block">Sign Up Now</Button></Card.Footer>
            </div>
          </div>
        </Card>
      </Col>
      <Col sm={6} xxl={3} md={6} lg={6} className="success">
        <Card>
          <div className="princing-item">
            <div className="pricing-divider text-center pt-5">
              <h2 className="text-success">Enterprise</h2>
              <span><svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" enableBackground="new 0 0 24 24" viewBox="0 0 24 24"><path fill="#09AD95" d="M20.743103,3.2568359c-1.0223389-0.9765625-2.631897-0.9765625-3.6542969,0l-3.0234375,3.0234375l-6.78125-2.2607422C7.1043091,3.9615479,6.9071655,4.0081787,6.7723999,4.140625L4.414978,6.4990234C4.3724365,6.5415039,4.3379517,6.5913086,4.3130493,6.6460571C4.1989746,6.8973389,4.3102417,7.1935425,4.5615234,7.3076172l5.828064,2.6484375l-3.3623047,3.3623047l-2.0351562-1.0185547c-0.192688-0.0949707-0.4243774-0.057373-0.5771484,0.09375l-1.7684937,1.7685547c-0.000061,0.000061-0.0001221,0.0001221-0.0001221,0.0001831c-0.1951904,0.1952515-0.1951294,0.5117188,0.0001221,0.7068481l6.484375,6.484375C9.2244873,21.4474487,9.3517456,21.5001831,9.484375,21.5c0.1326294,0.0001831,0.2598877-0.0525513,0.3535156-0.1464844l1.7686157-1.7685547c0.1519775-0.1522827,0.1897583-0.3845825,0.09375-0.5771484l-1.0175781-2.0361328l3.3613281-3.3613281l2.6483765,5.828186c0.067627,0.1495972,0.2046509,0.2562256,0.3662109,0.2851562c0.1612549,0.0283813,0.3262329-0.0233154,0.4423828-0.1386719l2.3574219-2.3584595c0.1337891-0.1339722,0.1806641-0.3319702,0.1210938-0.5117188l-2.2597656-6.7802734l3.0233765-3.0234375C21.749939,5.901062,21.749939,4.2668457,20.743103,3.2568359z M20.0361328,6.2041016l-3.2421875,3.2421875c-0.1337891,0.1339722-0.1806641,0.3319702-0.1210938,0.5117188l2.2598267,6.7802734l-1.6289062,1.6289062l-2.6484375-5.8271484c-0.067627-0.1495972-0.2045898-0.2562866-0.3662109-0.2851562c-0.1610718-0.0258789-0.3248901,0.0254517-0.4423828,0.1386719l-4.1259766,4.1259766c-0.1520386,0.1522827-0.1897583,0.3845825-0.09375,0.5771484l1.0175171,2.0361328L9.484375,20.2929688L3.7069702,14.515625l1.1602173-1.1601562l2.0351562,1.0185547c0.192688,0.0951538,0.4244995,0.0574951,0.5771484-0.09375l4.1270142-4.1269531c0.0425415-0.0424805,0.0770264-0.0922852,0.1019287-0.1470337c0.1140747-0.2512817,0.0028687-0.5474854-0.2484131-0.6615601l-5.828186-2.6484375l1.6289062-1.6298828l6.78125,2.2607422c0.1797485,0.0601807,0.3780518,0.0132446,0.5117188-0.1210938l3.2421875-3.2421875c0.6271362-0.5976562,1.6130981-0.5976562,2.2402344,0C20.6533203,4.5830688,20.6533203,5.5848999,20.0361328,6.2041016z" /></svg></span>
              <h4 className="display-5 text-success fw-bold my-3"><span className="h3">$</span> 200 <span className="h5">/mo</span></h4>
            </div>
            <div className="br-be-0 br-bs-0 bg-white mt-0 shadow">
              <ListGroup variant="flush">
                <ListGroup.Item><i className="fe fe-check text-success p-2 fw-bold"></i><b>10</b> users included for this pack</ListGroup.Item>
                <ListGroup.Item><i className="fe fe-check text-success p-2 fw-bold"></i><b>2 GB</b> of storage you will get</ListGroup.Item>
                <ListGroup.Item><i className="fe fe-check text-success p-2 fw-bold"></i><b>Free </b>Email support for every user</ListGroup.Item>
                <ListGroup.Item><i className="fe fe-check text-success p-2 fw-bold"></i><b> 24/7</b> support</ListGroup.Item>
                <ListGroup.Item className="border-bottom-0"><i className="fe fe-check text-success p-2 fw-bold"></i><b>Help center access</b></ListGroup.Item>
              </ListGroup>
              <Card.Footer className="text-center p-5">
                <Button variant='success' className="btn-block">Sign Up Now</Button>
              </Card.Footer>
            </div>
          </div>
        </Card>
      </Col>
      {/* <!-- COL-END --> */}
      <Col sm={6} xxl={3} md={6} lg={6} className="secondary">
        <Card className="border border-secondary p-1">
          <div className="ribbon-price">
            <Badge bg='secondary' className="text-white">25%</Badge>
          </div>
          <div className="princing-item">
            <div className="pricing-divider text-center pt-5">
              <h2 className="text-secondary">Premium</h2>
              <span>
                <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" enableBackground="new 0 0 24 24" viewBox="0 0 24 24"><path fill="#05C3FB" d="M21.6,2.7c0-0.2-0.2-0.3-0.4-0.4c-3.8-1-7.9,0.3-10.4,3.3L9.5,7.1L6.8,6.4C5.7,6,4.6,6.5,4.1,7.5L2,11.2c0,0,0,0.1-0.1,0.1c-0.1,0.3,0.1,0.5,0.4,0.6l3.4,0.7c-0.3,0.9-0.6,1.8-0.7,2.7c0,0.2,0,0.3,0.1,0.4l3,2.9c0.1,0.1,0.2,0.1,0.4,0.1c0,0,0,0,0,0c0.9-0.1,1.9-0.3,2.8-0.6l0.7,3.3c0,0.2,0.3,0.4,0.5,0.4c0.1,0,0.2,0,0.2-0.1l3.7-2.1c0.9-0.5,1.3-1.6,1.1-2.6l-0.7-2.9l1.4-1.3C21.3,10.5,22.6,6.5,21.6,2.7z M3.2,11.1L4.9,8c0.3-0.6,0.9-0.8,1.5-0.6l2.3,0.6L7.7,9.2c-0.6,0.8-1.2,1.6-1.6,2.5L3.2,11.1z M16,19l-3.1,1.8l-0.6-2.9c0.9-0.4,1.7-1,2.5-1.6l1.3-1.2l0.6,2.3C16.7,18,16.5,18.7,16,19z M17.6,12.3l-3.5,3.2c-1.5,1.3-3.4,2.1-5.4,2.3l-2.6-2.6c0.3-2,1.1-3.9,2.4-5.4L10.1,8c0,0,0.1-0.1,0.1-0.1l1.4-1.6c2.2-2.6,5.8-3.8,9.1-3.1C21.4,6.6,20.3,10.1,17.6,12.3z M16.4,5.6c-1.1,0-1.9,0.9-1.9,1.9s0.9,1.9,1.9,1.9c1.1,0,1.9-0.9,1.9-1.9C18.3,6.5,17.5,5.6,16.4,5.6z M16.4,8.5c-0.5,0-0.9-0.4-0.9-0.9c0-0.5,0.4-0.9,0.9-0.9c0.5,0,0.9,0.4,0.9,0.9C17.3,8.1,16.9,8.5,16.4,8.5z" /></svg>
              </span>
              <h4 className="display-5 text-secondary fw-bold my-3"><span className="h3">$</span> 150 <span className="h5">/mo</span></h4>
            </div>
            <div className=" br-be-0 br-bs-0 bg-white mt-0 shadow">
              <ListGroup variant="flush">
                <ListGroup.Item><i className="fe fe-check text-secondary p-2 fw-bold"></i><b>10</b> users included for this pack</ListGroup.Item>
                <ListGroup.Item><i className="fe fe-check text-secondary p-2 fw-bold"></i><b>2 GB</b> of storage you will get</ListGroup.Item>
                <ListGroup.Item><i className="fe fe-check text-secondary p-2 fw-bold"></i><b>Free </b>Email support for every user</ListGroup.Item>
                <ListGroup.Item><i className="fe fe-check text-secondary p-2 fw-bold"></i><b> 24/7</b> support</ListGroup.Item>
                <ListGroup.Item className="border-bottom-0"><i className="fe fe-check text-secondary p-2 fw-bold"></i><b>Help center access</b></ListGroup.Item>
              </ListGroup>
              <Card.Footer className="text-center p-5">
                <Button variant='secondary' className="btn-block">Sign Up Now</Button>
              </Card.Footer>
            </div>
          </div>
        </Card>
      </Col>
      {/* <!-- COL-END --> */}
      {/* <!-- ROW-4 CLOSED --> */}
    </Row>
    {/* <!-- ROW-5 OPEN --> */}

      <Tab.Container id="left-tabs-example" defaultActiveKey="Annual">
      <Row>
          <Nav variant="pills" className="nav-pricing">
            <Nav.Item>
              <Nav.Link eventKey="Month">
              Monthly
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="Annual">
              Annual
              </Nav.Link>
            </Nav.Item>
          </Nav>
          <Tab.Content>
            <Tab.Pane eventKey="Month">
          <div className="tab-pane" id="month">
            <Row className="row d-flex align-items-center justify-content-center">
              <Col sm={6} xxl={3} md={6} lg={6}>
                <Card className="p-3 pricing-card">
                  <Card.Header className="card-header d-block text-justified pt-2">
                    <p className="fs-18 fw-semibold mb-1">Basic</p>
                    <p className="text-justify fw-semibold mb-1"> <span className="fs-30 me-2">$</span><span className="fs-30 me-1">39</span><span className="fs-25"><span className="op-0-5 text-muted text-20">/</span> month</span></p>
                    <p className="fs-13 mb-1">Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure quos debitis aliquam .</p>
                    <p className="fs-13 mb-1 text-secondary">Billed monthly on regular basis!</p>
                  </Card.Header>
                  <Card.Body className="pt-2">
                    <ul className="text-justify pricing-body ps-0">
                      <li><i className="mdi mdi-checkbox-marked-circle-outline p-2 fs-16 text-secondary"></i><strong> 2 Free</strong> Domain Name</li>
                      <li><i className="mdi mdi-checkbox-marked-circle-outline p-2 fs-16 text-secondary"></i> <strong>3 </strong> One-Click Apps</li>
                      <li className="text-muted"><i className="mdi mdi-close-circle-outline p-2 fs-16 text-gray"></i><strong> 1 </strong> Databases</li>
                      <li className="text-muted"><i className="mdi mdi-close-circle-outline p-2 fs-16 text-gray"></i><strong> Unlimited </strong> Cloud Storage</li>
                      <li className="text-muted"><i className="mdi mdi-close-circle-outline p-2 fs-16 text-gray"></i><strong> Money </strong> BackGuarantee</li>
                      <li className="text-muted&quot;"><i className="mdi mdi-close-circle-outline p-2 fs-16 text-gray"></i><strong> 24/7</strong> support</li>
                    </ul>
                  </Card.Body>
                  <Card.Footer className="text-center border-top-0 pt-1">
                    <button className="btn btn-lg btn-outline-secondary btn-block">
                      <span className="ms-4 me-4">Select</span>
                    </button>
                  </Card.Footer>
                </Card>
              </Col>
              <Col sm={6} xxl={3} md={6} lg={6}>
                <Card className="p-3 border-primary pricing-card advanced">
                  <Card.Header className="card-header d-block text-justified pt-2">
                    <p className="fs-18 fw-semibold mb-1 pe-0">Advanced<span className="tag bg-primary text-white float-end">Limited Deal</span></p>
                    <p className="text-justify fw-semibold mb-1"> <span className="fs-30 me-2">$</span><span className="fs-30 me-1">199</span><span className="fs-25"><span className="op-0-5 text-muted text-20">/</span> month</span></p>
                    <p className="fs-13 mb-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure quos debitis aliquam .</p>
                    <p className="fs-13 mb-1 text-primary">Billed monthly on regular basis!</p>
                  </Card.Header>
                  <Card.Body className="pt-2">
                    <ul className="text-justify pricing-body ps-0">
                      <li><i className="mdi mdi-checkbox-marked-circle-outline text-primary p-2 fs-16"></i> <strong> 5 Free</strong> Domain Name</li>
                      <li><i className="mdi mdi-checkbox-marked-circle-outline text-primary p-2 fs-16"></i><strong>5 </strong> One-Click Apps</li>
                      <li><i className="mdi mdi-checkbox-marked-circle-outline text-primary p-2 fs-16"></i><strong> 3 </strong> Databases</li>
                      <li><i className="mdi mdi-checkbox-marked-circle-outline text-primary p-2 fs-16"></i><strong> Unlimited </strong> Cloud Storage</li>
                      <li><i className="mdi mdi-checkbox-marked-circle-outline text-primary p-2 fs-16"></i><strong> Money </strong> BackGuarantee</li>
                      <li className="mb-6"><i className="mdi mdi-checkbox-marked-circle-outline text-primary p-2 fs-16"></i><strong> 24/7</strong> support</li>
                    </ul>
                  </Card.Body>
                  <Card.Footer className="text-center border-top-0 pt-1">
                    <button className="btn btn-lg btn-primary-gradient text-white btn-block">
                      <span className="ms-4 me-4">Select</span>
                    </button>
                  </Card.Footer>
                </Card>
              </Col>
              <Col sm={6} xxl={3} md={6} lg={6}>
                <Card className="p-3 pricing-card">
                  <Card.Header className="card-header d-block text-justified pt-2">
                    <p className="fs-18 fw-semibold mb-1">Regular</p>
                    <p className="text-justify fw-semibold mb-1"> <span className="fs-30 me-2">$</span><span className="fs-30 me-1">69</span><span className="fs-25"><span className="op-0-5 text-muted text-20">/</span> month</span></p>
                    <p className="fs-13 mb-1">Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure quos debitis aliquam .</p>
                    <p className="fs-13 mb-1  text-danger">Billed monthly on regular basis!</p>
                  </Card.Header>
                  <Card.Body className="pt-2">
                    <ul className="text-justify pricing-body ps-0">
                      <li><i className="mdi mdi-checkbox-marked-circle-outline text-danger p-2 fs-16"></i><strong> 1 Free</strong> Domain Name</li>
                      <li><i className="mdi mdi-checkbox-marked-circle-outline text-danger p-2 fs-16"></i><strong>4 </strong> One-Click Apps</li>
                      <li><i className="mdi mdi-checkbox-marked-circle-outline text-danger p-2 fs-16"></i><strong> 2 </strong> Databases</li>
                      <li className="text-muted"><i className="mdi mdi-close-circle-outline text-gray p-2 fs-16"></i><strong> Unlimited </strong> Cloud Storage</li>
                      <li className="text-muted"><i className="mdi mdi-close-circle-outline text-gray p-2 fs-16"></i><strong> Money </strong> BackGuarantee</li>
                      <li className="text-muted"><i className="mdi mdi-close-circle-outline text-gray p-2 fs-16"></i><strong> 24/7</strong> support</li>
                    </ul>
                  </Card.Body>
                  <Card.Footer className="text-center border-top-0 pt-1">
                    <button className="btn btn-lg btn-outline-danger btn-block">
                      <span className="ms-4 me-4">Select</span>
                    </button>
                  </Card.Footer>
                </Card>
              </Col>
              <Col sm={6} xxl={3} md={6} lg={6}>
                <Card className="p-3 pricing-card">
                  <Card.Header className="card-header d-block text-justified pt-2">
                    <p className="fs-18 fw-semibold mb-1">Premium</p>
                    <p className="text-justify fw-semibold mb-1"> <span className="fs-30 me-2">$</span><span className="fs-30 me-1">99</span><span className="fs-25"><span className="op-0-5 text-muted text-20">/</span> month</span></p>
                    <p className="fs-13 mb-1">Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure quos debitis aliquam .</p>
                    <p className="fs-13 mb-1  text-success">Billed monthly on regular basis!</p>
                  </Card.Header>
                  <Card.Body className="pt-2">
                    <ul className="text-justify pricing-body ps-0">
                      <li><i className="mdi mdi-checkbox-marked-circle-outline text-success p-2 fs-16"></i><strong> 1 Free</strong> Domain Name</li>
                      <li><i className="mdi mdi-checkbox-marked-circle-outline text-success p-2 fs-16"></i><strong>5 </strong> One-Click Apps</li>
                      <li><i className="mdi mdi-checkbox-marked-circle-outline text-success p-2 fs-16"></i><strong> 3 </strong> Databases</li>
                      <li className="text-muted"><i className="mdi mdi-close-circle-outline text-success p-2 fs-16"></i><strong> Unlimited </strong> Cloud Storage</li>
                      <li className="text-muted"><i className="mdi mdi-close-circle-outline text-gray p-2 fs-16"></i><strong> Money </strong> BackGuarantee</li>
                      <li className="text-muted"><i className="mdi mdi-close-circle-outline text-gray p-2 fs-16"></i><strong> 24/7</strong> support</li>
                    </ul>
                  </Card.Body>
                  <Card.Footer className="text-center border-top-0 pt-1">
                    <button className="btn btn-lg btn-outline-success btn-block">
                      <span className="ms-4 me-4">Select</span>
                    </button>
                  </Card.Footer>
                </Card>
              </Col>
            </Row>
          </div>

            </Tab.Pane>
            <Tab.Pane eventKey="Annual">
          <div className="tab-pane pb-0 active show" id="annualyear">
            <div className="row d-flex align-items-center justify-content-center">
              <Col sm={6} xxl={3} md={6} lg={6}>
                <Card className="p-3 pricing-card">
                  <Card.Header className="card-header d-block text-justified pt-2">
                    <p className="fs-18 fw-semibold mb-1">Basic</p>
                    <p className="text-justify fw-semibold mb-1"> <span className="fs-30 me-2">$</span><span className="fs-30 me-1">399</span><span className="fs-25"><span className="op-0-5 text-muted text-20">/</span> year</span></p>
                    <p className="fs-13 mb-1">Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure quos debitis aliquam .</p>
                    <p className="fs-13 mb-1 text-secondary">Billed monthly on regular basis!</p>
                  </Card.Header>
                  <Card.Body className="pt-2">
                    <ul className="text-justify pricing-body ps-0">
                      <li><i className="mdi mdi-checkbox-marked-circle-outline p-2 fs-16 text-secondary"></i><strong> 2 Free</strong> Domain Name</li>
                      <li><i className="mdi mdi-checkbox-marked-circle-outline p-2 fs-16 text-secondary"></i> <strong>3 </strong> One-Click Apps</li>
                      <li className="text-muted"><i className="mdi mdi-close-circle-outline p-2 fs-16 text-gray"></i><strong> 1 </strong> Databases</li>
                      <li className="text-muted"><i className="mdi mdi-close-circle-outline p-2 fs-16 text-gray"></i><strong> Unlimited </strong> Cloud Storage</li>
                      <li className="text-muted"><i className="mdi mdi-close-circle-outline p-2 fs-16 text-gray"></i><strong> Money </strong> BackGuarantee</li>
                      <li className="text-muted&quot;"><i className="mdi mdi-close-circle-outline p-2 fs-16 text-gray"></i><strong> 24/7</strong> support</li>
                    </ul>
                  </Card.Body>
                  <Card.Footer className="text-center border-top-0 pt-1">
                    <button className="btn btn-lg btn-outline-secondary btn-block">
                      <span className="ms-4 me-4">Select</span>
                    </button>
                  </Card.Footer>
                </Card>
              </Col>
              <Col sm={6} xxl={3} md={6} lg={6}>
                <Card className="p-3 border-primary pricing-card advanced">
                  <Card.Header className="card-header d-block text-justified pt-2">
                    <p className="fs-18 fw-semibold mb-1 pe-0">Advanced<span className="tag bg-primary text-white float-end">Limited Deal</span></p>
                    <p className="text-justify fw-semibold mb-1"> <span className="fs-30 me-2">$</span><span className="fs-30 me-1">1,299</span><span className="fs-25"><span className="op-0-5 text-muted text-20">/</span> year</span></p>
                    <p className="fs-13 mb-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure quos debitis aliquam .</p>
                    <p className="fs-13 mb-1 text-primary">Billed monthly on regular basis!</p>
                  </Card.Header>
                  <Card.Body className="pt-2">
                    <ul className="text-justify pricing-body ps-0">
                      <li><i className="mdi mdi-checkbox-marked-circle-outline text-primary p-2 fs-16"></i> <strong> 5 Free</strong> Domain Name</li>
                      <li><i className="mdi mdi-checkbox-marked-circle-outline text-primary p-2 fs-16"></i><strong>5 </strong> One-Click Apps</li>
                      <li><i className="mdi mdi-checkbox-marked-circle-outline text-primary p-2 fs-16"></i><strong> 3 </strong> Databases</li>
                      <li><i className="mdi mdi-checkbox-marked-circle-outline text-primary p-2 fs-16"></i><strong> Unlimited </strong> Cloud Storage</li>
                      <li><i className="mdi mdi-checkbox-marked-circle-outline text-primary p-2 fs-16"></i><strong> Money </strong> BackGuarantee</li>
                      <li className="mb-5"><i className="mdi mdi-checkbox-marked-circle-outline text-primary p-2 fs-16"></i><strong> 24/7</strong> support</li>
                    </ul>
                  </Card.Body>
                  <Card.Footer className="text-center border-top-0 pt-1">
                    <button className="btn btn-lg btn-primary-gradient text-white btn-block">
                      <span className="ms-4 me-4">Select</span>
                    </button>
                  </Card.Footer>
                </Card>
              </Col>
              <Col sm={6} xxl={3} md={6} lg={6}>
                <Card className="p-3 pricing-card">
                  <Card.Header className="card-header d-block text-justified pt-2">
                    <p className="fs-18 fw-semibold mb-1">Regular</p>
                    <p className="text-justify fw-semibold mb-1"> <span className="fs-30 me-2">$</span><span className="fs-30 me-1">699</span><span className="fs-25"><span className="op-0-5 text-muted text-20">/</span> year</span></p>
                    <p className="fs-13 mb-1">Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure quos debitis aliquam .</p>
                    <p className="fs-13 mb-1  text-danger">Billed monthly on regular basis!</p>
                  </Card.Header>
                  <Card.Body className="pt-2">
                    <ul className="text-justify pricing-body ps-0">
                      <li><i className="mdi mdi-checkbox-marked-circle-outline text-danger p-2 fs-16"></i><strong> 1 Free</strong> Domain Name</li>
                      <li><i className="mdi mdi-checkbox-marked-circle-outline text-danger p-2 fs-16"></i><strong>4 </strong> One-Click Apps</li>
                      <li><i className="mdi mdi-checkbox-marked-circle-outline text-danger p-2 fs-16"></i><strong> 2 </strong> Databases</li>
                      <li className="text-muted"><i className="mdi mdi-close-circle-outline text-gray p-2 fs-16"></i><strong> Unlimited </strong> Cloud Storage</li>
                      <li className="text-muted"><i className="mdi mdi-close-circle-outline text-gray p-2 fs-16"></i><strong> Money </strong> BackGuarantee</li>
                      <li className="text-muted"><i className="mdi mdi-close-circle-outline text-gray p-2 fs-16"></i><strong> 24/7</strong> support</li>
                    </ul>
                  </Card.Body>
                  <Card.Footer className="text-center border-top-0 pt-1">
                    <button className="btn btn-lg btn-outline-danger btn-block">
                      <span className="ms-4 me-4">Select</span>
                    </button>
                  </Card.Footer>
                </Card>
              </Col>
              <Col sm={6} xxl={3} md={6} lg={6}>
                <Card className="p-3 pricing-card">
                  <Card.Header className="card-header d-block text-justified pt-2">
                    <p className="fs-18 fw-semibold mb-1">Premium</p>
                    <p className="text-justify fw-semibold mb-1"> <span className="fs-30 me-2">$</span><span className="fs-30 me-1">999</span><span className="fs-25"><span className="op-0-5 text-muted text-20">/</span> year</span></p>
                    <p className="fs-13 mb-1">Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure quos debitis aliquam .</p>
                    <p className="fs-13 mb-1  text-success">Billed monthly on regular basis!</p>
                  </Card.Header>
                  <Card.Body className="pt-2">
                    <ul className="text-justify pricing-body ps-0">
                      <li><i className="mdi mdi-checkbox-marked-circle-outline text-success p-2 fs-16"></i><strong> 1 Free</strong> Domain Name</li>
                      <li><i className="mdi mdi-checkbox-marked-circle-outline text-success p-2 fs-16"></i><strong>5 </strong> One-Click Apps</li>
                      <li><i className="mdi mdi-checkbox-marked-circle-outline text-success p-2 fs-16"></i><strong> 3 </strong> Databases</li>
                      <li className="text-muted"><i className="mdi mdi-close-circle-outline text-success p-2 fs-16"></i><strong> Unlimited </strong> Cloud Storage</li>
                      <li className="text-muted"><i className="mdi mdi-close-circle-outline text-gray p-2 fs-16"></i><strong> Money </strong> BackGuarantee</li>
                      <li className="text-muted"><i className="mdi mdi-close-circle-outline text-gray p-2 fs-16"></i><strong> 24/7</strong> support</li>
                    </ul>
                  </Card.Body>
                  <Card.Footer className="text-center border-top-0 pt-1">
                    <button className="btn btn-lg btn-outline-success btn-block">
                      <span className="ms-4 me-4">Select</span>
                    </button>
                  </Card.Footer>
                </Card>
              </Col>
            </div>
          </div>
            </Tab.Pane>
          </Tab.Content>
      </Row>
    </Tab.Container>

    {/* <!-- ROW-5 CLOSED --> */}
  </div>
)
  };

export default Pricing;
