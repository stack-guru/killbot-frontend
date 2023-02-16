import React from 'react';
import PageHeader from '../../../../Layouts/PageHeader/PageHeader';
import styles from './FormInputSpinners.module.scss';
import { Row, Col, Card, Form, Spinner } from 'react-bootstrap';

const FormInputSpinners = () => {

  return (

  <div className={styles.FormInputSpinners}>
    <PageHeader titles="Form-Input-Spinners" active="Form-Input-Spinners" items={['Forms']} />

    {/* <!-- ROW-1 OPEN --> */}
    <Row>
      <Col xl={6}>
        <Card>
          <Card.Header>
            <Card.Title as='h4' className="fw-semibold">Small bootstrap-input-spinners</Card.Title>
          </Card.Header>
          <Card.Body className="pb-3">

            <div className="mb-3 is-loading">
              <Form.Control placeholder="spinner-border spinner-border-sm" />
              <Spinner variant='primary' animation="border" size="sm" role="status" aria-hidden="true"></Spinner>
            </div>

            <div className="mb-3 is-loading">
              <Form.Control placeholder="spinner-border spinner-border-sm text-warning" />
              <Spinner variant='warning' animation="border" size="sm" role="status" aria-hidden="true"></Spinner>
            </div>

            <div className="mb-3 is-loading">
              <Form.Control placeholder="disabled spinner-border spinner-border-sm" disabled />
              <Spinner variant='primary' animation="border" size="sm" role="status" aria-hidden="true"></Spinner>

            </div>

            <div className="mb-3 is-loading">
              <Form.Control placeholder="readonly spinner-border spinner-border-sm" readOnly/>
             <Spinner variant='primary' animation="border" size="sm" role="status" aria-hidden="true"></Spinner>

            </div>

            <div className="mb-3 is-loading">
              <Form.Control placeholder="disabled spinner-border spinner-border-sm text-warning" disabled />
              <Spinner variant='warning' animation="border" size="sm" role="status" aria-hidden="true"></Spinner>
            </div>

            <div className="mb-3 is-loading">
              <Form.Control placeholder="readonly spinner-border spinner-border-sm text-warning" readOnly/>
              <Spinner variant='warning' animation="border" size="sm" role="status" aria-hidden="true"></Spinner>
            </div>

            <div className="mb-3 is-loading">
              <Form.Control  placeholder="spinner-border spinner-border-sm" isValid/>
              <Spinner variant='primary' animation="border" size="sm" role="status" aria-hidden="true"></Spinner>
            </div>

            <div className="mb-3 is-loading">
              <Form.Control  placeholder="is-invalid spinner-border spinner-border-sm" isInvalid/>
              <Spinner variant='primary' animation="border" size="sm" role="status" aria-hidden="true"></Spinner>
            </div>

            <div className="mb-3 is-loading">
              <Form.Control  placeholder="is-valid disabled spinner-border spinner-border-sm" isValid disabled />
              <Spinner variant='primary' animation="border" size="sm" role="status" aria-hidden="true"></Spinner>
            </div>

            <div className="mb-3 is-loading">
              <Form.Control  placeholder="is-valid readonly spinner-border spinner-border-sm" isValid />
              <Spinner variant='primary' animation="border" size="sm" role="status" aria-hidden="true"></Spinner>
            </div>

            <div className="mb-3 is-loading">
              <Form.Control placeholder="is-invalid disabled spinner-border spinner-border-sm" isInvalid disabled />
              <Spinner variant='primary' animation="border" size="sm" role="status" aria-hidden="true"></Spinner>
            </div>

            <div className="mb-3 is-loading">
              <Form.Control  placeholder="is-invalid readonly spinner-border spinner-border-sm" isInvalid />
              <Spinner variant='primary' animation="border" size="sm" role="status" aria-hidden="true"></Spinner>
            </div>
          </Card.Body>
        </Card>
        <Card>
          <Card.Header>
            <Card.Title as='h4' className="fw-semibold">Small bootstrap-input-spinner-grow</Card.Title>
          </Card.Header>
          <Card.Body className="pb-3">

            <div className="mb-3 is-loading">
              <Form.Control placeholder="spinner-grow spinner-grow-sm" />
              <Spinner variant='primary' animation="grow" size="sm" role="status" aria-hidden="true"></Spinner>
            </div>

            <div className="mb-3 is-loading">
              <Form.Control placeholder="disabled spinner-grow spinner-grow-sm" disabled />
              <Spinner variant='primary' animation="grow" size="sm" role="status" aria-hidden="true"></Spinner>
            </div>

            <div className="mb-3 is-loading">
              <Form.Control placeholder="readonly spinner-grow spinner-grow-sm" readOnly />
              <Spinner variant='primary' animation="grow" size="sm" role="status" aria-hidden="true"></Spinner>
            </div>

            <div className="mb-3 is-loading">
              <Form.Control placeholder="is-valid spinner-grow spinner-grow-sm" isValid />
              <Spinner variant='primary' animation="grow" size="sm" role="status" aria-hidden="true"></Spinner>
            </div>

          </Card.Body>
        </Card>
        <Card>
          <Card.Header>
            <Card.Title as='h4' className="fw-semibold">Large bootstrap-input-spinner-grow</Card.Title>
          </Card.Header>
          <Card.Body className="pb-3">

          <div className="mb-3 is-loading">
              <Form.Control placeholder="spinner-grow spinner-grow-sm" />
              <Spinner variant='primary' animation="grow" role="status" aria-hidden="true"></Spinner>
            </div>

            <div className="mb-3 is-loading">
              <Form.Control placeholder="disabled spinner-grow spinner-grow-sm" disabled />
              <Spinner variant='primary' animation="grow" role="status" aria-hidden="true"></Spinner>
            </div>

            <div className="mb-3 is-loading">
              <Form.Control placeholder="readonly spinner-grow spinner-grow-sm" readOnly />
              <Spinner variant='primary' animation="grow" role="status" aria-hidden="true"></Spinner>
            </div>

            <div className="mb-3 is-loading">
              <Form.Control placeholder="is-valid spinner-grow spinner-grow-sm" isValid />
              <Spinner variant='primary' animation="grow" role="status" aria-hidden="true"></Spinner>
            </div>

          </Card.Body>
        </Card>
        <Card>
          <Card.Header>
            <Card.Title as='h4' className="fw-semibold">Small textarea bootstrap-input-spinners</Card.Title>
          </Card.Header>
          <Card.Body className="pb-3">

            <div className="mb-3">
              <textarea className="form-control is-valid" placeholder="is-valid"></textarea>
            </div>

            <div className="mb-3 is-loading">
              <textarea className="form-control" placeholder="spinner-border spinner-border-sm"></textarea>
              <div className="spinner-border spinner-border-sm"></div>
            </div>

            <div className="mb-3 is-loading">
              <textarea className="form-control" placeholder="disabled spinner-border spinner-border-sm" disabled ></textarea>
              <div className="spinner-border spinner-border-sm"></div>
            </div>

            <div className="mb-3 is-loading">
              <textarea className="form-control" placeholder="readonly spinner-border spinner-border-sm" ></textarea>
              <div className="spinner-border spinner-border-sm"></div>
            </div>

            <div className="mb-3 is-loading">
              <textarea className="form-control is-valid" placeholder="is-valid spinner-border spinner-border-sm" ></textarea>
              <div className="spinner-border spinner-border-sm"></div>
            </div>
          </Card.Body>
        </Card>
        <Card>
          <Card.Header>
            <Card.Title as='h4' className="fw-semibold">Large textarea bootstrap-input-spinners</Card.Title>
          </Card.Header>
          <Card.Body className="pb-3">
            <div className="mb-3 is-loading">
              <textarea className="form-control" placeholder="spinner-border"></textarea>
              <div className="spinner-border"></div>
            </div>

            <div className="mb-3 is-loading">
              <textarea className="form-control" placeholder="disabled spinner-border" disabled></textarea>
              <div className="spinner-border"></div>
            </div>

            <div className="mb-3 is-loading">
              <textarea className="form-control" placeholder="readonly spinner-border" ></textarea>
              <div className="spinner-border"></div>
            </div>

            <div className="mb-3 is-loading">
              <textarea className="form-control is-valid" placeholder="is-valid spinner-border"></textarea>
              <div className="spinner-border"></div>
            </div>
          </Card.Body>
        </Card>
        <Card>
          <Card.Header>
            <Card.Title as='h4' className="fw-semibold">Small Select (can be broken, use form-select instead)</Card.Title>
          </Card.Header>
          <Card.Body className="pb-3">
            <div className="mb-3">
              <select className="form-control is-valid">
                <option>is-valid</option>
              </select>
            </div>

            <div className="mb-3 is-loading">
              <select className="form-control">
                <option>spinner-border spinner-border-sm</option>
              </select>
              <div className="spinner-border spinner-border-sm"></div>
            </div>

            <div className="mb-3 is-loading">
              <select className="form-control" disabled>
                <option>disabled spinner-border spinner-border-sm</option>
              </select>
              <div className="spinner-border spinner-border-sm"></div>
            </div>

            <div className="mb-3 is-loading">
              <select className="form-control is-valid">
                <option>is-valid spinner-border spinner-border-sm</option>
              </select>
              <div className="spinner-border spinner-border-sm"></div>
            </div>
          </Card.Body>
        </Card>
        <Card>
          <Card.Header>
            <Card.Title as='h4' className="fw-semibold">Large Select (can be broken, use form-select instead)</Card.Title>
          </Card.Header>
          <Card.Body className="pb-3">
            <div className="mb-3 is-loading">
              <select className="form-control">
                <option>spinner-border</option>
              </select>
              <div className="spinner-border"></div>
            </div>

            <div className="mb-3 is-loading">
              <select className="form-control" disabled>
                <option>disabled spinner-border</option>
              </select>
              <div className="spinner-border"></div>
            </div>

            <div className="mb-3 is-loading">
              <select className="form-control is-valid">
                <option>is-valid spinner-border</option>
              </select>
              <div className="spinner-border"></div>
            </div>
          </Card.Body>
        </Card>
        <Card>
          <Card.Header>
            <Card.Title as='h4' className="fw-semibold">Small multiple (can be broken, use form-select instead)</Card.Title>
          </Card.Header>
          <Card.Body className="pb-3">
            <div className="mb-3">
              <select className="form-control is-valid" multiple>
                <option>is-valid</option>
              </select>
            </div>

            <div className="mb-3 is-loading">
              <select className="form-control" multiple>
                <option>spinner-border spinner-border-sm</option>
              </select>
              <div className="spinner-border spinner-border-sm"></div>
            </div>

            <div className="mb-3 is-loading">
              <select className="form-control" multiple disabled>
                <option>disabled spinner-border spinner-border-sm</option>
              </select>
              <div className="spinner-border spinner-border-sm"></div>
            </div>

            <div className="mb-3 is-loading">
              <select className="form-control is-valid" multiple>
                <option>is-valid spinner-border spinner-border-sm</option>
              </select>
              <div className="spinner-border spinner-border-sm"></div>
            </div>
          </Card.Body>
        </Card>
        <Card>
          <Card.Header>
            <Card.Title as='h4' className="fw-semibold">Large Select (can be broken, use form-select instead)</Card.Title>
          </Card.Header>
          <Card.Body className="pb-3">
            <div className="mb-3 is-loading">
              <select className="form-control" multiple>
                <option>spinner-border</option>
              </select>
              <div className="spinner-border"></div>
            </div>

            <div className="mb-3 is-loading">
              <select className="form-control" multiple disabled>
                <option>disabled spinner-border</option>
              </select>
              <div className="spinner-border"></div>
            </div>

            <div className="mb-3 is-loading">
              <select className="form-control is-valid" multiple>
                <option>is-valid spinner-border</option>
              </select>
              <div className="spinner-border"></div>
            </div>
          </Card.Body>
        </Card>
      </Col>
      <Col xl={6}>
        <Card>
          <Card.Header>
            <Card.Title as='h4' className="fw-semibold">Large bootstrap-input-spinner</Card.Title>
          </Card.Header>
          <Card.Body className="pb-3">
            <div className="mb-3 is-loading">
              <Form.Control className="form-control" placeholder="spinner-border" />
              <div className="spinner-border"></div>
            </div>

            <div className="mb-3 is-loading">
              <Form.Control className="form-control" placeholder="disabled spinner-border" disabled />
              <div className="spinner-border"></div>
            </div>

            <div className="mb-3 is-loading">
              <Form.Control className="form-control" placeholder="readonly spinner-border"  />
              <div className="spinner-border"></div>
            </div>

            <div className="mb-3 is-loading">
              <Form.Control className="form-control is-valid" placeholder="is-valid spinner-border" />
              <div className="spinner-border"></div>
            </div>
          </Card.Body>
        </Card>
        <Card>
          <Card.Header>
            <Card.Title as='h4' className="fw-semibold">Small Bootstrap-input-spinners with label</Card.Title>
          </Card.Header>
          <div className="card-body">
            <div className="form-group">
              <Form.Label forhtml="input-label-sm">Small Label</Form.Label>
              <div className="is-loading">
                <Form.Control id="input-label-sm" className="form-control" placeholder="spinner-border spinner-border-sm"/>
                  <div className="spinner-border spinner-border-sm"></div>
              </div>
            </div>
            <div className="form-group">
              <Form.Label forhtml="input-label-sm-is-valid">Is valid small Label</Form.Label>
              <div className="is-loading">
                <Form.Control id="input-label-sm-is-valid" className="form-control is-valid" placeholder="is-valid spinner-border spinner-border-sm"/>
                  <div className="spinner-border spinner-border-sm-is-valid"></div>
              </div>
            </div>
          </div>
        </Card>
        <Card>
          <Card.Header>
            <Card.Title as='h4' className="fw-semibold">Large Bootstrap-input-spinners with label</Card.Title>
          </Card.Header>
          <div className="card-body">
            <div className="form-group">
              <Form.Label forhtml="input-label-lg">Large Label</Form.Label>
              <div className="is-loading">
                <Form.Control id="input-label-lg" className="form-control" placeholder="spinner-border spinner-border-lg"/>
                  <div className="spinner-border spinner-border-lg"></div>
              </div>
            </div>
            <div className="form-group">
              <Form.Label forhtml="input-label-lg-is-valid">Is valid Large Label</Form.Label>
              <div className="is-loading">
                <Form.Control id="input-label-lg-is-valid" className="form-control is-valid" placeholder="is-valid spinner-border spinner-border-lg"/>
                  <div className="spinner-border spinner-border-lg-is-valid"></div>
              </div>
            </div>
          </div>
        </Card>
        <Card>
          <Card.Header>
            <Card.Title as='h4' className="fw-semibold">form-control-sm Bootstrap-input-spinners</Card.Title>
          </Card.Header>
          <Card.Body className="pb-3">
            <div className="mb-3">
              <Form.Control className="form-control form-control-sm is-valid" placeholder="form-control-sm is-valid" />
            </div>

            <div className="mb-3 is-loading">
              <Form.Control className="form-control form-control-sm" placeholder="form-control-sm spinner-border spinner-border-sm" />
              <div className="spinner-border spinner-border-sm"></div>
            </div>

            <div className="mb-3 is-loading">
              <Form.Control className="form-control form-control-sm" placeholder="form-control-sm disabled spinner-border spinner-border-sm" disabled />
              <div className="spinner-border spinner-border-sm"></div>
            </div>

            <div className="mb-3 is-loading">
              <Form.Control className="form-control form-control-sm" placeholder="form-control-sm readonly spinner-border spinner-border-sm"  />
              <div className="spinner-border spinner-border-sm"></div>
            </div>

            <div className="mb-3 is-loading">
              <Form.Control className="form-control form-control-sm is-valid" placeholder="form-control-sm is-valid spinner-border spinner-border-sm" />
              <div className="spinner-border spinner-border-sm"></div>
            </div>
          </Card.Body>
        </Card>
        <Card>
          <Card.Header>
            <Card.Title as='h4' className="fw-semibold">form-control-lg Bootstrap-input-spinners</Card.Title>
          </Card.Header>
          <Card.Body className="pb-3">
            <div className="mb-3">
              <Form.Control className="form-control form-control-lg is-valid" placeholder="form-control-lg is-valid" />
            </div>

            <h6 className="my-5 fw-semibold fs-15" id="form-control-lg-sm">Small spinners</h6>

            <div className="mb-3 is-loading">
              <Form.Control className="form-control form-control-lg" placeholder="form-control-lg spinner-border spinner-border-sm" />
              <div className="spinner-border spinner-border-sm"></div>
            </div>

            <div className="mb-3 is-loading">
              <Form.Control className="form-control form-control-lg" placeholder="form-control-lg disabled spinner-border spinner-border-sm" disabled />
              <div className="spinner-border spinner-border-sm"></div>
            </div>

            <div className="mb-3 is-loading">
              <Form.Control className="form-control form-control-lg" placeholder="form-control-lg readonly spinner-border spinner-border-sm"  />
              <div className="spinner-border spinner-border-sm"></div>
            </div>

            <div className="mb-3 is-loading">
              <Form.Control className="form-control form-control-lg is-valid" placeholder="form-control-lg is-valid spinner-border spinner-border-sm" />
              <div className="spinner-border spinner-border-sm"></div>
            </div>

            <h6 className="my-5 fw-semibold fs-15" id="form-control-lg-lg">Large Spinners</h6>

            <div className="mb-3 is-loading">
              <Form.Control className="form-control form-control-lg" placeholder="form-control-lg spinner-border" />
              <div className="spinner-border"></div>
            </div>

            <div className="mb-3 is-loading">
              <Form.Control className="form-control form-control-lg" placeholder="form-control-lg disabled spinner-border" disabled />
              <div className="spinner-border"></div>
            </div>

            <div className="mb-3 is-loading">
              <Form.Control className="form-control form-control-lg" placeholder="form-control-lg readonly spinner-border"  />
              <div className="spinner-border"></div>
            </div>

            <div className="mb-3 is-loading">
              <Form.Control className="form-control form-control-lg is-valid" placeholder="form-control-lg is-valid spinner-border" />
              <div className="spinner-border"></div>
            </div>
          </Card.Body>
        </Card>
        <Card>
          <Card.Header>
            <Card.Title as='h4' className="fw-semibold">form-control-plaintext Bootstrap-input-spinners</Card.Title>
          </Card.Header>
          <Card.Body className="pb-3">

            <h6 className="fw-semibold fs-15" id="form-control-plaintext-sm">Small Spinners</h6>
            <div className="mb-3 is-loading">
              <Form.Control className="form-control-plaintext" placeholder="form-control-plaintext spinner-border spinner-border-sm" />
              <div className="spinner-border spinner-border-sm"></div>
            </div>

            <div className="mb-3 is-loading">
              <Form.Control className="form-control-plaintext" placeholder="form-control-plaintext disabled spinner-border spinner-border-sm" disabled />
              <div className="spinner-border spinner-border-sm"></div>
            </div>

            <div className="mb-3 is-loading">
              <Form.Control className="form-control-plaintext" placeholder="form-control-plaintext readonly spinner-border spinner-border-sm" />
              <div className="spinner-border spinner-border-sm"></div>
            </div>

            <div className="mb-3 is-loading">
              <Form.Control className="form-control-plaintext is-valid" placeholder="form-control-plaintext is-valid spinner-border spinner-border-sm" />
              <div className="spinner-border spinner-border-sm"></div>
            </div>

            <h6 className="my-5 fw-semibold fs-15" id="form-control-plaintext-lg">Large Spinners</h6>

            <div className="mb-3 is-loading">
              <Form.Control className="form-control-plaintext" placeholder="form-control-plaintext spinner-border" />
              <div className="spinner-border"></div>
            </div>

            <div className="mb-3 is-loading">
              <Form.Control className="form-control-plaintext" placeholder="form-control-plaintext disabled spinner-border" disabled />
              <div className="spinner-border"></div>
            </div>

            <div className="mb-3 is-loading">
              <Form.Control className="form-control-plaintext" placeholder="form-control-plaintext readonly spinner-border"  />
              <div className="spinner-border"></div>
            </div>

            <div className="mb-3 is-loading">
              <Form.Control className="form-control-plaintext is-valid" placeholder="form-control-plaintext is-valid spinner-border" />
              <div className="spinner-border"></div>
            </div>
          </Card.Body>
        </Card>
        <Card>
          <Card.Header>
            <Card.Title as='h4' className="fw-semibold">Input-group prepend Bootstrap-input-spinners</Card.Title>
          </Card.Header>
          <Card.Body className="pb-3">

            <div className="mb-3">
              <div className="input-group">
                <span className="input-group-text">prepend</span>
                <Form.Control className="form-control is-valid" placeholder="is-valid" />
              </div>
            </div>

            <h6 className="my-5 fw-semibold fs-15" id="input-group-prepend-sm">Small spinner input-group prepend</h6>

            <div className="mb-3">
              <div className="input-group is-loading">
                <span className="input-group-text">prepend</span>
                <Form.Control className="form-control" placeholder="spinner-border spinner-border-sm" />
                <div className="spinner-border spinner-border-sm"></div>
              </div>
            </div>

            <div className="mb-3">
              <div className="input-group is-loading">
                <span className="input-group-text">prepend</span>
                <Form.Control className="form-control" placeholder="disabled spinner-border spinner-border-sm" disabled />
                <div className="spinner-border spinner-border-sm"></div>
              </div>
            </div>

            <div className="mb-3">
              <div className="input-group is-loading">
                <span className="input-group-text">prepend</span>
                <Form.Control className="form-control" placeholder="readonly spinner-border spinner-border-sm"  />
                <div className="spinner-border spinner-border-sm"></div>
              </div>
            </div>

            <div className="mb-3">
              <div className="input-group is-loading">
                <span className="input-group-text">prepend</span>
                <Form.Control className="form-control is-valid" placeholder="is-valid spinner-border spinner-border-sm" />
                <div className="spinner-border spinner-border-sm"></div>
              </div>
            </div>

            <h6 className="my-5 fw-semibold fs-15" id="input-group-prepend-lg">Large spinner input-group prepend</h6>

            <div className="mb-3">
              <div className="input-group is-loading">
                <span className="input-group-text">prepend</span>
                <Form.Control className="form-control" placeholder="spinner-border" />
                <div className="spinner-border"></div>
              </div>
            </div>

            <div className="mb-3">
              <div className="input-group is-loading">
                <span className="input-group-text">prepend</span>
                <Form.Control className="form-control" placeholder="disabled spinner-border" disabled />
                <div className="spinner-border"></div>
              </div>
            </div>

            <div className="mb-3">
              <div className="input-group is-loading">
                <span className="input-group-text">prepend</span>
                <Form.Control className="form-control" placeholder="readonly spinner-border"  />
                <div className="spinner-border"></div>
              </div>
            </div>

            <div className="mb-3">
              <div className="input-group is-loading">
                <span className="input-group-text">prepend</span>
                <Form.Control className="form-control is-valid" placeholder="is-valid spinner-border" />
                <div className="spinner-border"></div>
              </div>
            </div>
          </Card.Body>
        </Card>
        <Card>
          <Card.Header>
            <Card.Title as='h4' className="fw-semibold">Input-group append Bootstrap-input-spinners</Card.Title>
          </Card.Header>
          <Card.Body className="pb-3">

            <div className="mb-3">
              <div className="input-group">
                <Form.Control className="form-control is-valid" placeholder="is-valid" />
                <span className="input-group-text">append</span>
              </div>
            </div>

            <h5 className="my-5 fw-semibold fs-15">Small spinner input-group append</h5>

            <div className="mb-3">
              <div className="input-group">
                <div className="is-loading flex-fill spinner-append">
                  <Form.Control className="form-control" placeholder="spinner-border spinner-border-sm" />
                  <div className="spinner-border spinner-border-sm"></div>
                </div>
                <span className="input-group-text">append</span>
              </div>
            </div>

            <div className="mb-3">
              <div className="input-group">
                <div className="is-loading flex-fill spinner-append">
                  <Form.Control className="form-control" placeholder="disabled spinner-border spinner-border-sm" disabled />
                  <div className="spinner-border spinner-border-sm"></div>
                </div>
                <span className="input-group-text">append</span>
              </div>
            </div>

            <div className="mb-3">
              <div className="input-group">
                <div className="is-loading flex-fill spinner-append">
                  <Form.Control className="form-control" placeholder="readonly spinner-border spinner-border-sm"  />
                  <div className="spinner-border spinner-border-sm"></div>
                </div>
                <span className="input-group-text">append</span>
              </div>
            </div>

            <div className="mb-3">
              <div className="input-group">
                <div className="is-loading flex-fill spinner-append">
                  <Form.Control className="form-control is-valid" placeholder="is-valid spinner-border spinner-border-sm" />
                  <div className="spinner-border spinner-border-sm"></div>
                </div>
                <span className="input-group-text">append</span>
              </div>
            </div>

            <h6 className="my-5 fw-semibold fs-15" id="input-group-append-lg">Large spinner input-group append</h6>

            <div className="mb-3">
              <div className="input-group">
                <div className="is-loading flex-fill spinner-append">
                  <Form.Control className="form-control" placeholder="spinner-border" />
                  <div className="spinner-border"></div>
                </div>
                <span className="input-group-text">append</span>
              </div>
            </div>

            <div className="mb-3">
              <div className="input-group">
                <div className="is-loading flex-fill spinner-append">
                  <Form.Control className="form-control" placeholder="disabled spinner-border" disabled />
                  <div className="spinner-border"></div>
                </div>
                <span className="input-group-text">append</span>
              </div>
            </div>

            <div className="mb-3">
              <div className="input-group">
                <div className="is-loading flex-fill spinner-append">
                  <Form.Control className="form-control" placeholder="readonly spinner-border"  />
                  <div className="spinner-border"></div>
                </div>
                <span className="input-group-text">append</span>
              </div>
            </div>

            <div className="mb-3">
              <div className="input-group">
                <div className="is-loading flex-fill spinner-append">
                  <Form.Control className="form-control is-valid" placeholder="is-valid spinner-border" />
                  <div className="spinner-border"></div>
                </div>
                <span className="input-group-text">append</span>
              </div>
            </div>
          </Card.Body>
        </Card>
      </Col>
      <div className="col-sm-12">
        <Card>
          <Card.Header>
            <Card.Title as='h4' className="fw-semibold">Input-group append prepend Bootstrap-input-spinners</Card.Title>
          </Card.Header>
          <Card.Body className="pb-3">
            <div className="mb-3">
              <div className="input-group multiple-input-group">
                <span className="input-group-text">prepend1</span>
                <span className="input-group-text rounded-0">prepend2</span>
                <Form.Control className="form-control is-valid rounded-0" />
                <Form.Control className="form-control is-valid rounded-0" />
                <span className="input-group-text rounded-0">append1</span>
                <span className="input-group-text">append2</span>
              </div>
            </div>

            <h5 className="my-5 fw-semibold fs-15">Small spinner input-group append prepend</h5>

            <div className="mb-3">
              <div className="input-group multiple-input-group">
                <span className="input-group-text">prepend1</span>
                <span className="input-group-text rounded-0">prepend2</span>
                <div className="is-loading flex-fill">
                  <Form.Control className="form-control rounded-0" placeholder="spinner-border spinner-border-sm" />
                  <div className="spinner-border spinner-border-sm"></div>
                </div>
                <div className="is-loading flex-fill">
                  <Form.Control className="form-control rounded-0" placeholder="spinner-border spinner-border-sm" />
                  <div className="spinner-border spinner-border-sm"></div>
                </div>
                <span className="input-group-text rounded-0">append1</span>
                <span className="input-group-text">append2</span>
              </div>
            </div>

            <div className="mb-3">
              <div className="input-group multiple-input-group">
                <span className="input-group-text">prepend1</span>
                <span className="input-group-text rounded-0">prepend2</span>
                <div className="is-loading flex-fill">
                  <Form.Control className="form-control rounded-0" placeholder="disabled spinner-border spinner-border-sm" disabled />
                  <div className="spinner-border spinner-border-sm"></div>
                </div>
                <div className="is-loading flex-fill">
                  <Form.Control className="form-control rounded-0" placeholder="disabled spinner-border spinner-border-sm" disabled />
                  <div className="spinner-border spinner-border-sm"></div>
                </div>
                <span className="input-group-text rounded-0">append1</span>
                <span className="input-group-text">append2</span>
              </div>
            </div>

            <div className="mb-3">
              <div className="input-group multiple-input-group">
                <span className="input-group-text">prepend1</span>
                <span className="input-group-text rounded-0">prepend2</span>
                <div className="is-loading flex-fill">
                  <Form.Control className="form-control rounded-0" placeholder="readonly spinner-border spinner-border-sm"  />
                  <div className="spinner-border spinner-border-sm"></div>
                </div>
                <div className="is-loading flex-fill">
                  <Form.Control className="form-control rounded-0" placeholder="readonly spinner-border spinner-border-sm"  />
                  <div className="spinner-border spinner-border-sm"></div>
                </div>
                <span className="input-group-text rounded-0">append1</span>
                <span className="input-group-text">append2</span>
              </div>
            </div>

            <div className="mb-3">
              <div className="input-group multiple-input-group">
                <span className="input-group-text">prepend1</span>
                <span className="input-group-text rounded-0">prepend2</span>
                <div className="is-loading flex-fill">
                  <Form.Control className="form-control is-valid rounded-0" placeholder="is-valid spinner-border spinner-border-sm" />
                  <div className="spinner-border spinner-border-sm"></div>
                </div>
                <div className="is-loading flex-fill">
                  <Form.Control className="form-control is-valid rounded-0" placeholder="is-valid spinner-border spinner-border-sm" />
                  <div className="spinner-border spinner-border-sm"></div>
                </div>
                <span className="input-group-text rounded-0">append1</span>
                <span className="input-group-text">append2</span>
              </div>
            </div>

            <h5 className="my-5 fw-semibold fs-15">Large spinner input-group append prepend</h5>

            <div className="mb-3">
              <div className="input-group multiple-input-group">
                <span className="input-group-text">prepend1</span>
                <span className="input-group-text rounded-0">prepend2</span>
                <div className="is-loading flex-fill">
                  <Form.Control className="form-control rounded-0" placeholder="spinner-border" />
                  <div className="spinner-border"></div>
                </div>
                <div className="is-loading flex-fill">
                  <Form.Control className="form-control rounded-0" placeholder="spinner-border" />
                  <div className="spinner-border"></div>
                </div>
                <span className="input-group-text rounded-0">append1</span>
                <span className="input-group-text">append2</span>
              </div>
            </div>

            <div className="mb-3">
              <div className="input-group multiple-input-group">
                <span className="input-group-text">prepend1</span>
                <span className="input-group-text rounded-0">prepend2</span>
                <div className="is-loading flex-fill">
                  <Form.Control className="form-control rounded-0" placeholder="disabled spinner-border" disabled />
                  <div className="spinner-border"></div>
                </div>
                <div className="is-loading flex-fill">
                  <Form.Control className="form-control rounded-0" placeholder="disabled spinner-border" disabled />
                  <div className="spinner-border"></div>
                </div>
                <span className="input-group-text rounded-0">append1</span>
                <span className="input-group-text">append2</span>
              </div>
            </div>

            <div className="mb-3">
              <div className="input-group multiple-input-group">
                <span className="input-group-text">prepend1</span>
                <span className="input-group-text rounded-0">prepend2</span>
                <div className="is-loading flex-fill">
                  <Form.Control className="form-control rounded-0" placeholder="readonly spinner-border"  />
                  <div className="spinner-border"></div>
                </div>
                <div className="is-loading flex-fill">
                  <Form.Control className="form-control rounded-0" placeholder="readonly spinner-border"  />
                  <div className="spinner-border"></div>
                </div>
                <span className="input-group-text rounded-0">append1</span>
                <span className="input-group-text">append2</span>
              </div>
            </div>

            <div className="mb-3">
              <div className="input-group multiple-input-group">
                <span className="input-group-text">prepend1</span>
                <span className="input-group-text rounded-0">prepend2</span>
                <div className="is-loading flex-fill">
                  <Form.Control className="form-control is-valid rounded-0" placeholder="is-valid spinner-border" />
                  <div className="spinner-border"></div>
                </div>
                <div className="is-loading flex-fill">
                  <Form.Control className="form-control is-valid rounded-0" placeholder="is-valid spinner-border" />
                  <div className="spinner-border"></div>
                </div>
                <span className="input-group-text rounded-0">append1</span>
                <span className="input-group-text">append2</span>
              </div>
            </div>
          </Card.Body>
        </Card>
      </div>
    </Row>
    {/* <!-- /Row --> */}
  </div>
)
};

export default FormInputSpinners;
