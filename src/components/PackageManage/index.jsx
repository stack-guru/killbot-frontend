import React, { useState, Fragment } from "react";
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
} from "react-bootstrap";
import { Chartdetails } from "../../Data/App/DataChart";

// Basic Edit Table

export const BasicEditTable = () => {
  const data = [
    {
      id: 1,
      fullName: "bronze",
      limit: "100",
    },
    {
      id: 2,
      fullName: "silver",
      limit: "200",
    },
    {
      id: 3,
      fullName: "gold",
      limit: "300",
    },
    {
      id: 4,
      fullName: "premium",
      limit: "400",
    },
    {
      id: 5,
      fullName: "platinum",
      limit: "500",
    },
  ];
  const [contacts, setContacts] = useState(data);

  const [editFormData, setEditFormData] = useState({
    fullName: "",
    limit: "",
  });

  const [editContactId, setEditContactId] = useState(null);

  const handleEditFormChange = (event) => {
    event.preventDefault();

    const fieldName = event.target.getAttribute("name");
    const fieldValue = event.target.value;

    const newFormData = { ...editFormData };
    newFormData[fieldName] = fieldValue;

    setEditFormData(newFormData);
  };

  const handleEditFormSubmit = (event) => {
    event.preventDefault();

    const editedContact = {
      id: editContactId,
      fullName: editFormData.fullName,
      limit: editFormData.limit,
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
      limit: contact.limit,
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
    <div className="app-container">
      <form onSubmit={handleEditFormSubmit}>
        <table
          id="delete-datatable"
          className="table table-bordered text-nowrap border-bottom"
        >
          <thead>
            <tr>
              <th>Name</th>
              <th>Limit</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {contacts.map((contact) => (
              <Fragment key={contact.id}>
                {editContactId === contact.id ? (
                  <EditableRows
                    editFormData={editFormData}
                    handleEditFormChange={handleEditFormChange}
                    handleCancelClick={handleCancelClick}
                  />
                ) : (
                  <ReadOnlyRows
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

      {/* <h2>Add a Contact</h2> */}
    </div>
  );
};
const EditableRows = ({
  editFormData,
  handleEditFormChange,
  handleCancelClick,
}) => {
  return (
    <tr>
      <td>
        <input
          className="form-control"
          type="text"
          required
          placeholder="Enter a name..."
          name="fullName"
          value={editFormData.fullName}
          onChange={handleEditFormChange}
        ></input>
      </td>
      <td>
        <input
          className="form-control"
          type="text"
          required
          placeholder="Enter limit..."
          name="limit"
          value={editFormData.limit}
          onChange={handleEditFormChange}
        ></input>
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
const ReadOnlyRows = ({ contact, handleEditClick, handleDeleteClick }) => {
  return (
    <tr>
      <td>{contact.fullName}</td>
      <td>{contact.limit}</td>
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

const PackageManage = () => {
  return (
    <div className={styles.PackageManage}>
      <PageHeader
        titles="Package Management"
        active="Package Management"
        items={["Home"]}
      />

      <Card>
        <Card.Body>
          <div className="table-responsive">
            <BasicEditTable />
          </div>
        </Card.Body>
      </Card>

      <Card>
        <Card.Header>
          <Card.Title as="h3">Sales</Card.Title>
        </Card.Header>
        <Card.Body>
          <Chartdetails />
        </Card.Body>
      </Card>
    </div>
  );
};

export default PackageManage;
