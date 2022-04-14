import React, { useEffect, useState } from "react";
import { Row, Col } from "react-bootstrap";

import CardLast from "../_components/CardLast";
import MenuHeaderMain from "../_components/MenuHeaderMain";
import dashboardService from "../../services/dashboard";

import "./index.css";

function HomeScreen() {
  const [exams, setExam] = useState([]);
  const [treatments, setTreatments] = useState([]);
  const [medical_appointments, setMedical_appointments] = useState([]);

  useEffect(() => {
    (async () => {
      const data = await dashboardService.index();
      setExam(data.exams);
      setTreatments(data.treatments);
      setMedical_appointments(data.medical_appointments);
    })();
  }, []);

  return (
    <div>
      <MenuHeaderMain />
      <Row className="justify-content-center p-3">
        <Col md={4}>
          <CardLast
            title="Últimas consultas"
            lasts={medical_appointments}
            url="appointment"
          />
        </Col>
        <Col md={4}>
          <CardLast title="Últimos exames" lasts={exams} url="exam" />
        </Col>
        <Col md={4}>
          <CardLast
            title="Últimos tratamentos"
            lasts={treatments}
            url="treatment"
          />
        </Col>
      </Row>
    </div>
  );
}

export default HomeScreen;
