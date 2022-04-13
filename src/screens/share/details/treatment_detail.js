import React, { useState, useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import MenuHeaderMain from "../../_components/MenuHeaderMain";
import { Col, Row } from "react-bootstrap";
import { toast } from "react-toastify";

import "../../treatments/style.css";
import treatmentShareService from "../../../services/treatmentShare";
import SubHeader from "../subNav";

<FontAwesomeIcon icon="fa-solid fa-calendar-days" />;

const ReadOnlyInput = ({ children }) => {
  return <div className="ReadOnlyInput">{children}</div>;
};

function TreatmentSharedDetail() {
  const [treatment, setTreatment] = useState({});
  const params = useParams();
  const navegate = useNavigate();

  useEffect(() => {
    (async () => {
      if (params.id) {
        try {
          const result = await treatmentShareService.show(params.id, params.treatmentId);
          if (result) {
            setTreatment(result);
          }
        } catch (error) {
          toast.error("Falha ao encontrar tratamento");
          navegate("/treatment");
        }
      }
    })();
  }, [params]);

  return (
    <>
      <MenuHeaderMain />
      <SubHeader />

      <div className="Content my-4">
        <Row className="m-1 gap-2">
          <Col xs={12}>
            <ReadOnlyInput>{treatment.title}</ReadOnlyInput>
          </Col>

          <Col xs={12}>
            <ReadOnlyInput>
              {treatment.kind || "Tipo não definido"}
            </ReadOnlyInput>
          </Col>

          <Col xs={12}>
            <ReadOnlyInput>{treatment.date}</ReadOnlyInput>
          </Col>

          <Col xs={12}>
            <ReadOnlyInput>
              <div>{treatment.treatment_location}</div>
            </ReadOnlyInput>
          </Col>

          <Col xs={12}>
            <ReadOnlyInput>{treatment.description}</ReadOnlyInput>
          </Col>
        </Row>

        <Row className="p-4 mb-4">
          <Col xs={4}>
            <div className="d-grid">
              <Link to={`/share/${params.id}/treatments`} className="btn btn-secondary">
                Voltar
              </Link>
            </div>
          </Col>
        </Row>
      </div>
    </>
  );
}

export default TreatmentSharedDetail;
