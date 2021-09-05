import React from 'react'
import { Container } from 'react-bootstrap'
import { Card } from 'react-bootstrap'
import { Button } from 'react-bootstrap'

export const Submit = () => {
    return (
        <Container style={{marginTop:"2rem"}}>
            <Card className="text-center">
  <Card.Header><h2>Thank you</h2></Card.Header>
  <Card.Body>
    
    <Card.Text>
      we keep your personal details secret
    </Card.Text>
    
  </Card.Body>
  
</Card>
        </Container>
    )
}
