import styled from 'styled-components'
import { linearGradient } from 'polished'

export const Container = styled.div`
margin-top: 30px;
border:0;
width: 100%;
height: 360px;
color: black;
font-size: 80px;
text-align: center;
display:inline-flex;

@media(max-width: 654px) {
    margin-top: 0px;
border:0;
width: 100%;
color: black;
font-size: 80px;
text-align: center;
display:inline-block;
 }
`

export const Banner = styled.div`
height:100%;
width:50%;
background: yellow;
@media(max-width: 654px) {
    width: 100%;
    height: 50%;
    font-size: 10px;
    display: block;
 }


`

export const Arrows = styled.div`
height:100%;
width:55px;
background:black;

`

export const SlideUp = styled.div`
 ${linearGradient({
colorStops: ['#282a36 0%', 'rgba(0, 0, 255, 0) 0%', '#282a36 95%'],
toDirection: 'to bottom',
fallback: '#FFF',
})};
height:100%;
width: 16.66%;
background-color:#50fa7b ;

@media(max-width: 654px) {
    width: 33.33%;
    height: 50%;
    font-size: 10px;
    display: inline-block;
 }

`
export const SlideDown = styled.div`
 ${linearGradient({
colorStops: ['#282a36 0%', 'rgba(0, 0, 255, 0) 0%', '#282a36 95%'],
toDirection: 'to bottom',
fallback: '#FFF',
})};

height:100%;
width: 16.66%;
background-color:#bd93f9;
@media(max-width: 654px) {
    width: 33.33%;
    height: 50%;
    font-size: 10px;
    display:inline-block;
 }
`

export const P = styled.p`

background: transparent;
text-align: bottom;
color: white;
font-size: 28px;


`