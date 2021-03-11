import styled from 'styled-components'

export const Container = styled.div`
margin-top: 30px;
border:0;
width: 75%;
background:  #44475a;
color: black;
font-size: 80px;
text-align: center;
padding:110px;
display: inline-block;

@media(max-width: 654px) {
    padding: 5px;
    width: 100%;
}
`


export const LeftContainer = styled.div`
margin-top: 30px #282a36;
border:0;
width: 25%;
height:900px;
background: #f8f8f2;
color: black;
font-size: 80px;
text-align: center;
display:inline-block;

@media(max-width: 654px) {
    display: none;
}
`
export const P = styled.p`
color: #f8f8f2;
`

