import React from 'react'
import MenuHeaderMain from "../_components/MenuHeaderMain"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPaperclip, faCalendarDays } from '@fortawesome/free-solid-svg-icons'
import '../home/index.css'

<FontAwesomeIcon icon="fa-solid fa-calendar-days" />

function ExamDetail() {


  return (
    <>
      <MenuHeaderMain />

      <div className='CardLast_Single'>
        <div className='cardLast' >
          <div className='cardLast__title text-center'>EXAME DE SANGUE</div>
          <div className='cardLast__block_line_no_background'>
            <div className='cardLast__block_line' style={{justifyContent: 'start', width: '100%'}}>
              <div><FontAwesomeIcon icon={faCalendarDays} className="me-2"/></div><div>11/03/2021</div>
            </div>
            <div className='cardLast__block_line' style={{width: '100%'}}>
              <div>UNIMED</div>
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
          <a className='btn btn-danger m-3'>EXCLUIR</a>
          <a className='btn-primary m-3'>EDITAR</a>
        </div>
      </div>
      
    </>
  )
}

export default ExamDetail