import styled from 'styled-components'

export const Container = styled.div`
margin:0;
width: 100%;
background: #44475a;
color: #44475a;
font-size: 80px;
display: inline-flex;
padding:15px;
padding-top:30px;
text-align:center;
`
export const Menu = styled.div`
margin-left:50px;
padding:25px;
background: #44475a;
color: white;
font-size: 50px;
text-align: center;
display: inline-flex;
text-align:center;

@media(max-width: 654px) {
    width: 25px;
    height: 36px;
    font-size: 10px;
 }
`

export const Logo = styled.div`
width: 140px;
height: 140px;
background: #50fa7b;
@media(max-width: 654px) {
    width: 50px;
    height: 50px;
   
    font-size: 10px;
 }
`
export const P = styled.p`
font-size:10;
display: inline-block;
text-align: center;
`