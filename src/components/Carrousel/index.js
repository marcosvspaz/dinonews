import { Container, P, Arrows, Banner,SlideUp,SlideDown} from './styles'

function Carrousel () {
 return <Container>

   <SlideUp><P>News</P></SlideUp>
   <SlideDown><P>About</P></SlideDown>
   <SlideUp><P>Teste</P></SlideUp>
   <Banner></Banner>
 
 </Container>

}

export default Carrousel