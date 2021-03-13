import { Container, P,Logo, DinoNews } from './styles'
import Image from 'next/image'

function Header() {
    return <Container>
        <Logo ><Image src="/chester.jpeg" alt="Logo" width={140} height={140}/></Logo>
        <DinoNews>Dino News</DinoNews>
           </Container>
}

export default Header