import React, { useEffect, useState } from "react";
import MenuHeaderMain from "../_components/MenuHeaderMain";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperclip, faCalendarDays } from "@fortawesome/free-solid-svg-icons";
import "../home/index.css";
import ModalGlobal from "./../_components/ModalGlobal";
import { useParams, Navigate, useNavigate, Link } from "react-router-dom";
import instance from "../../axios";
import fileApiService from "../../services/file";
import { toast } from "react-toastify";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import CardGlobal from "../_components/CardGlobal";
import { Col, Row } from "react-bootstrap";
import CardSearch from "../_components/CardSearch";
import InfinityList from "../_components/InfinityList";
import examsShareService from "../../services/examShare";
import { FaArrowLeft } from "react-icons/fa";
import SubHeader from "./subNav";

function SharedExams() {
  const params = useParams();
  const id = params.id;

  const [search, setSearch] = useState("");

  return (
    <>
      <MenuHeaderMain />
      <SubHeader />    
      <Row className="justify-content-center">
        <Col md={6} xs={12} lg={6}>
          <CardSearch
            title={"EXAMES"}
            onSearch={(value) => {
              setSearch(value);
            }}
          />
        </Col>
      </Row>
      <InfinityList
        fetchService={examsShareService}
        parameter={id}
        search={search}
        renderResource={(examSingle, index) => {
          return (
            <CardGlobal
              title={examSingle.title}
              location={examSingle.exam_location}
              date={examSingle.date}
              link={`/share/${id}/exams/${examSingle.id}`}
              key={examSingle.id}
            ></CardGlobal>
          );
        }}
      />
    </>
  );
}

export default SharedExams;
