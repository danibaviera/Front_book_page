// src/components/AddBookModal.js
import React, { useState } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';

const AddBookModal = ({ show, handleClose, addBook }) => {
  const [newBook, setNewBook] = useState({ title: '', author: '', year: '' });

  const handleChange = (e) => {
    setNewBook({ ...newBook, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    addBook(newBook);
    handleClose();
  };

  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Adicionar Novo Livro</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group controlId="formBookTitle">
            <Form.Label>Título</Form.Label>
            <Form.Control type="text" name="title" onChange={handleChange} />
          </Form.Group>
          <Form.Group controlId="formBookAuthor">
            <Form.Label>Autor</Form.Label>
            <Form.Control type="text" name="author" onChange={handleChange} />
          </Form.Group>
          <Form.Group controlId="formBookYear">
            <Form.Label>Ano</Form.Label>
            <Form.Control type="number" name="year" onChange={handleChange} />
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Fechar
        </Button>
        <Button variant="primary" onClick={handleSubmit}>
          Salvar Livro
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default AddBookModal;
