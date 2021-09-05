import React from 'react'
import { Container } from 'react-bootstrap'
import { Form } from 'react-bootstrap'
import { Button } from 'react-bootstrap'


export const Names = ({formData, setForm, navigation}) => {
    // console.log(props);
    const {firstName, lastName,nickName} =formData;
    

  
    return (
        <Container style={{marginTop:"2rem"}} >
 
            <h2>Names</h2>
              
                   <Form.Floating className="mb-3">
                   <Form.Control 
                    id="floatingInputCustom"
                 type="text" 
                 placeholder="first Name"
                 name="firstName"
                 value = {firstName}
                 onChange = {setForm}
                 autoComplete="off"
                  />
                   <label htmlFor="floatingfirstNamehCustom">First Name</label>
                   </Form.Floating>

                  <Form.Floating className="mb-3">
                   <Form.Control 
                    id="floatingInputCustom"
                 type="text" 
                 placeholder="Last Name"
                 name="lastName"
                 value = {lastName}
                 onChange = {setForm}
                 autoComplete="off"
                  />
                   <label htmlFor="floatinglastNameCustom">Last Name</label>
                  </Form.Floating>

                  <Form.Floating className="mb-3">
                   <Form.Control 
                    id="floatingInputCustom"
                 type="text" 
                 placeholder="Nick Name"
                 name="nickName"
                 value = {nickName}
                 onChange = {setForm}
                 autoComplete="off"
                  />
                   <label htmlFor="floatingnickNameCustom">Nick Name</label>
                  </Form.Floating>

                  <Button variant="primary"
                   style={{width:"5%",margin:"1rem"}}
                   onClick={()=> navigation.next()}
                   >Next</Button>
           
        </Container>
    )
}
