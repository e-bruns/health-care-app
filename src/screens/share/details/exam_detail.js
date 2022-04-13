import React, { useEffect, useState } from "react";
import MenuHeaderMain from "../../_components/MenuHeaderMain";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperclip, faCalendarDays } from "@fortawesome/free-solid-svg-icons";
import "../../home/index.css";
import { useParams, useNavigate, Link } from "react-router-dom";
import instance from "../../../axios";
import { toast } from "react-toastify";
import { Col, Row } from "react-bootstrap";
import { FaArrowLeft } from "react-icons/fa";
import SubHeader from "../subNav";

function ExamSharedDetail() {
  const parametros = useParams();
  const navigate = useNavigate();
  const idExam = parametros.examId;
  const shareId = parametros.id;

  const [exam, setExam] = useState([]);

  async function fetchData(idExam) {
    await instance
      .get(`/api/v1/shares/${shareId}/exams/${idExam}`)
      .then((response) => {
        setExam(response.data);
        console.log(response.data);
      })
      .catch((err) => {
        console.error("Ops! Ocorreu um erro" + err);
      });
  }https://health-care-historic.herokuapp.com/api/v1/exams/53

  useEffect(() => {
    fetchData(idExam);
  }, []);

  return (
    <>
      <MenuHeaderMain />
      <SubHeader />


      <div className="CardLast_Single p-2">
        <div className="cardLast">
          <div className="cardLast__title text-center">{exam.title}</div>
          <div className="cardLast__block_line_no_background">
            <div
              className="cardLast__block_line"
              style={{ justifyContent: "start", width: "100%" }}
            >
              <div>
                <FontAwesomeIcon icon={faCalendarDays} className="me-2" />
              </div>
              <div>{exam.date}</div>
            </div>
            <div className="cardLast__block_line" style={{ width: "100%" }}>
              <div>{exam.exam_location}</div>
            </div>
          </div>
        </div>
        <div className="cardLast p-2">
          <div className="cardLast__title2 text-center">ANEXOS</div>
          {exam.files &&
            exam.files.map((file, index) => {
              return (
                <div
                  key={index}
                  className="cardLast__block_line"
                  style={{
                    justifyContent: "start",
                    width: "100%",
                    alignItems: "center",
                    gap: "6px",
                  }}
                >
                  <div>
                    <FontAwesomeIcon icon={faPaperclip} className="me-2" />
                  </div>
                  <a href={file.url} rel="noreferrer" target="_blank">
                    Arquivo {index + 1}
                  </a>
                </div>
              );
            })}
        </div>
        <div
          className="cardLast__block_line_no_background"
          style={{ justifyContent: "center", width: "100%" }}
        >
          <a
            onClick={() => navigate(`/share/${parametros.id}/exams`)}
            className="btn btn-secondary m-3"
          >
            VOLTAR
          </a>
        </div>
      </div>
    </>
  );
}

export default ExamSharedDetail;
