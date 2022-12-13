import React from 'react';
import { Form } from './module/Form/Form';
import { Modal } from './module/Modal/Modal';
import { Table } from './module/Table/Table';
import { Title } from './module/Title/Title';

function App() {
  return (
    <div className='app-container vh-100 w-100 d-flex align-items-center justify-content-center flex-column'>
      <Modal />
      <Title />
      <Form />
      <Table />
    </div>
  );
}

export default App;
