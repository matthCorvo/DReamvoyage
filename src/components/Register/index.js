import React from 'react'
import {Container, 
    FormWrap, 
    Icon, FormContent,
    } from './RegisterElements'
    import Form from './Form';

const Register = () => {
    return (
        <>
            <Container>
                <FormWrap>
                    <Icon to="/"> DREAM<br></br>&emsp;VOYAGE</Icon>
                    <FormContent>
                        <Form/>
                    </FormContent>
                </FormWrap>
            </Container>
        </>
    )
}

export default Register
