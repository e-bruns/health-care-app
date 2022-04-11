import React, { useEffect, useState } from "react";
import MenuHeaderMain from "../_components/MenuHeaderMain";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperclip, faCalendarDays } from "@fortawesome/free-solid-svg-icons";
import "../home/index.css";
import ModalGlobal from "./../_components/ModalGlobal";
import { useParams, Navigate, useNavigate } from "react-router-dom";
import instance from "../../axios";
import fileApiService from "../../services/file";
import { toast } from "react-toastify";
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import CardGlobal from '../_components/CardGlobal';

function SharedExams() {

  const parametros = useParams();
  const navigate = useNavigate();
  const id = parametros.id;
  console.log(id);

  const [exam, setExam] = useState([]);

  useEffect(() => {
    async function fetchData(id) {
      await instance
        .get("api/v1/shares/" + id + "/exams")
        .then((response) => {
          setExam(response.data);
        }
        )
        .catch((err) => {
          console.error("Ops! Ocorreu um erro" + err);
        });
    }
    fetchData(id);
  }, []);


  return (

    <>
      <MenuHeaderMain />

      <div className='position-button-new'>
        <a href='/exam/new' className='btn btn-primary bottom'><h1> + </h1></a>
      </div>

      <div className="CardLast_Group">
        <div className='cardLast'>
          <div className='cardLast__title text-center'>EXAMES</div>
          <div className='cardLast__block_line'>
            <div >
              <input type="text" className="form-control" placeholder="PESQUISAR" />
            </div>
            <div className='cardLast__button'>
              <FontAwesomeIcon icon={faMagnifyingGlass} className="text-white" />
            </div>
          </div>
        </div>
      </div>

      <div className="CardLast_Group">

        {exam.map((examSingle) =>
          <CardGlobal title={examSingle.title} exam_location={examSingle.exam_location} date={examSingle.date} link={"/exam/" + examSingle.id + "/detail"} key={examSingle.id}></CardGlobal>
        )
        }


      </div>
    </>

  );
}

export default SharedExams;

