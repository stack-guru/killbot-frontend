import React, { Fragment, useState, useEffect } from "react";
import { Button, Form, Modal } from "react-bootstrap";
import { nanoid } from "nanoid";
import Select from 'react-select';
import { getUsers, changeActive, changeRole } from "../../../Slices/userSlice";
import { useDispatch, useSelector } from "react-redux";

const roleOptions = [
  { value: 'admin', label: 'admin'},
  { value: 'user', label: 'user'},
];

const UserTable = () => {
  const dispatch = useDispatch();
  const { users, currentUser } = useSelector((o) => o.user);

  useEffect(() => {
    dispatch(getUsers());
  }, []);

  useEffect(() => {
    setContacts(users.map(e => {
        return {
            id: e._id,
            name: e.name,
            email: e.email,
            role: e.role,
            active: e.active ? "enable" : "disable"
        }
    }))
  }, [users])

  const [modalShow, setModalShow] = React.useState(false);
  
  const [contacts, setContacts] = useState([]);
  const [addFormData, setAddFormData] = useState({
    name: "",
    email: "",
    role: "",
    active: ""
  });

  const [editFormData, setEditFormData] = useState({
    name: "",
    email: "",
    role: "",
    active: ""
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
    // event.preventDefault();

    // const fieldName = event.target.getAttribute("name");
    // const fieldValue = event.target.value;

    // const newFormData = { ...editFormData };
    // newFormData[fieldName] = fieldValue;

    // setEditFormData(newFormData);
  };

  const handleRoleChange = (e, email) => {
    dispatch(changeRole({email, role: e.value}))
  }

  const handleAddFormSubmit = (event) => {
    event.preventDefault();

    const newContact = {
      id: nanoid(),
      name: addFormData.name,
      email: addFormData.email,
      role: addFormData.role,
      active: addFormData.active
    };

    const newContacts = [...contacts, newContact];
    setContacts(newContacts);
  };

  const handleEditFormSubmit = (event) => {
    event.preventDefault();

    // const editedContact = {
    //   id: editContactId,
    //   name: editFormData.name,
    //   email: editFormData.email,
    //   role: editFormData.role,
    //   active: editFormData.active
    // };

    // const newContacts = [...contacts];

    // const index = contacts.findIndex((contact) => contact.id === editContactId);

    // newContacts[index] = editedContact;

    // setContacts(newContacts);
    setEditContactId(null);
  };

  const handleEditClick = (event, contact) => {
    event.preventDefault();
    setEditContactId(contact.id);

    const formValues = {
      name: contact.name,
      email: contact.email,
      role: contact.salary,
      active: contact.active
    };

    setEditFormData(formValues);
  };

  const handleCancelClick = () => {
    setEditContactId(null);
  };

  const handleDisableClick = (contactId, active) => {
    // const newContacts = [...contacts];
    // const index = contacts.findIndex((contact) => contact.id === contactId);
    // newContacts.splice(index, 1);
    // setContacts(newContacts);
    const status = (active === "disable" ? true : false)
    dispatch(changeActive({userId: contactId, status }))
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
              <th>Email</th>
              <th>Role</th>
              <th>Active</th>
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
                    handleRoleChange={handleRoleChange}
                  />
                ) : (
                  <ReadOnlyRow
                    contact={contact}
                    handleEditClick={handleEditClick}
                    handleDisableClick={handleDisableClick}
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
            Add New Row
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
              name="fullName"
              required
              placeholder="Enter a name..."
              onChange={handleAddFormChange}
              className="form-control mb-2"
            />
            <input
              type="text"
              name="position"
              required
              placeholder="Enter an addres..."
              onChange={handleAddFormChange}
              className="form-control mb-2"
            />
            {/* <input
                type="date"
                name="Start Date"
                required
                
                onChange={handleAddFormChange}
                className="form-control mb-2"
              /> */}
            <input
              type="number"
              name="salary"
              required
              placeholder="Enter a phone number..."
              onChange={handleAddFormChange}
              className="form-control mb-2"
            />
            <input
              type="email"
              name="email"
              required
              placeholder="Enter an email..."
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
  handleRoleChange
}) => {
  return (
    <tr>
      <td>
        {editFormData.name}
      </td>
      <td>
        {editFormData.email}
      </td>
      <td>
        <Select 
          options={roleOptions}
          placeholder="role"
          onChange={(e) => handleRoleChange(e, editFormData.email)}
        />
      </td>
      <td>
        {editFormData.active}
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
const ReadOnlyRow = ({ contact, handleEditClick, handleDisableClick }) => {
  return (
    <tr>
      <td>{contact.name}</td>
      <td>{contact.email}</td>
      <td>{contact.role}</td>
      <td>{contact.active}</td>
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
          onClick={() => handleDisableClick(contact.id, contact.active)}
        >
          {contact.active === "disable" ? "Enable" : "Disable"}
        </Button>
      </td>
    </tr>
  );
};

export default UserTable;
