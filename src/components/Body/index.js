import { Container, P } from './styles'
import BoxNews from '../BoxNews'

function Body () {
 return <Container>
     BODY
     <P>W= 100% <br></br> H= 800px <br></br> M-T= 30px</P>
     Global style
     <P>    margin: 0; <br></br>
    padding: 0;<br></br>
    box-sizing: border-box;<br></br>
    font-size: 14px;<br></br>
   
    font-family: Arial, 'Segoe UI', Tahoma, Verdana, sans-serif;
</P>
<BoxNews></BoxNews>
<BoxNews></BoxNews>
<BoxNews></BoxNews>
<BoxNews></BoxNews>
     </Container>
}

export default Body