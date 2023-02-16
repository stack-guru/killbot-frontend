import React from 'react';
import { Form, Button, ButtonGroup, OverlayTrigger, Tooltip } from 'react-bootstrap';

// pics

import pic1 from '../../assets/images/users/16.jpg'
import pic2 from '../../assets/images/users/15.jpg'
import pic3 from '../../assets/images/users/4.jpg'
import pic4 from '../../assets/images/users/18.jpg'
import pic5 from '../../assets/images/users/19.jpg'
import pic6 from '../../assets/images/users/21.jpg'
import pic7 from '../../assets/images/users/12.jpg'
import pic8 from '../../assets/images/users/1.jpg'
import pic9 from '../../assets/images/users/12.jpg'
import pic10 from '../../assets/images/users/15.jpg'
import pic11 from '../../assets/images/users/12.jpg'
import pic12 from '../../assets/images/users/4.jpg'

export const COLUMNS = [
  {
    Header: "S NO",
    accessor: "SNO",
    className: "text-center ",
  },
  {
    Header: "PHOTO",
    accessor: "PHOTO",
    className: "text-center ",

  },
  {
    Header: "NAME",
    accessor: "NAME",
    className: "text-center ",
  },
  {
    Header: "DATE",
    accessor: "DATE",
    className: "text-center ",
  },
  {
    Header: "ACTION",
    accessor: "ACTION",
    className: "text-center ",
  },

];

export const DATATABLE = [
  {
    SNO: <Form.Check className='align-middle ' />,
    ACTION: <span className="text-center align-middle">
      <ButtonGroup size="sm" className='flex-nowrap' >
        <OverlayTrigger placement="top" overlay={<Tooltip >Edit</Tooltip>}>
          <Button>Edit</Button>
        </OverlayTrigger>
        <OverlayTrigger placement="top" overlay={<Tooltip >Delete</Tooltip>}>
          <Button>
            <i className="fa fa-trash"></i>
          </Button>
        </OverlayTrigger>
      </ButtonGroup>
    </span>,
    PHOTO: <img src={pic1} className="avatar avatar-md br-7" alt="" />,
    NAME: "Adam Cotter",
    DATE: "	09 Dec 2017",
  },
  {
    SNO: <Form.Check className='align-middle ' />,
    ACTION: <span className="text-center align-middle">
      <ButtonGroup size="sm" className='flex-nowrap'>
        <OverlayTrigger placement="top" overlay={<Tooltip >Edit</Tooltip>}>
          <Button>Edit</Button>
        </OverlayTrigger>
        <OverlayTrigger placement="top" overlay={<Tooltip >Delete</Tooltip>}>
          <Button>
            <i className="fa fa-trash"></i>
          </Button>
        </OverlayTrigger>
      </ButtonGroup>
    </span>,
    PHOTO: <img src={pic2} className="avatar avatar-md br-7" alt="" />,
    NAME: "Pauline Noble",
    DATE: "	26 Jan 2018",
  },
  {
    SNO: <Form.Check className='align-middle ' />,
    ACTION: <span className="text-center align-middle">
      <ButtonGroup size="sm" className='flex-nowrap' >
        <OverlayTrigger placement="top" overlay={<Tooltip >Edit</Tooltip>}>
          <Button>Edit</Button>
        </OverlayTrigger>
        <OverlayTrigger placement="top" overlay={<Tooltip >Delete</Tooltip>}>
          <Button>
            <i className="fa fa-trash"></i>
          </Button>
        </OverlayTrigger>
      </ButtonGroup>
    </span>,
    PHOTO: <img src={pic3} className="avatar avatar-md br-7" alt="" />,
    NAME: "Sherilyn Metzel",
    DATE: "	27 Jan 2018",

  },
  {
    SNO: <Form.Check className='align-middle ' />,
    ACTION: <span className="text-center align-middle">
      <ButtonGroup size="sm" className='flex-nowrap' >
        <OverlayTrigger placement="top" overlay={<Tooltip >Edit</Tooltip>}>
          <Button>Edit</Button>
        </OverlayTrigger>
        <OverlayTrigger placement="top" overlay={<Tooltip >Delete</Tooltip>}>
          <Button>
            <i className="fa fa-trash"></i>
          </Button>
        </OverlayTrigger>
      </ButtonGroup>
    </span>,
    PHOTO: <img src={pic4} className="avatar avatar-md br-7" alt="" />,
    NAME: "Terrie Boaler",
    DATE: "	20 Jan 2018",
  },
  {
    SNO: <Form.Check className='align-middle ' />,
    ACTION: <span className="text-center align-middle">
      <ButtonGroup size="sm" className='flex-nowrap' >
        <OverlayTrigger placement="top" overlay={<Tooltip >Edit</Tooltip>}>
          <Button>Edit</Button>
        </OverlayTrigger>
        <OverlayTrigger placement="top" overlay={<Tooltip >Delete</Tooltip>}>
          <Button>
            <i className="fa fa-trash"></i>
          </Button>
        </OverlayTrigger>
      </ButtonGroup>
    </span>,
    PHOTO: <img src={pic5} className="avatar avatar-md br-7" alt="" />,
    NAME: "Rutter Pude",
    DATE: "13 Jan 2018",

  },
  {
    SNO: <Form.Check className='align-middle ' />,
    ACTION: <span className="text-center align-middle">
      <ButtonGroup size="sm" className='flex-nowrap' >
        <OverlayTrigger placement="top" overlay={<Tooltip >Edit</Tooltip>}>
          <Button>Edit</Button>
        </OverlayTrigger>
        <OverlayTrigger placement="top" overlay={<Tooltip >Delete</Tooltip>}>
          <Button>
            <i className="fa fa-trash"></i>
          </Button>
        </OverlayTrigger>
      </ButtonGroup>
    </span>,
    PHOTO: <img src={pic6} className="avatar avatar-md br-7" alt="" />,
    NAME: "Clifford Benjamin",
    DATE: "25 Jan 2018",

  },
  {
    SNO: <Form.Check className='align-middle ' />,
    ACTION: <span className="text-center align-middle">
      <ButtonGroup size="sm" className='flex-nowrap' >
        <OverlayTrigger placement="top" overlay={<Tooltip >Edit</Tooltip>}>
          <Button>Edit</Button>
        </OverlayTrigger>
        <OverlayTrigger placement="top" overlay={<Tooltip >Delete</Tooltip>}>
          <Button>
            <i className="fa fa-trash"></i>
          </Button>
        </OverlayTrigger>
      </ButtonGroup>
    </span>,
    PHOTO: <img src={pic7} className="avatar avatar-md br-7" alt="" />,
    NAME: "Thedric Romans",
    DATE: "	12 Jan 2018",
  },
  {
    SNO: <Form.Check className='align-middle ' />,
    ACTION: <span className="text-center align-middle">
      <ButtonGroup size="sm" className='flex-nowrap' >
        <OverlayTrigger placement="top" overlay={<Tooltip >Edit</Tooltip>}>
          <Button>Edit</Button>
        </OverlayTrigger>
        <OverlayTrigger placement="top" overlay={<Tooltip >Delete</Tooltip>}>
          <Button>
            <i className="fa fa-trash"></i>
          </Button>
        </OverlayTrigger>
      </ButtonGroup>
    </span>,
    PHOTO: <img src={pic8} className="avatar avatar-md br-7" alt="" />,
    NAME: "Haily Carthew",
    DATE: "	27 Jan 2018",

  },
  {
    SNO: <Form.Check className='align-middle ' />,
    ACTION: <span className="text-center align-middle">
      <ButtonGroup size="sm" className='flex-nowrap' >
        <OverlayTrigger placement="top" overlay={<Tooltip >Edit</Tooltip>}>
          <Button>Edit</Button>
        </OverlayTrigger>
        <OverlayTrigger placement="top" overlay={<Tooltip >Delete</Tooltip>}>
          <Button>
            <i className="fa fa-trash"></i>
          </Button>
        </OverlayTrigger>
      </ButtonGroup>
    </span>,
    PHOTO: <img src={pic9} className="avatar avatar-md br-7" alt="" />,
    NAME: "Dorothea Joicey",
    DATE: "	12 Dec 2017",

  },
  {
    SNO: <Form.Check className='align-middle ' />,
    ACTION: <span className="text-center align-middle">
      <ButtonGroup size="sm" className='flex-nowrap' >
        <OverlayTrigger placement="top" overlay={<Tooltip >Edit</Tooltip>}>
          <Button>Edit</Button>
        </OverlayTrigger>
        <OverlayTrigger placement="top" overlay={<Tooltip >Delete</Tooltip>}>
          <Button>
            <i className="fa fa-trash"></i>
          </Button>
        </OverlayTrigger>
      </ButtonGroup>
    </span>,
    PHOTO: <img src={pic10} className="avatar avatar-md br-7" alt="" />,
    NAME: "Mikaela Pinel",
    DATE: "10 Dec 2017",

  },
  {
    SNO: <Form.Check className='align-middle ' />,
    ACTION: <span className="text-center align-middle">
      <ButtonGroup size="sm" className='flex-nowrap' >
        <OverlayTrigger placement="top" overlay={<Tooltip >Edit</Tooltip>}>
          <Button>Edit</Button>
        </OverlayTrigger>
        <OverlayTrigger placement="top" overlay={<Tooltip >Delete</Tooltip>}>
          <Button>
            <i className="fa fa-trash"></i>
          </Button>
        </OverlayTrigger>
      </ButtonGroup>
    </span>,
    PHOTO: <img src={pic11} className="avatar avatar-md br-7" alt="" />,
    NAME: "Donnell Farries",
    DATE: "	03 Dec 2017",
  },
  {
    SNO: <Form.Check className='align-middle ' />,
    ACTION: <span className="text-center align-middle">
      <ButtonGroup size="sm" className='flex-nowrap' >
        <OverlayTrigger placement="top" overlay={<Tooltip >Edit</Tooltip>}>
          <Button>Edit</Button>
        </OverlayTrigger>
        <OverlayTrigger placement="top" overlay={<Tooltip >Delete</Tooltip>}>
          <Button>
            <i className="fa fa-trash"></i>
          </Button>
        </OverlayTrigger>
      </ButtonGroup>
    </span>,
    PHOTO: <img src={pic12} className="avatar avatar-md br-7" alt="" />,
    NAME: "Letizia Puncher",
    DATE: "09 Dec 2017",
  },
];
