import styled from 'styled-components'

export const HeroContainer = styled.div`
background: #0c0c0c;
display: flex;
justify-content: center;
align-items:center;
height:100vh;
padding:0 1rem;
position: relative;
margin-top: -80px;
color:#fff;
`;

export const HeroBg = styled.div`
position: absolute;
top:0;
bottom:0;
height:100%;
right:0;
left:0;
width:100%
overflow:hidden;
`;

export const VideoBg = styled.video`
width: 100%;
height: 100%;
-o-object-fit:cover;
object-fit:cover;
opacity:0.53;
`;
export const HeroContent = styled.div`
z-index:3;
height: calc(100vh - 80px);
max-height: 100%;
padding: 0rem calc((100vw - 1300px) / 2);
`;
export const HeroItems = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items:center;
text-align: center;
height:100vh;
max-height:100%;
padding: 0;
color: #fff;
font-weight:bold;
line-height:1.1;
`;
export const HeroH1 = styled.h1`
font-size:clamp(1.5rem, 6vw, 4rem); // clamp = font plus responsive sans mediaQ
margin-bottom:1.5rem;
letter-spacing:3px;
padding: 0 1rem;
`;
export const HeroP = styled.p`
font-size:clamp(1rem, 3vw, 3rem); // clamp = font plus responsive sans mediaQ
margin-bottom:2rem;
font-weight:400;

`;

