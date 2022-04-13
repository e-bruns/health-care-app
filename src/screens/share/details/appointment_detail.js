import React, { useState, useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { Col, Row } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendarDays } from "@fortawesome/free-solid-svg-icons";
import { toast } from "react-toastify";


import MenuHeaderMain from "../../_components/MenuHeaderMain";
import "../../home/index.css";
import appointmentShareService from "../../../services/appointmentShare";
import SubHeader from "../subNav";


<FontAwesomeIcon icon="fa-solid fa-calendar-days" />;

function AppointmentSharedDetail() {
  const [appointment, setAppointment] = useState({});
  const params = useParams();
  const [showModal, _] = useState(false);
  const navegate = useNavigate();

  useEffect(() => {
    (async () => {
      if (params.id) {
        try {
          const result = await appointmentShareService.show(params.id, params.appointmentId);
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

  
  return (
    <>
      <MenuHeaderMain />
      <SubHeader />

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
                  <Link to={`/share/${params.id}/appointments`} className="btn btn-secondary">
                     Voltar
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

export default AppointmentSharedDetail;
