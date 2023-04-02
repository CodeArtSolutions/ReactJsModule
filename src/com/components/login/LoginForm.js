import React from 'react';
import {
    MDBBtn, MDBContainer, MDBCard,
    MDBCardBody,
    MDBCardTitle,
    MDBCardImage,
    MDBRipple,
    MDBInput
} from 'mdb-react-ui-kit';
import LoginImage from '../../../images/login/login.jpg';

function LoginForm() {
    return (
        <MDBContainer className="p-3 my-3 d-flex flex-column w-40 text-center">

            <MDBCard>
                <MDBRipple rippleColor='light' rippleTag='div' className='bg-image hover-overlay'>
                    <MDBCardImage src={LoginImage} fluid alt='...' />
                    <a>
                        <div className='mask' style={{ backgroundColor: 'rgba(251, 251, 251, 0.15)' }}></div>
                    </a>
                </MDBRipple>
                <MDBCardBody>
                    <MDBCardTitle className="">Login</MDBCardTitle>
                    <MDBInput wrapperClass='mb-4 my-3' label='Email address' id='form1' type='email' />
                    <MDBInput wrapperClass='mb-4' label='Password' id='form2' type='password' />
                    <MDBBtn className="mb-4">Sign in</MDBBtn>
                    <MDBBtn className="mb-4 mx-4">Register</MDBBtn>
                </MDBCardBody>
            </MDBCard>

        </MDBContainer >
    );
}

export default LoginForm;
