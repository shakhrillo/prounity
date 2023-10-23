/* eslint-disable react/prop-types */
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";

function ProductAdd({ addProduct }) {
  const [show, setShow] = useState(false);
  const [newData, setNewData] = useState({
    product_name: "",
    product_price: "",
  });

  const handleToggle = () => setShow((prev) => !prev);

  const handleAdd = () => {
    addProduct(newData);
    handleToggle();
    setNewData({
      product_name: "",
      product_price: "",
    });
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewData({
      ...newData,
      [name]: value,
    });
  };

  return (
    <>
      <Button variant="success" className="my-2" onClick={handleToggle}>
        Add Product
      </Button>

      <Modal centered size="lg" show={show} onHide={handleToggle}>
        <Modal.Header closeButton>
          <Modal.Title>Add Product</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group
              className="mb-3"
              controlId="ProductAddForm.ControlInput1"
            >
              <Form.Label>Product name</Form.Label>
              <Form.Control
                type="text"
                placeholder="product-name"
                name="product_name"
                value={newData.product_name}
                onChange={handleInputChange}
                autoFocus
                required
              />
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="ProductAddForm.ControlInput2"
            >
              <Form.Label>Product price</Form.Label>
              <Form.Control
                type="number"
                placeholder="product-price"
                name="product_price"
                value={newData.product_price}
                onChange={handleInputChange}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleToggle}>
            Close
          </Button>
          <Button variant="primary" onClick={handleAdd}>
            Save
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default ProductAdd;
