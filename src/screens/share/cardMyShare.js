import { Col, Row, Button, Modal } from "react-bootstrap";
import { toast } from "react-toastify";
import userShareService from "../../services/userShare";
import ModalGlobal from "../_components/ModalGlobal";

const CardMyShare = ({ share, onCancelShared }) => {
  return (
    <div className="CardShare p-2">
      <Row className="CardShare--header justify-content-between">
        <Col>COMPARTILHADO COM:</Col>
        <Col className="text-end">{share.user_share_name}</Col>
      </Row>
      <Row className="px-2 mt-2">
        <Col className="CardShare--box">
          <Row className="justify-content-between p-1">
            <Col>Data inicio do compartilhamento</Col>
            <Col className="text-end">{share.start_date}</Col>
          </Row>
          <Row className="justify-content-between p-1">
            <Col>Data fim do compartilhamento</Col>
            <Col className="text-end">{share.end_date}</Col>
          </Row>
          {  share.status === 'cancelled' ? <Row className="justify-content-end">
            <Col xs={'auto'} className='bg-danger text-white p-1'>
              Cancelado
            </Col>
          </Row>: ''}
        </Col>
      </Row>
      <Row className="px-2 mt-2">
        <Col className="CardShare--box">
          <Row className="justify-content-between p-1">
            <Col xs={1}>
              <input
                type="checkbox"
                readOnly={true}
                disabled={true}
                checked={share.medical_appointment}
              />
            </Col>
            <Col className="text-start">
              <span className="ml-2">CONSULTAS</span>
            </Col>
          </Row>
          <Row className="justify-content-between p-1">
            <Col xs={1}>
              <input type="checkbox" disabled={true} checked={share.exam} />
            </Col>
            <Col className="text-start">
              <span className="ml-2">EXAMES</span>
            </Col>
          </Row>
          <Row className="justify-content-between p-1">
            <Col xs={1}>
              <input
                type="checkbox"
                disabled={true}
                checked={share.treatment}
              />
            </Col>
            <Col className="text-start">
              <span className="ml-2">TRATAMENTOS</span>
            </Col>
          </Row>
        </Col>
      </Row>

      <Col>
        { share.status === 'cancelled' ? 
            ''
            :

            <ModalGlobal
            title="Deseja interromper o compartilhamento?"
            fnc={async () => {
              //function aqui
              await userShareService.cancelShare(share.id)
              onCancelShared();
              toast.success('Compartilhamento interrompido com sucesso')
            }}
  
          >
            <div className="d-grid gap-2 mt-2">
  
              <Button variant="outline-danger" disabled={share.status === 'cancelled'} outline={true} size="md">
                Interromper
              </Button>
  
            </div>
          </ModalGlobal>
        }

      
      </Col>
    </div>
  );
};

export default CardMyShare;