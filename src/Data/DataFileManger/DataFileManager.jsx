import React, { useState } from 'react';
import { Button, Modal } from 'react-bootstrap';
import { FileuploadCustomised } from '../Pages/Forms/FormAdvanceData/DataFormAdvanced';


export function DataFileManager() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const handleClick = () => {
        alert('New file successfully Created !!');
    }

    return (
        <div>
            <Button variant="primary" className="btn-block" onClick={handleShow}><i className="fe fe-plus me-1"></i> Create New File</Button>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Add New File</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <FileuploadCustomised />
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="primary" onClick={handleClick}>
                        Add
                    </Button>
                    <Button variant="danger" onClick={handleClose}>
                        Cancel
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    )
}
