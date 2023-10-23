/* eslint-disable react/prop-types */
import axios from "axios";
import { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";

// eslint-disable-next-line react/prop-types
function ProductEdit({ EditProduct, id }) {
  const [show, setShow] = useState(false);
  const [editedData, setEditedData] = useState({
    product_name: "",
    product_price: "",
  });

  const getData = async () => {
    try {
      const { data } = await axios.get(
        `http://192.168.1.181:8000/api/product_detail/${id}/`
      );
      setEditedData({
        ...editedData,
        product_name: data.product_name,
        product_price: data.product_price,
      });
    } catch (error) {
      console.log(error);
    }
  };
  const handleToggle = () => setShow((prev) => !prev);
  const handleEdit = () => {
    EditProduct(editedData, id);
    handleToggle();
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEditedData({ ...editedData, [name]: value });
  };
  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <Button variant="warning" className="mx-2" onClick={handleToggle}>
        Edit
      </Button>

      <Modal centered size="lg" show={show} onHide={handleToggle}>
        <Modal.Header closeButton>
          <Modal.Title>Edit Product</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group
              className="mb-3"
              controlId="ProductEditForm.ControlInput1"
            >
              <Form.Label>Product name</Form.Label>
              <Form.Control
                type="text"
                placeholder="product-name"
                name="product_name"
                value={editedData.product_name || ""}
                onChange={handleInputChange}
                autoFocus
              />
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="ProductEditForm.ControlInput2"
            >
              <Form.Label>Product price</Form.Label>
              <Form.Control
                type="number"
                placeholder="product-price"
                name="product_price"
                value={editedData.product_price || 0}
                onChange={handleInputChange}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleToggle}>
            Close
          </Button>
          <Button variant="primary" onClick={handleEdit}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default ProductEdit;
