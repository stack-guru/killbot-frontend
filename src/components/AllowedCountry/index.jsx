import React, { Fragment, useState } from "react";
import styles from "./style.module.scss";
import { Link } from "react-router-dom";
import PageHeader from "../../Layouts/PageHeader/PageHeader";
import {
  Col,
  Row,
  Card,
  Button,
  Tab,
  Nav,
  Tabs,
  ListGroupItem,
  ListGroup,
  Form,
  Modal,
} from "react-bootstrap";
import { nanoid } from "nanoid";

// Add New Row with Edit Table
const Savetable = () => {
  const [modalShow, setModalShow] = React.useState(false);
  const data = [
    {
      id: 1,
      date: "2023/2/21",
      name: "Best Country",
      code: "US, RU",
    },
    {
      id: 2,
      date: "2023/2/22",
      name: "Good Country",
      code: "UK",
    },
  ];
  const [contacts, setContacts] = useState(data);
  const [addFormData, setAddFormData] = useState({
    date: "",
    name: "",
    code: "",
  });

  const [editFormData, setEditFormData] = useState({
    date: "",
    name: "",
    url: "",
  });

  const [editContactId, setEditContactId] = useState(null);

  const handleAddFormChange = (event) => {
    event.preventDefault();

    const fieldName = event.target.getAttribute("name");
    const fieldValue = event.target.value;

    const newFormData = { ...addFormData };
    newFormData[fieldName] = fieldValue;

    setAddFormData(newFormData);
  };

  const handleEditFormChange = (event) => {
    event.preventDefault();

    const fieldName = event.target.getAttribute("name");
    const fieldValue = event.target.value;

    const newFormData = { ...editFormData };
    newFormData[fieldName] = fieldValue;

    setEditFormData(newFormData);
  };

  const handleAddFormSubmit = (event) => {
    event.preventDefault();

    const newContact = {
      id: nanoid(),
      fullName: addFormData.fullName,
      position: addFormData.position,
      start: addFormData.start,
      salary: addFormData.salary,
      email: addFormData.email,
    };

    const newContacts = [...contacts, newContact];
    setContacts(newContacts);
  };

  const handleEditFormSubmit = (event) => {
    event.preventDefault();

    const editedContact = {
      id: editContactId,
      fullName: editFormData.fullName,
      position: editFormData.position,
      start: addFormData.start,
      salary: editFormData.salary,
      email: editFormData.email,
    };

    const newContacts = [...contacts];

    const index = contacts.findIndex((contact) => contact.id === editContactId);

    newContacts[index] = editedContact;

    setContacts(newContacts);
    setEditContactId(null);
  };

  const handleEditClick = (event, contact) => {
    event.preventDefault();
    setEditContactId(contact.id);

    const formValues = {
      fullName: contact.fullName,
      position: contact.position,
      start: contact.start,
      salary: contact.salary,
      email: contact.email,
    };

    setEditFormData(formValues);
  };

  const handleCancelClick = () => {
    setEditContactId(null);
  };

  const handleDeleteClick = (contactId) => {
    const newContacts = [...contacts];

    const index = contacts.findIndex((contact) => contact.id === contactId);

    newContacts.splice(index, 1);

    setContacts(newContacts);
  };

  return (
    <div className="app-container table-responsive">
      <form onSubmit={handleEditFormSubmit}>
        <Button
          variant=""
          className="btn btn-secondary mb-3"
          onClick={() => setModalShow(true)}
        >
          Add Allowed Country
        </Button>
        <table
          id="delete-datatable"
          className="table table-bordered text-nowrap border-bottom"
        >
          <thead>
            <tr>
              <th>DATE</th>
              <th>NAME</th>
              <th>COUNTRY CODE</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {contacts.map((contact) => (
              <Fragment key={contact.id}>
                {editContactId === contact.id ? (
                  <EditableRow
                    editFormData={editFormData}
                    handleEditFormChange={handleEditFormChange}
                    handleCancelClick={handleCancelClick}
                  />
                ) : (
                  <ReadOnlyRow
                    contact={contact}
                    handleEditClick={handleEditClick}
                    handleDeleteClick={handleDeleteClick}
                  />
                )}
              </Fragment>
            ))}
          </tbody>
        </table>
      </form>
      <Modal
        show={modalShow}
        onHide={() => setModalShow(false)}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header>
          <Modal.Title id="contained-modal-title-vcenter">
            Add Allowed Country
          </Modal.Title>
          <Button
            variant=""
            className="btn btn-close"
            onClick={() => setModalShow(false)}
          ></Button>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleAddFormSubmit}>
            <input
              type="text"
              name="name"
              required
              placeholder="Enter a name..."
              onChange={handleAddFormChange}
              className="form-control mb-2"
            />
            <input
              type="text"
              name="code"
              required
              placeholder="Enter an country code..."
              onChange={handleAddFormChange}
              className="form-control mb-2"
            />
            <Button variant="" className="btn btn-primary me-2" type="submit">
              Add
            </Button>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button
            className="btn btn-primary"
            onClick={() => setModalShow(false)}
          >
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};
const EditableRow = ({
  editFormData,
  handleEditFormChange,
  handleCancelClick,
}) => {
  return (
    <tr>
      <td>
        <input
          className="form-control"
          type="date"
          required
          placeholder="Enter start date..."
          name="date"
          value={editFormData.date}
          onChange={handleEditFormChange}
        />
      </td>
      <td>
        <input
          className="form-control"
          type="text"
          required
          placeholder="Enter an name..."
          name="name"
          value={editFormData.name}
          onChange={handleEditFormChange}
        ></input>
      </td>
      <td>
        <input
          className="form-control"
          type="number"
          required
          placeholder="Enter url..."
          name="url"
          value={editFormData.url}
          onChange={handleEditFormChange}
        />
      </td>
      <td>
        <Button variant="" className="btn btn-primary me-1" type="submit">
          Save
        </Button>
        <Button
          variant=""
          className="btn btn-danger me-1"
          onClick={handleCancelClick}
        >
          Cancel
        </Button>
      </td>
    </tr>
  );
};
const ReadOnlyRow = ({ contact, handleEditClick, handleDeleteClick }) => {
  return (
    <tr>
      <td>{contact.date}</td>
      <td>{contact.name}</td>
      <td>{contact.code}</td>
      <td>
        <Button
          variant=""
          className="btn btn-primary me-1"
          type="button"
          onClick={(event) => handleEditClick(event, contact)}
        >
          Edit
        </Button>
        <Button
          variant=""
          className="btn btn-danger me-1"
          type="button"
          onClick={() => handleDeleteClick(contact.id)}
        >
          Delete
        </Button>
      </td>
    </tr>
  );
};

const AllowedCountry = () => {
  return (
    <div className={styles.AllowedCountry}>
      <PageHeader
        titles="Allowed Country"
        active="Allowed Country"
        items={["Home"]}
      />
      
      <Card>
        <Card.Body>
          <Savetable />
        </Card.Body>
      </Card>
    </div>
  );
};

export default AllowedCountry;
