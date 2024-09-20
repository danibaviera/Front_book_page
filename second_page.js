//criando a listagem de livros 
// src/components/BookList.js

// src/components/BookList.js
import React from 'react';
import { Table, Button } from 'react-bootstrap';

const BookList = ({ books, handleDelete }) => {
  return (
    <div className="mt-5">
      <h2>Lista de Livros</h2>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Título</th>
            <th>Autor</th>
            <th>Ano</th>
            <th>Ações</th>
          </tr>
        </thead>
        <tbody>
          {books.map(book => (
            <tr key={book.id}>
              <td>{book.title}</td>
              <td>{book.author}</td>
              <td>{book.year}</td>
              <td>
                <Button variant="primary" className="mr-2">Editar</Button>
                <Button variant="danger" onClick={() => handleDelete(book.id)}>Excluir</Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default BookList;
