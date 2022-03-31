import React from 'react';
import './CardLast.css';
import { useNavigate } from 'react-router-dom';

function CardLast() {
  const navigate = useNavigate();

  return (
    <div className='cardLast'>
      <div className='cardLast__title'>Últimas consultas</div>
      <div className='cardLast__block'>
        <div className='cardLast__block_line'>Oftalmologista</div>
        <div className='cardLast__block_line'>Dentista</div>
        <div className='cardLast__block_line'>Dermatologista</div>
      </div>
      <div className='cardLast__button' onClick={() => navigate("/:teste")}>VER MAIS</div>
    </div>
  );
}

export default CardLast;