import React, { useEffect, useState } from 'react'
import MenuHeaderMain from "../_components/MenuHeaderMain"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPaperclip, faCalendarDays } from '@fortawesome/free-solid-svg-icons'
import '../home/index.css'
import ModalGlobal from './../_components/ModalGlobal'
import { useParams, Navigate, useNavigate } from 'react-router-dom';
import instance from '../../axios'

function ExamDetail() {

    const parametros = useParams();
    const navigate = useNavigate();
    const idExam = parametros.id;
    console.log(idExam);

    const [exam, setExam] = useState([])

    useEffect(() => {
      async function fetchData(idExam){
        await instance
        .get("/api/v1/exams/" + idExam)
        .then((response) => {
          setExam(response.data)
          console.log(response.data);
        }
        )
        .catch((err) => {
          console.error("Ops! Ocorreu um erro" + err);
        });
      }
      fetchData(idExam);
    }, [])
    
    async function deleteData(id){
    await instance
    .delete("/api/v1/exams/"+id)
    .then((response) => {
      navigate('/exam')
    }
    )
    .catch((err) => {
      console.error("Ops! Ocorreu um erro" + err);
    });
    }

    // function formatData(string){
    //   return string.split("-").reverse().join("");
    // };

  return (
    <>
      <MenuHeaderMain />

      <div className='CardLast_Single'>
        <div className='cardLast' >
          <div className='cardLast__title text-center'>{exam.title}</div>
          <div className='cardLast__block_line_no_background'>
            <div className='cardLast__block_line' style={{justifyContent: 'start', width: '100%'}}>
              <div><FontAwesomeIcon icon={faCalendarDays} className="me-2"/></div><div>{exam.date}</div>
            </div>
            <div className='cardLast__block_line' style={{width: '100%'}}>
              <div>{exam.exam_location}</div>
            </div>
          </div>
        </div>
        <div className='cardLast'>
          <div className='cardLast__title2 text-center'>ANEXOS</div>
            <div className='cardLast__block_line' style={{justifyContent: 'start', width: '100%'}}>
              <div><FontAwesomeIcon icon={faPaperclip} className="me-2"/></div>
              <div>Arquivo 01</div>
            </div>
            <div className='cardLast__block_line' style={{justifyContent: 'start', width: '100%'}}>
              <div><FontAwesomeIcon icon={faPaperclip} className="me-2"/></div>
              <div>Arquivo 02</div>
            </div>
        </div>
        <div className='cardLast__block_line_no_background' style={{justifyContent: 'center', width: '100%'}}>
          <ModalGlobal title="Deseja excluir exame?" fnc={()=> {
            deleteData(idExam)
          }}><a className='btn btn-danger m-3'>EXCLUIR</a></ModalGlobal>
          <a  onClick={() => navigate("/exam/" + idExam + "/edit")} className='btn btn-primary m-3'>EDITAR</a>
        </div>
      </div>
      
    </>
  )
}

export default ExamDetail