import { Col, Row, Button, Modal } from "react-bootstrap";
import ModalGlobal from "../_components/ModalGlobal";
import { Link, useNavigate } from "react-router-dom";

const CardOtherShare = ({ share }) => {

  const navigate = useNavigate();
  return (
    <div className="CardShare p-2">
      <Row className="CardShare--header justify-content-between">
        <Col>COMPARTILHADO POR:</Col>
        <Col className="text-end">{share.user_name}</Col>
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
        </Col>
      </Row>

      <Col>
        <div className="d-grid gap-2 mt-2">

          {share.medical_appointment &&
            <Button variant="primary" size="lg" onClick={() =>
              navigate("/share/" + share.id + "/appointments")
            }>Consultas</Button>}
          {share.exam &&
            <Button variant="primary" size="lg" onClick={() =>
              navigate("/share/" + share.id + "/exams")
            }>Exames</Button>}
          {share.treatment &&
            <Button variant="primary" size="lg" onClick={() =>
              navigate("/share/" + share.id + "/treatments")
            }>Tratamentos</Button>}

        </div>
      </Col>
    </div>
  );
};

export default CardOtherShare;