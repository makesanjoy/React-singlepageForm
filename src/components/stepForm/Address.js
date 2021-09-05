import React from 'react'
import { Container } from 'react-bootstrap'
import { Form } from 'react-bootstrap'
import { Button } from 'react-bootstrap'

export const Address = ({formData, setForm, navigation}) => {

    const {address,state, city,Pin} =formData;

    return (
        <Container style={{marginTop:"2rem"}}>
        <h2>Address</h2>
              
                   <Form.Floating className="mb-3">
                   <Form.Control 
                    id="floatingInputCustom"
                 type="text" 
                 placeholder="Address"
                 name="address"
                 value = {address}
                 onChange = {setForm}
                 autoComplete="off"
                  />
                   <label htmlFor="floatingaddressCustom">Address</label>
                   </Form.Floating>

                   <Form.Floating className="mb-3">
                   <Form.Control 
                    id="floatingInputCustom"
                 type="text" 
                 placeholder="state"
                 name="state"
                 value = {state}
                 onChange = {setForm}
                 autoComplete="off"
                  />
                   <label htmlFor="floatingstateCustom">State</label>
                   </Form.Floating>

                  <Form.Floating className="mb-3">
                   <Form.Control 
                    id="floatingInputCustom"
                 type="text" 
                 placeholder="city"
                 name="city"
                 value = {city}
                 onChange = {setForm}
                 autoComplete="off"
                  />
                   <label htmlFor="floatingcityCustom">City</label>
                  </Form.Floating>

                  <Form.Floating className="mb-3">
                   <Form.Control 
                    id="floatingInputCustom"
                 type="text" 
                 placeholder="Pin code"
                 name="Pin"
                 value = {Pin}
                 onChange = {setForm}
                 autoComplete="off"
                  />
                   <label htmlFor="floatingPinCustom">Pin Code</label>
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
