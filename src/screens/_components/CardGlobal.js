import React from 'react'
import { useNavigate } from 'react-router-dom';

function CardGlobal(props) {

  const navigate = useNavigate();

  return (

  <div className='cardLast'>
    <div className='cardLast__title'>{props.title}</div>
    <div className='cardLast__block'></div>
    <div className='cardLast__block_line'>
      <div>{props.exam_location}</div>
      <div>{props.date}</div>
    </div>

    <div className='cardLast__button' onClick={() => navigate(props.link)}>DETALHAR</div>
  </div>
  )
}

export default CardGlobal
