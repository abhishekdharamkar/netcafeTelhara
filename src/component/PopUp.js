import React, { useState } from 'react';
import {
  MDBBtn,
  MDBModal,
  MDBModalDialog,
  MDBModalContent,
  MDBModalHeader,
  MDBModalTitle,
  MDBModalBody,
  MDBModalFooter,
} from 'mdb-react-ui-kit';
import "./Home.css"
export default function PopUp( props) {
  const [scrollableModal, setScrollableModal] = useState(false);

  return (
    <>
      <button className='servicesItem' onClick={() => setScrollableModal(!scrollableModal)}>{props.heading}</button>

      <MDBModal show={scrollableModal} setShow={setScrollableModal} tabIndex='-1'>
        <MDBModalDialog  scrollable>
          <MDBModalContent className='px-1'>
            <MDBModalHeader>
              <MDBModalTitle>{props.heading}</MDBModalTitle>
              <MDBBtn
                className='btn-close'
                color='none'
                onClick={() => setScrollableModal(!scrollableModal)}
              ></MDBBtn>
            </MDBModalHeader>
            
              <p className='leading-7' >
                {props.message}
              </p>
              <p>
               
              </p>
           
            <MDBModalFooter>
              <MDBBtn color='secondary' onClick={() => setScrollableModal(!setScrollableModal)}>
                Close
              </MDBBtn>
            </MDBModalFooter>
          </MDBModalContent>
        </MDBModalDialog>
      </MDBModal>
    </>
  );
}