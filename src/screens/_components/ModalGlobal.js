import React, { useEffect, useState } from "react";
import { Modal, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

function ModalGlobal(props) {
  const [show, setShow] = useState(props.show);

  useEffect(() => {
    setShow(props.show);
  }, [props.show]);

  const handleShow = () => setShow(true);

  const handleAction = () => {
    props.fnc();
    setShow(false);
  };

  return (
    <>
      <div onClick={handleShow}>{props.children}</div>
      <Modal show={show}>
        <Modal.Header closeButton>
          <Modal.Title>{props.title}</Modal.Title>
        </Modal.Header>
        <Modal.Footer style={
          {
            display: 'flex',
            justifyContent: 'center'
          }
        }>
          <Button variant="primary" onClick={() => setShow(false)}>
            Não
          </Button>
          <Button
            variant="danger"
            onClick={() => {
              handleAction();
            }}
          >
            Sim
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default ModalGlobal;
