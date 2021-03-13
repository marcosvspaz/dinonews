import styled from 'styled-components'

export const Container = styled.div`
margin-top:20px;
padding:30px;
border-radius: 23px;
width: 100%;
height: 250px;
background:  #44475a;
color: #f8f8f2;
font-size: 80px;
text-align: center;
display: inline-flex;
`


export const P = styled.p`
font-size: 28px;
background:  transparent;
`
export const NewsImg = styled.div`
width: 200px;
height:200px;
border-radius:15px;
background: orange;
display: inline-flex;
@media(max-width: 654px) {
    width: 100%;
    height: 100%;
   
    font-size: 10px;
 }
`
export const NewsText = styled.div`
width: 60%;
height:200px;
padding-top: 20px;
padding-left:10px;
background: transparent;
display: inline-flex;
@media(max-width: 654px) {
    width: 100%;
    height: 100%;
   

 }
`