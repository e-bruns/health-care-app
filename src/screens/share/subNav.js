import { Col, Row } from "react-bootstrap";
import { FaArrowLeft } from "react-icons/fa";
import { Link } from "react-router-dom";

const SubHeader = () => {
  return (
    <Row style={{ background: "#ECF5FB" }}>
      <Col xs={12} md={12}>
        <Link to="/share" className="btn">
          <FaArrowLeft />
          &nbsp; Compartilhamentos
        </Link>
      </Col>
    </Row>
  );
};

export default SubHeader;
