import React from 'react';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import fst from '../../../assets/1.png';
import snd from '../../../assets/2.png';
import trd from '../../../assets/3.png';
const EditorsInsights = () => {
    return (
        <Row xs={1} md={2} lg={3} className="g-2 mt-5">   
            <Col >
            <Card>
                <Card.Img variant="top" src={fst} />
                <Card.Body>
                <Card.Title>Card title</Card.Title>
                <Card.Text>
                    This is a longer card with supporting text below as a natural
                    lead-in to additional content. This content is a little bit
                    longer.
                </Card.Text>
                </Card.Body>
            </Card>
            </Col>
            <Col>
            <Card>
                <Card.Img variant="top" src={snd} />
                <Card.Body>
                <Card.Title>Card title</Card.Title>
                <Card.Text>
                    This is a longer card with supporting text below as a natural
                    lead-in to additional content. This content is a little bit
                    longer.
                </Card.Text>
                </Card.Body>
            </Card>
            </Col>
            <Col >
            <Card>
                <Card.Img variant="top" src={trd} />
                <Card.Body>
                <Card.Title>Card title</Card.Title>
                <Card.Text>
                    This is a longer card with supporting text below as a natural
                    lead-in to additional content. This content is a little bit
                    longer.
                </Card.Text>
                </Card.Body>
            </Card>
            </Col>
        </Row>
    );
};

export default EditorsInsights;