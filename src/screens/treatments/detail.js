import React, { useState, useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


import MenuHeaderMain from "../_components/MenuHeaderMain";
import treatmentService from "../../services/treatment";
import { Col, Row } from "react-bootstrap";
import ModalGlobal from "../_components/ModalGlobal";
import { toast } from "react-toastify";

import "./style.css";

<FontAwesomeIcon icon="fa-solid fa-calendar-days" />;

const ReadOnlyInput = ({ children }) => {
  return <div className="ReadOnlyInput">{children}</div>;
};

function TreatmentDetailScreen() {
  const [treatment, setTreatment] = useState({});
  const params = useParams();
  const [showModal, _] = useState(false);
  const navegate = useNavigate();

  useEffect(() => {
    (async () => {
      if (params.id) {
        try {
          const result = await treatmentService.show(params.id);
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

  const handleRemove = async () => {
    try {
      await treatmentService.destroy(params.id);
      toast.success("Registro removido com sucesso");
      navegate("/treatment");
    } catch (error) {
      toast.error("Falha ao remover registro");
    }
  };

  return (
    <>
      <MenuHeaderMain />

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

          <Col xs={12} >
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
              <Link to="/treatment" className="btn btn-secondary">
                Voltar
              </Link>
            </div>
          </Col>
          <Col xs={4}>
            <ModalGlobal
              show={showModal}
              fnc={() => {
                handleRemove();
              }}
              title={"Tem certeza que deseja sejá exluir"}
            >
              <div className="d-grid">
                <button className="btn btn-danger" type="button">
                  Exluir
                </button>
              </div>
            </ModalGlobal>
          </Col>

          <Col xs={4}>
            <div className="d-grid">
              <Link
                to={`/treatment/${treatment.id}/edit`}
                className="btn btn-primary flex"
              >
                Editar
              </Link>
            </div>
          </Col>
        </Row>
      </div>

      {/* <Row>
        <Col>
          <div className="CardLast_Single">
            <div className="cardLast">
              <div className="cardLast__title text-center">
                {treatment.title}
              </div>
              <div className="">
                <div
                  className="cardLast__block_line"
                  style={{ justifyContent: "start", width: "100%" }}
                >
                  <div>
                    <FontAwesomeIcon icon={faCalendarDays} className="me-2" />
                  </div>
                  <div>{treatment.date}</div>
                </div>
                <div className="cardLast__block_line" style={{ width: "100%" }}>
                  <div>{treatment.kind || "Tipo não definido"}</div>
                </div>
                <div className="cardLast__block_line" style={{ width: "100%" }}>
                  <div>{treatment.treatment_location}</div>
                </div>
                <div
                  className="cardLast__block_line"
                  style={{ width: "100%", minHeight: "120px" }}
                >
                  <div>{treatment.description}</div>
                </div>
              </div>
            </div>
            <div
              className=""
              style={{
                justifyContent: "center",
                width: "100%",
                paddingInline: "20px",
              }}
            >
              <div className="mb-2">
                <Row className="gap-2">
                  <Col sm={12} md={4}>
                    <div className="d-grid">
                      <Link to="/treatment" className="btn btn-secondary">
                        Voltar
                      </Link>
                    </div>
                  </Col>
                  <Col sm={12} md={4}>
                    <ModalGlobal
                      show={showModal}
                      fnc={() => {
                        handleRemove();
                      }}
                      title={"Tem certeza que deseja sejá exluir"}
                    >
                      <div className="d-grid">
                        <button className="btn btn-danger" type="button">
                          Exluir
                        </button>
                      </div>
                    </ModalGlobal>
                  </Col>

                  <Col sm={12} md={4}>
                    <div className="d-grid">
                      <Link
                        to={`/treatment/${treatment.id}/edit`}
                        className="btn btn-primary flex"
                      >
                        Editar
                      </Link>
                    </div>
                  </Col>
                </Row>
              </div>
            </div>
          </div>
        </Col>
      </Row> */}
    </>
  );
}

export default TreatmentDetailScreen;
