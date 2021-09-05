import React from 'react'
import { Container } from 'react-bootstrap'
import { Accordion } from 'react-bootstrap';
import { Button } from 'react-bootstrap';

export const Review = ({formData,navigation}) => {
    const { go } = navigation;
    const {
        firstName,
    lastName,
    nickName,
    address,
    state,
    city,
    Pin,
    Phone,
    Email
    } = formData;
    return (
       <Container style={{marginTop:"2rem"}}>
           <h3>Review</h3>
           <RenderAccordion 
           title={"Names"}
             go={ go }
           details={[
               {"First Name": firstName},
               {"Last Name": lastName},
               {"Nick Name":nickName}
               ]}    
           />
            <RenderAccordion 
           title={"Address"}
           go={ go }
           details={[
               {"Address": address},
               {"State": state},
               {"City": city},
               {"Pin Code": Pin}
               ]}    
           />
            <RenderAccordion 
           title={"Contact"}
           go={ go }
           details={[
               {"Phone No. s": Phone},
               {"Email Id": Email},
              
               ]}    
           />
           
            <Button 
            variant="success"
            style={{margin:'1rem'}}
            onClick={()=> go("submit")}
            >Submit</Button>

       </Container>
    );
};

export const RenderAccordion = ({title,details,go}) => (
    <Accordion >
  <Accordion.Item eventKey="0">
    <Accordion.Header>{title}</Accordion.Header>
    <Accordion.Body>
    <div>
     {details.map((data,index) =>{  //idea is to grap the object key
      const objkey =Object.keys(data)[0];
      const objValue=data[Object.keys(data)[0]];

      return <div key={index}>
          {`${objkey} : ${objValue}`}
    </div>
     })}
<Button 
variant="danger" 
style={{marginTop:"1rem"}}
onClick = {()=> go(`${title.toLowerCase()}`)}
>Edit</Button>
     </div>
    </Accordion.Body>
  </Accordion.Item>
  
  
  
  
</Accordion>
  

)
