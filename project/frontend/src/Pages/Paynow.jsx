import React from "react";
import {
  MDBBtn,
  MDBCard,
  MDBCardBody,
  MDBCol,
  MDBContainer,
  MDBInput,
  MDBRow,
} from "mdb-react-ui-kit";

export default function App() {
  return (
    <MDBContainer
      className="py-5"
      fluid
      style={{
        // backgroundImage:
          // "url(https://mdbcdn.b-cdn.net/img/Photos/Others/background3.webp)",
      }}
    >
      <MDBRow className=" d-flex justify-content-center">
        <MDBCol md="10" lg="8" xl="5">
          <MDBCard className="rounded-3">
            <MDBCardBody className="p-4">
              <div className="text-center mb-4">
                <h3>Online Payment</h3>
                <h6>Pay Class Fees</h6>
              </div>
             
              <p className="fw-bold mb-4">Add your card:</p>
              <MDBInput
                label="Cardholder's Name"
                id="form3"
                type="text"
                size="lg"
                value=""
              />
              <MDBRow className="my-4">
                <MDBCol size="7">
                  <MDBInput
                    label="Card Number"
                    id="form4"
                    type="text"
                    size="lg"
                    value="**** ***** ****"
                  />
                </MDBCol>
                <MDBCol size="3">
                  <MDBInput
                    label="Expire"
                    id="form5"
                    type="password"
                    size="lg"
                    placeholder="MM/YYYY"
                  />
                </MDBCol>
                <MDBCol size="2">
                  <MDBInput
                    label="CVV"
                    id="form6"
                    type="password"
                    size="lg"
                    placeholder="CVV"
                  />
                </MDBCol>
              </MDBRow>
              <MDBBtn color="success" size="lg" block>
                Pay
              </MDBBtn>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
}