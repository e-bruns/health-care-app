import React from 'react';
import './CardLast.css';
import { useNavigate } from 'react-router-dom';

function CardLast(props) {
  const navigate = useNavigate();


  return (
    <div className='cardLast'>
      <div className='cardLast__title'>{props.title}</div>
      <div className='cardLast__block'>

        {props.lasts.map((last) => {
          return (
            <div key={last.id} className='cardLast__block_line'>
              <div>{last.title}</div>
              <div>{last.date}</div>
            </div>
          );
        })}

      </div>
      <div className='cardLast__button' onClick={() => navigate("/" + props.url)}>VER MAIS</div>
    </div>
  );
}

export default CardLast;