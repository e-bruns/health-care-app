import React, { useEffect, useState } from 'react'
import MenuHeaderMain from "../_components/MenuHeaderMain"
import { Row, Col, Button } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import CardGlobal from '../_components/CardGlobal'
import instance from '../../axios'

function Exam() {

  const [exam, setExam] = useState()

  useEffect(() => {
    instance
            .get("/api/v1/exams")
            .then((response) => setExam(response.data))
            .catch((err) => {
              console.error("Ops! Ocorreu um erro" + err);
            });
  }, [])

  console.log(exam)

  let arr = []

  /*
  let arr = [{
    title: "EXAME DE SANGUE",
    exam_location: "UNIMED",
    date: "11/03/2021",
    link: "exam/exam-detail",
    id: 0
  },
  {
    title: "EXAME DE ALERGIAS",
    exam_location: "VITALLAB",
    date: "19/03/2021",
    link: "exam/exam-detail",
    id: 1
  },
  {
    title: "EXAME DE NONON",
    exam_location: "NONON",
    date: "21/03/2021",
    link: "exam/exam-detail",
    id: 2
  }
  ]
  
  console.log(arr) 
  */

  if (exam.length === 0) {
    return (
      <>
      <MenuHeaderMain />

      <div className='position-button-new'>
      <a href='/exam/exam-new' className='btn btn-primary bottom'><h1> + </h1></a>
      </div>

      <div className="CardLast_Group">
        <div className='cardLast'>
          <div className='cardLast__title text-center'>EXAMES</div>
          <div className='cardLast__block_line '>
            <p className="text-center">NENHUM EXAME CADASTRADO! <br />
            Clique em " + " para adicionar</p>
          </div>
        </div>
      </div>
      </>
    )
  
  } else return (
    <>
      <MenuHeaderMain />

      <div className='position-button-new'>
      <a href='/exam/exam-new' className='btn btn-primary bottom'><h1> + </h1></a>
      </div>

      <div className="CardLast_Group">
        <div className='cardLast'>
          <div className='cardLast__title text-center'>EXAMES</div>
          <div className='cardLast__block_line'>
            <div >
              <input type="text" className="form-control"  placeholder="PESQUISAR" />
            </div>
            <div className='cardLast__button'> 
              <FontAwesomeIcon icon={faMagnifyingGlass} className="text-white" />
            </div>
          </div>
        </div>
      </div>

      <div className="CardLast_Group">

        { exam.map((exam) =>
          <CardGlobal title={exam.title} exam_location={exam.exam_location} date={exam.date} link={exam.link} key={exam.id}></CardGlobal>
          )
        }
        
      </div>        
    </>
  )
}

export default Exam