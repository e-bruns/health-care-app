import React from 'react'
import { Row, Col, Button } from 'react-bootstrap'

function CardGlobal(props) {
  return (
    <div className='screen-box'>
      <Row>
        <Col sm={6}>{props.title}</Col>
        <Col sm={6}><Button href={props.link}>DETALHAR</Button></Col>
        
        <div className='mx-auto w-90'><hr></hr></div>
        
        <div >
          <Row className='screen-box-table mx-auto'>
            <Col sm={6}>{props.exam_location}</Col>
            <Col sm={6}>{props.date}</Col>
          </Row>
        </div>
      </Row>
    </div>
  )
}

export default CardGlobal
