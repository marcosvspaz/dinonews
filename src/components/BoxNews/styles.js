import styled from 'styled-components'

export const Container = styled.div`
margin-top:20px;
padding:30px;
border:0;
width: 100%;
height: 250px;
background:  #282a36;
color: #f8f8f2;
font-size: 80px;
text-align: center;
display: inline-flex;
`


export const P = styled.p`

background:  #282a36;
`
export const NewsImg = styled.div`
width: 200px;
height:200px;
background: orange;
display: inline-flex;
@media(max-width: 654px) {
    width: 100%;
    height: 100%;
   
    font-size: 10px;
 }
`
export const NewsText = styled.div`
width: 50%;
height:200px;
background:  #282a36;
display: inline-flex;
@media(max-width: 654px) {
    width: 100%;
    height: 100%;
   
    font-size: 10px;
 }
`