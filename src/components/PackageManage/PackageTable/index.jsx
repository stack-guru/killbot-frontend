import React, { Fragment, useEffect, useState } from "react";
import { Button, Form, Modal } from "react-bootstrap";
import { nanoid } from "nanoid";
import { getPackages, addPackage, deletePackage, updatePackage } from "../../../Slices/packageSlice";
import { useDispatch, useSelector } from "react-redux";

// Add New Row with Edit Table
const PackageTable = () => {
  const dispatch = useDispatch();
  const {packages} = useSelector(o => o.package)

  useEffect(() => {
    dispatch(getPackages());
  }, []);

  useEffect(() => {
    setContacts(packages)
  }, [packages])

  const [modalShow, setModalShow] = React.useState(false);
  const [contacts, setContacts] = useState([]);
  const [addFormData, setAddFormData] = useState({
    name: "",
    limit: 0,
    duration: 0,
  });

  const [editFormData, setEditFormData] = useState({
    name: "",
    limit: 0,
    duration: 0,
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

    dispatch(addPackage({name: addFormData.name, limit: addFormData.limit, duration: addFormData.duration}))
    // const newContact = {
    //   id: nanoid(),
    //   fullName: addFormData.fullName,
    //   position: addFormData.position,
    //   start: addFormData.start,
    //   salary: addFormData.salary,
    //   email: addFormData.email,
    // };

    // const newContacts = [...contacts, newContact];
    // setContacts(newContacts);
  };

  const handleEditFormSubmit = (event) => {
    event.preventDefault();

    // const editedContact = {
    //   id: editContactId,
    //   fullName: editFormData.fullName,
    //   position: editFormData.position,
    //   start: addFormData.start,
    //   salary: editFormData.salary,
    //   email: editFormData.email,
    // };

    // const newContacts = [...contacts];

    // const index = contacts.findIndex((contact) => contact.id === editContactId);

    // newContacts[index] = editedContact;

    // setContacts(newContacts);

    dispatch(updatePackage({
      id: editContactId,
      name: editFormData.name,
      limit: editFormData.limit,
      duration: editFormData.duration
    }))
    setEditContactId(null);
  };

  const handleEditClick = (event, contact) => {
    event.preventDefault();
    setEditContactId(contact._id);

    const formValues = {
      name: contact.name,
      limit: contact.limit,
      duration: contact.duration,
    };

    setEditFormData(formValues);
  };

  const handleCancelClick = () => {
    setEditContactId(null);
  };

  const handleDeleteClick = (contactId) => {
    dispatch(deletePackage({id: contactId}))
  };

  return (
    <div className="app-container table-responsive">
      <form onSubmit={handleEditFormSubmit}>
        <Button
          variant=""
          className="btn btn-primary mb-3"
          onClick={() => setModalShow(true)}
        >
          Add New Package
        </Button>
        <table
          id="delete-datatable"
          className="table table-bordered text-nowrap border-bottom"
        >
          <thead>
            <tr>
              <th>Name</th>
              <th>Limit</th>
              <th>Duration</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {contacts.map((contact) => (
              <Fragment key={contact._id}>
                {editContactId === contact._id ? (
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
            Add New Package
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
              type="number"
              name="limit"
              required
              placeholder="Enter limit..."
              onChange={handleAddFormChange}
              className="form-control mb-2"
            />
            <input
              type="number"
              name="duration"
              required
              placeholder="Enter duration..."
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
          type="text"
          required
          placeholder="name..."
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
          placeholder="limit..."
          name="limit"
          value={editFormData.limit}
          onChange={handleEditFormChange}
        ></input>
      </td>
      <td>
        <input
          className="form-control"
          type="number"
          required
          placeholder="duration..."
          name="duration"
          value={editFormData.duration}
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
      <td>{contact.name}</td>
      <td>{contact.limit}</td>
      <td>{contact.duration}</td>
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
          onClick={() => handleDeleteClick(contact._id)}
        >
          Delete
        </Button>
      </td>
    </tr>
  );
};

export default PackageTable;
