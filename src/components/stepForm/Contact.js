import React from 'react'
import { Container } from 'react-bootstrap'
import { Form } from 'react-bootstrap'
import { Button } from 'react-bootstrap'

export const Contact = ({formData, setForm, navigation}) => {

  const { Phone,Email} = formData;
    return (
        <Container style={{marginTop:"2rem"}}>
           <h2>Contact Details</h2>
              
                   <Form.Floating className="mb-3">
                   <Form.Control 
                    id="floatingInputCustom"
                 type="text" 
                 placeholder="Phone No.:"
                 name="Phone"
                 value = {Phone}
                 onChange = {setForm}
                 autoComplete="off"
                  />
                   <label htmlFor="floatingPhoneCustom">Phone No.</label>
                   </Form.Floating>

                   <Form.Floating className="mb-3">
                   <Form.Control 
                    id="floatingInputCustom"
                 type="email" 
                 placeholder="Email"
                 name="Email"
                 value = {Email}
                 onChange = {setForm}
                 autoComplete="off"
                  />
                   <label htmlFor="floatingEmailCustom">Email</label>
                   </Form.Floating>

                 
             
                   <Button 
                   variant="danger"
                   style={{width:"5%",margin:"1rem"}}
                   onClick={()=> navigation.previous()}
                   >Back</Button>

                  <Button variant="primary"
                   style={{width:"5%",margin:"1rem"}}
                   onClick={()=> navigation.next()}
                   >Next</Button>
        </Container>
    )
}
