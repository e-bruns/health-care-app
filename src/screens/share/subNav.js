import { Col, Row } from "react-bootstrap";
import { FaArrowLeft, FaUser } from "react-icons/fa";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const SubHeader = () => {
  const { share } = useSelector((state) => state?.share);

  return (
    <Row style={{ background: "#ECF5FB" }}>
      <Col xs={12} md={12}>
        <Row className="justify-content-between align-items-center">
          <Col xs={4} md={3}>
            <Link to="/share" className="btn">
              <FaArrowLeft color="#3c96d7" />
              &nbsp; Voltar
            </Link>
          </Col>
          <Col xs={'auto'} md={'auto'} className="text-center">
            <Link to="#" className=" btn">
              <FaUser color="#3c96d7" /> {share?.user_name}
            </Link>
          </Col>
        </Row>
      </Col>
    </Row>
  );
};

export default SubHeader;
