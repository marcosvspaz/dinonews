import styled from 'styled-components'
import { linearGradient } from 'polished'

export const Container = styled.div`
margin-top: 50px;
border:0;
width: 100%;
height: 250px;
background: #44475a;
color: white;
color: black;
font-size: 80px;
text-align: center;
${linearGradient({
colorStops: ['#282a36 0%', 'rgba(0, 0, 255, 0) 0%', '#282a36 150%'],
toDirection: 'to top',
fallback: '#44475a',
})};
`
export const P = styled.p`


`
