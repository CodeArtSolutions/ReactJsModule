import React from 'react';
import {
    MDBBtn, MDBContainer, MDBCard,
    MDBCardBody,
    MDBCardTitle,
    MDBInput
} from 'mdb-react-ui-kit';

function RegistrationForm() {
    return (
        <MDBContainer className="p-3 my-3 d-flex flex-column w-40 text-center">
            <MDBCard>
                <MDBCardBody>
                    <MDBCardTitle className="">Sign Up</MDBCardTitle>
                    <MDBInput wrapperClass='mb-4 my-3' label='Full name' type='text' />
                    <MDBInput wrapperClass='mb-4' label='Email address' type='email' />
                    <MDBInput wrapperClass='mb-4' label='Password' type='password' />
                    <MDBInput wrapperClass='mb-4' label='Confirm password' type='password' />
                    <MDBBtn className="mb-4">Sign Up</MDBBtn>
                    <MDBBtn className="mb-4 mx-4">Cancel</MDBBtn>
                </MDBCardBody>
            </MDBCard>

        </MDBContainer >
    );
}

export default RegistrationForm;
