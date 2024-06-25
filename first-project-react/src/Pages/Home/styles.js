import styled from "styled-components";
import Background from "../../assets/background.jpg";
import {Link} from "react-router-dom";

export const Container = styled.div `
background: url("${Background}");
background-size: cover;
display: flex;
flex-direction: column;
align-items: center;
gap: 40px;
`;

export const Image = styled.img `
margin-top: 30px;
width: 350px;
`;

export const ContainerItens = styled.div `
backdrop-filter: blur(100px);
background-color: rgba(0, 0, 0, .5);
border-radius: 60px 60px 0px 0px;
padding: 50px 35px;
display: flex;
flex-direction: column;
height: 100vh; 
width: 300px ;
margin-top: 20px;

&:hover {
    opacity: 0.9;
}
`;

export const H1 = styled.h1 `
color: aliceblue;
font-size: 30px;
line-height: 40px;
text-align: center;
margin-bottom: 80px;
font-variant: small-caps;
`
export const InputLabel = styled.p `
letter-spacing: -0.408px;
color: aliceblue;
font-weight: bold;
font-size: 17px;
line-height: 20px;
color: #ffffff;
margin-left: 15px;
margin-bottom: 5px;
font-variant: small-caps;
`
export const Input = styled.input `
background: rgba(255, 255, 255, 0.25);
box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
border-radius: 10px;
width: 280px;
height: 45px;
font-size: 16px;
padding-left: 15px;
border: none;
outline: none;
color: #ffffff;
margin-bottom: 30px;
`

export const Button = styled(Link) `
width: 300px;
height: 55px;
margin-top: 130px;
background-color: black;
border-radius: 10px;
border: none;
font-weight: bold;
font-size: 17px;
line-height: 25px;
color: #ffffff;
font-variant: small-caps;
cursor: pointer;
display: flex;
justify-content: center;
align-items: center;
gap: 20px;

&:hover {
    opacity: 0.8;
}

&:active {
    opacity: 0.5;
}

.arrow {
    width: 20px;
}
`;


