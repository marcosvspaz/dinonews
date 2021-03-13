import { Container, P,NewsImg, NewsText} from './styles'
import Image from 'next/image'

function BoxNews() {
    return <Container>
       <NewsImg>        <Image src="/capivara.jpeg" alt="Logo" width={200} height={200}/>
</NewsImg>
       <NewsText> <P>Capivaras aprendem a falar e pedem por direitos iguais</P></NewsText>

    </Container>
}

export default BoxNews