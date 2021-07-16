import styled from 'styled-components'
import { Link as LinkR } from 'react-router-dom'



export const ProductsContainer = styled.div`
min-height:100vh;
padding: 5rem calc((100vw - 1300px) / 2);
color:#fff;`;

export const ProductsHeading = styled.div`
font-size:clamp(1.2rem, 5vw, 3rem); 
text-align:center;
margin-bottom:5rem;
color:#000;
`;
export const ProductWrapper = styled.div`
display:grid;
grid-template-columns: repeat(4, 1fr);
grid-gap:10px;
justify-items: center;
padding: 0 2rem;


@media screen and (max-width:1200px){
    grid-template-columns: repeat(4, 1fr);
}

@media screen and (max-width:868px){
    grid-template-columns: repeat(2, 1fr) ;
}
@media screen and (max-width:578px){
    grid-template-columns:1fr ;
}
`;
export const ProductCard = styled.div`
line-height: 2;
width: 100%;
height: 500px;
position: relative;
border-radius: 10px;
transition: 0.2s ease;
`;

export const ProductImg = styled.img`
height: 100%;
max-width: 100%;
position: relative;
border-radius:10px;
filter: brightness(70%);
transition: 0.4s cubic-bezier(0.075, 0.82, 0.162, 1);

&:hover {
    filter: brightness(100%);
}
`


export const ProductInfo = styled.div`
display:flex;
flex-direction: column;
align-items:flex-start;
padding: 0.2rem;

@media screen and (max-width:280px){
    padding: 0 1rem;

}
`

export const TextWrap = styled.div`
display: flex;
align-items: center;
position: absolute;
top: 375px;margin-left:1.5rem;

`

export const ProductTitle = styled.div`
font-weight:400;
font-size:1rem;
margin-left:0.5rem;
`

export const Button = styled(LinkR)`
position:absolute;
top:420px;
border-radius: 5px;
background: #F26A2E;
white-space:nowrap;
padding : 10px 22px;
font-size: 14px;
color:#fff;
outline : none;
border:none;
cursor : pointer;
transition: all 0.2s ease-in-out;
text-decoration: none;
margin-left:1.5rem;
&:hover {
    transition: all 0.2s ease-in-out;
    background: #077BF1;
}
`;

export const TripBtn = styled.div`
margin-top:52px;
display:flex;
justify-content:center;
`;

export const TripButton = styled(LinkR)`
border-radius: 50px;
background: #F26A2E;
white-space:nowrap;
padding : 10px 22px;
font-size: 26px;
color:#fff;
outline : none;
border:none;
cursor : pointer;
transition: all 0.2s ease-in-out;
text-decoration: none;

&:hover {
    transition: all 0.2s ease-in-out;
    background: #077BF1;
}

@media screen and (max-width:568px){
    font-size: 16px;
}

`;