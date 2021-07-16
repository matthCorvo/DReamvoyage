import styled from 'styled-components'

export const Button = styled.div`
background: ${({primary}) => (primary ? '#F26A2E' : '#077BF1')};   // Si primary true #F26A2E si faux 077BF1
white-space: nowrap;
padding : ${({big}) => (big ? '16px 40px' : '10px 32px')};
color:#fff;
font-size:${({big}) => (big ? '20px' : '16px')};
border:none;
outline:none;
min-width:100px;
cursor: pointer;
text-decoration:none;
transition:all 0.3s ease-in-out;
border-radius:${({round}) => (round ? '50px' : 'none')};

&:hover {
    background:  ${({primary}) => (primary ? '#077BF1' : '#F26A2E')}; 
transition:all 0.3s ease-in-out;
transform: translateY(-2px);
}
`