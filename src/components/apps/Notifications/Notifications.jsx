import React from 'react';
import { ButtonGroup, Card, Button } from 'react-bootstrap';
import styles from './Notifications.module.scss';
import PageHeader from '../../../Layouts/PageHeader/PageHeader';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Notifications = () => {

  const successNotifier = () =>
    toast.success(
      <p className="text-white tx-16 mb-0">Success: Submitted Successfully</p>,
      {
        position: toast.POSITION.TOP_RIGHT,
        hideProgressBar: true,
        autoClose: 2000,
        theme: 'colored'
      }
    );

  const secondaryNotifier = () =>
    toast.info(
      <p className="text-white tx-16 mb-0">Oops! An Error Occurred</p>,
      {
        position: toast.POSITION.TOP_CENTER,
        hideProgressBar: true,
        autoClose: 2000,
        theme: 'colored',

      }
    );

  const warningNotifier = () =>
    toast.warn(
      <p className="text-white tx-16 mb-0">Warning: Something Went Wrong</p>,
      {
        position: toast.POSITION.TOP_LEFT,
        hideProgressBar: true,
        autoClose: 2000,
        theme: 'colored',
      }
    );

  const centerInfo = () =>
    toast.info(
      <p className="text-white tx-16 mb-0">Info: Some info here.</p>,
      {
        position: toast.POSITION.TOP_CENTER,
        hideProgressBar: true,
        autoClose: 2000,
        theme: 'colored',
      }
    );

  const centerDanger = () =>
    toast.error(
      <p className="text-white tx-16 mb-0">Error: dismiss once you click it.</p>,
      {
        position: toast.POSITION.TOP_CENTER,
        hideProgressBar: true,
        autoClose: 2000,
        theme: 'colored',
      }
    );

  const centerWarning = () =>
    toast.warn(
      <p className="text-white tx-16 mb-0">Opacity is cool!</p>,
      {
        position: toast.POSITION.TOP_CENTER,
        hideProgressBar: true,
        autoClose: 2000,
        theme: 'colored',
      }
    );

  const successLeft = () =>
    toast.success(

      <span className="text-white tx-16 mb-0"><h3>Notice!</h3>You have 4 notification</span>,
      {
        position: toast.POSITION.TOP_RIGHT,
        hideProgressBar: true,
        autoClose: 2000,
        theme: 'colored',
      }

    );

  const warningLeft = () =>
    toast.warn(
      <span className="text-white tx-16 mb-0"><h3>Warning!</h3>read all details carefully</span>,
      {
        position: toast.POSITION.TOP_RIGHT,
        hideProgressBar: true,
        autoClose: 2000,
        theme: 'colored',
      }
    );

  const dangerLeft = () =>
    toast.error(
      <span className="text-white tx-16 mb-0"><h3>Error!</h3>please check Your details ...file is missing</span>,
      {
        position: toast.POSITION.TOP_RIGHT,
        hideProgressBar: true,
        autoClose: 2000,
        theme: 'colored',
      }
    );

  const gradientSuccess = () =>
    toast.success(
      <span className="text-white tx-16 mb-0"><h3>Error!</h3>please check Your details ...file is missing</span>,
      {
        position: toast.POSITION.TOP_RIGHT,
        hideProgressBar: true,
        autoClose: 2000,
        theme: 'colored',
      }
    );

  const gradientWarning = () =>
    toast.warn(
      <span className="text-white tx-16 mb-0"><h3>Error!</h3>please check Your details ...file is missing</span>,
      {
        position: toast.POSITION.TOP_RIGHT,
        hideProgressBar: true,
        autoClose: 2000,
        theme: 'colored',
      }
    );

  const gradientDanger = () =>
    toast.error(

      <span className="text-white tx-16 mb-0"><h3>Error!</h3>please check Your details ...file is missing</span>,

      {
        position: toast.POSITION.TOP_RIGHT,
        hideProgressBar: true,
        autoClose: 2000,
        theme: 'colored',
      }
    );
  return (
    <div className={styles.Notifications}>
      <PageHeader titles="Notification" active="Notification" items={['Apps']} />
      {/* <!-- ROW-1 OPEN --> */}
      <div className="row">
        <div className="col-md-12">
          <Card>
            <Card.Header>
              <Card.Title>Alerts Notifications</Card.Title>
            </Card.Header>
            <Card.Body>
              <ButtonGroup>
                <Button className='me-2' variant='success' onClick={successNotifier}>Default</Button>
                <Button className='me-2' variant='secondary' onClick={secondaryNotifier}>Center</Button>
                <Button className='me-2' variant='warning' onClick={warningNotifier}>Left</Button>
                <Button className='me-2' variant='info' onClick={centerInfo}>info</Button>
                <Button className='me-2' variant='danger' onClick={centerDanger}>Danger</Button>
                <Button className='me-2' variant='warning' onClick={centerWarning}>Warning</Button>
                <ToastContainer />
              </ButtonGroup>
            </Card.Body>
          </Card>
          <Card>
            <Card.Header>
              <Card.Title>Side Alerts Notifications</Card.Title>
            </Card.Header>
            <Card.Body>
              <ButtonGroup>
                <Button className='me-2' variant='success' onClick={successLeft}>Success</Button>
                <Button className='me-2' variant='warning' onClick={warningLeft}>warning</Button>
                <Button className='me-2' variant='danger' onClick={dangerLeft}>Danger</Button>
              </ButtonGroup>
            </Card.Body>
          </Card>
          <Card>
            <Card.Header>
              <Card.Title>Gradient Side Alerts Notifications</Card.Title>
            </Card.Header>
            <Card.Body>
              <ButtonGroup>
                <Button className='me-2' variant="success-gradient" onClick={gradientSuccess}>Success</Button>
                <Button className='me-2' variant="warning-gradient" onClick={gradientWarning}>Warning</Button>
                <Button className='me-2' variant="danger-gradient" onClick={gradientDanger}>Danger</Button>
              </ButtonGroup>
            </Card.Body>
          </Card>
        </div>
        {/* <!-- COL-END --> */}
      </div>
      {/* <!-- ROW-1 CLOSED --> */}
    </div>
  )
};
export default Notifications;
