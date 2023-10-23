/* eslint-disable react/prop-types */
import axios from "axios";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

function DeleteItem({ getData, id }) {
  const [show, setShow] = useState(false);

  const handleToggle = () => setShow((prev) => !prev);

  const deleteItem = async () => {
    try {
      await axios.delete(
        `http://192.168.1.181:8000/api/product_detail/${id}/`,
        {
          headers: {
            Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjk4NjYwNzE4LCJpYXQiOjE2OTgwNTU5MTgsImp0aSI6ImVmNTk3Mjg1MWQxYTQ4NDU5MzhhOTk5NzU5NzhjZWQ4IiwidXNlcl9pZCI6M30.N5Or7cM1JtFyJ99xDGkLSOLMgnXbHAwB3lQCMNu-Ug4 `,
          },
        }
      );
      getData();
      handleToggle();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <Button variant="danger" onClick={handleToggle}>
        Delete
      </Button>

      <Modal show={show} onHide={handleToggle}>
        <Modal.Header closeButton>
          <Modal.Title>Delete Item</Modal.Title>
        </Modal.Header>
        <Modal.Body>Woohoo, you are reading this text in a modal!</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleToggle}>
            Close
          </Button>
          <Button variant="danger" onClick={deleteItem}>
            Delete
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default DeleteItem;
