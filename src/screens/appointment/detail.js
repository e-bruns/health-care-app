import React, { useState, useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperclip, faCalendarDays } from "@fortawesome/free-solid-svg-icons";

import { Modal, Button } from "react-bootstrap";

import MenuHeaderMain from "../_components/MenuHeaderMain";
import appointmentsService from "../../services/appointment";
import "../home/index.css";
import { Col, Row } from "react-bootstrap";
import ModalGlobal from "../_components/ModalGlobal";
import { toast } from "react-toastify";

<FontAwesomeIcon icon="fa-solid fa-calendar-days" />;

function AppointmentsDetailScreen() {
  const [appointment, setAppointment] = useState({});
  const params = useParams();
  const [showModal, _] = useState(false);
  const navegate = useNavigate();

  useEffect(() => {
    (async () => {
      if (params.id) {
        try {
          const result = await appointmentsService.show(params.id);
          if (result) {
            setAppointment(result);
          }
        } catch (error) {
          toast.error('Falha ao encontrar consulta');
          navegate('/appointment');
        }
      }
    })();
  }, [params]);

  const handleRemove = async () => {
    try {
      await appointmentsService.destroy(params.id);
      toast.success('Registro removido com sucesso');
      navegate('/treatment');
    } catch (error) {
      toast.error('Falha ao remover registro');
    }
  };

  return (
    <>
      <MenuHeaderMain />

      <div className="CardLast_Single p-2">
        <div className="cardLast">
          <div className="cardLast__title text-center">{appointment.title}</div>
          <div className="">
            <div
              className="cardLast__block_line"
              style={{ justifyContent: "start", width: "100%" }}
            >
              <div>
                <FontAwesomeIcon icon={faCalendarDays} className="me-2" />
              </div>
              <div>{appointment.date}</div>
            </div>
            <div className="cardLast__block_line" style={{ width: "100%" }}>
              <div>{appointment.professional_name}</div>
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
          <div className="mb-2 my-4">
            <Row>
              <Col xs={4}>
                <div className="d-grid">
                  <Link to="/appointment" className="btn btn-secondary">
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
                  title={"Tem certeza que deseja exluir"}
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
                    to={`/appointment/${appointment.id}/edit`}
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

export default AppointmentsDetailScreen;
