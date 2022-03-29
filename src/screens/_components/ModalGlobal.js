import React, {useState} from 'react'
import { Modal, Button } from 'react-bootstrap'

function ModalGlobal(props) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleAction = () => {
    //executar chamada da api aqui para deleter item e após isso, fechar!
    handleClose()
  }

  return (
    <>
      <div onClick={handleShow}>{props.children}</div>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{props.title}</Modal.Title>
        </Modal.Header>
        {/* <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body> */}
        <Modal.Footer>
          <Button variant="primary" onClick={handleClose}>
            Não
          </Button>
          <Button variant="danger" onClick={handleAction}>
            Sim
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}

export default ModalGlobal