import React, {useEffect, useState} from 'react'
import { Modal, Button } from 'react-bootstrap'

function ModalGlobal(props) {
  const [show, setShow] = useState(props.show);

  useEffect(() => {
    setShow(props.show)
  }, [props.show])

  //const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleAction = () => {
    //executar chamada da api aqui para deleter item e após isso, fechar!
   
    props.handleAction();
    setShow(false);
  }

  return (
    <>
    
      <div onClick={handleShow}>{props.children}</div>
      <Modal show={show}>
        <Modal.Header closeButton>
          <Modal.Title>{props.title}</Modal.Title>
        </Modal.Header>
        {/* <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body> */}
        <Modal.Footer>
          <Button variant="primary" onClick={() => setShow(false)}>
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