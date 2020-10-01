import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import './styles.css';

const Add = (props) => {
  const {
    buttonLabel,
    className
  } = props;

  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  return (
    <div>
      <Button color="danger" onClick={toggle}>{buttonLabel}</Button>
      <Modal isOpen={modal} toggle={toggle} className={className}>
        <ModalHeader toggle={toggle}>ADD MOVIE</ModalHeader>
        <ModalBody>
        <form action="https://mighty-stream-55581.herokuapp.com/api/movies" method="post">
  <label for="fname">Name:</label><br/>
  <input type="text" id="name" name="name"></input><br/>
  <label for="lname">Image:</label><br/>
  <input type="text" id="image" name="image"></input><br/>
  <label for="lname">Time:</label><br/>
  <input type="text" id="time" name="time"></input><br/>
  <label for="lname">Rating:</label><br/>
  <select name="rating">
          <option>1</option>
          <option>2</option>
          <option>3</option>
          <option>4</option>
          <option>5</option>
        </select>
  <ModalFooter>
    <input type="submit" value="Submit"></input>
    <Button color="secondary" onClick={toggle}>Cancel</Button>
    </ModalFooter>
</form> 
        </ModalBody>
      </Modal>
    </div>
  );
}

export default Add;