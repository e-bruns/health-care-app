import React, { useState, useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperclip, faCalendarDays } from "@fortawesome/free-solid-svg-icons";

import { Modal, Button } from "react-bootstrap";

import MenuHeaderMain from "../_components/MenuHeaderMain";
import treatmentService from "../../services/treatment";
import "../home/index.css";
import { Col, Row } from "react-bootstrap";
import ModalGlobal from "../_components/ModalGlobal";
import { toast } from "react-toastify";

<FontAwesomeIcon icon="fa-solid fa-calendar-days" />;

function TreatmentDetailScreen() {
  const [treatment, setTreatment] = useState({});
  const params = useParams();
  const [showModal, _] = useState(false);
  const navegate = useNavigate()

  useEffect(() => {
    (async () => {
      if (params.id) {
        try {
          const result = await treatmentService.show(params.id);
          if (result) {
            setTreatment(result);
          }
        } catch (error) {
          toast.error('Falha ao encontrar tratamento')
          navegate('/treatment')
        }
      }
    })();
  }, [params]);

  const handleRemove = async () => {
    try {
      await treatmentService.destroy(params.id)
      toast.success('Registro removido com sucesso')
      navegate('/treatment')
    } catch (error) {
      toast.error('Falha ao remover registro')
    }
  };

  return (
    <>
      <MenuHeaderMain />

      <div className="CardLast_Single">
        <div className="cardLast">
          <div className="cardLast__title text-center">{treatment.title}</div>
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
            <Row>
              <Col sm={2}>
                <div className="d-grid gap-2">
                  <Link to="/treatment" className="btn btn-secondary">
                    Voltar
                  </Link>
                </div>
              </Col>
              <Col>
                <ModalGlobal
                  show={showModal}
                  fnc={() => {
                    handleRemove()
                  }}
                  title={"Tem certeza que deseja sejá exluir"}
                >
                  <div className="d-grid gap-2">
                    <button className="btn btn-danger flex" type="button">
                      Exluir
                    </button>
                  </div>
                </ModalGlobal>
              </Col>
              <Col>
                <div className="d-grid gap-2">
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
    </>
  );
}

export default TreatmentDetailScreen;
