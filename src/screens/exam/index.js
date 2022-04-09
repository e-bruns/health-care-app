import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import MenuHeaderMain from "../_components/MenuHeaderMain"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import { FaPlus } from "react-icons/fa";
import CardGlobal from '../_components/CardGlobal'
import instance from '../../axios'

function Exam() {

  const [exam, setExam] = useState([])

  useEffect(() => {
    async function fetchData(){
      await instance
      .get("/api/v1/exams")
      .then((response) => {
        setExam(response.data)
      }
      )
      .catch((err) => {
        console.error("Ops! Ocorreu um erro" + err);
      });
    }
    fetchData();
  }, [])

    if(exam.length === 0){
      
    return (
      <>
      <MenuHeaderMain />

      <div className='position-button-new'>
        <Link 
          to="/exam/new"
          className="btn btn-primary bottom rounded-circle"
        >
          <h1>{" "}
          <FaPlus />{" "}
          </h1>
        </Link>
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
  } else {
    return (
    <>
      <MenuHeaderMain />

      <div className='position-button-new'>
        <Link 
          to="/exam/new"
          className="btn btn-primary bottom rounded-circle"
        >
          <h1>{" "}
          <FaPlus />{" "}
          </h1>
        </Link>
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

        { exam.map((examSingle) =>
          <CardGlobal title={examSingle.title} exam_location={examSingle.exam_location} date={examSingle.date} link={"/exam/" + examSingle.id + "/detail"} key={examSingle.id}></CardGlobal>
          )
        }

        
      </div>        
    </>
    )
  }

}

export default Exam