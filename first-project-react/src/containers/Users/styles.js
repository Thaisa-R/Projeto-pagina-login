import styled from "styled-components";
import Background from "../../assets/background-invert.jpg"


export const Container = styled.div `
background: url("${Background}");
background-size: cover;
display: flex;
flex-direction: column;
align-items: center;
gap: 40px;
height: 100%;
min-height: 100vh;
`;

export const Image = styled.img `
margin-top: 30px;
width: 230px;
`;

export const ContainerItens = styled.div `
backdrop-filter: blur(100px);
background-color: rgba(0, 0, 0, .5);
border-radius: 60px 60px 0px 0px;
padding: 50px 35px;
display: flex;
flex-direction: column;
height: 100%; 
min-height: calc(100vh - 200px);
width: 340px ;
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

export const Button = styled.button `
width: 270px;
height: 60px;
margin-top: 100px;
background-color: transparent;
border-radius: 10px;
border: solid 1px #ffffff;
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
    transform: rotate(180deg);
}
`;


export const User = styled.li `
display: flex;
justify-content: space-around;
align-items: center;
margin-top: 30px;

background: rgba(255, 255, 255, 0.25);
box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
border-radius: 10px;
width: 270px;
height: 40px;

border: none;
outline: none;

p {
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 28px;
    color: #ffffff;
}

 button {
    background: none;
    border: none;
    cursor: pointer;
}

.bi-trash3 {
    font-size: 20px;
}

`;


