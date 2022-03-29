import React from 'react'
import { Row, Col, Button } from 'react-bootstrap'

function CardGlobal(props) {
    return (
            <div className='screen-box shadow-sm'>
                <Row>
                    <Col sm={6}>{props.title}</Col>
                    <Col sm={6}><Button href={props.link}>DETALHAR</Button></Col>
                    <hr></hr>
                    <div>
                        <Row>
                            <Col sm={6}>{props.exam_location}</Col>
                            <Col sm={6}>{props.date}</Col>
                        </Row>
                    </div>
                </Row>
            </div>
    )
}

export default CardGlobal
