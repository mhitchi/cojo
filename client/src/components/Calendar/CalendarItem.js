import React, { useState } from 'react';
import { Row, Col, Modal } from 'reactstrap';

const CalendarItem = () => {
const [show, setShow] = useState(false);
const handleClose = () => setShow(false);
const handleShow = () => setShow(true);

return (
  <>
  <div onClick={handleShow}>ITEM</div>
  {/* popup on click */}
  <Modal show={show} onHide={handleClose}>
    <div>sup</div>
    <button onClick={handleClose}>x</button>
  </Modal>
  </>
)

}

export default CalendarItem;