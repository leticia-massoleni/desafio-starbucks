import Amarelo2x from "../../assets/amarelo2x.png";
import Vermelho2x from "../../assets/vermelho2x.png";
import Laranja2x from "../../assets/laranja2x.png";
import Amarelo from "../../assets/amarelo.png";
import Vermelho from "../../assets/vermelho.png";
import Laranja from "../../assets/laranja.png";
import elipseAmarelo from "../../assets/elipse-amarelo.png";
import elipseVermelho from "../../assets/elipse-vermelho.png";
import elipseVerde from "../../assets/elipse-verde.png";
import { useState } from "react";
import styled from "styled-components";

const Main = styled.main`
    display: flex;
`
const H1 = styled.h1`
    font-weight: 400;
    font-size: 3rem;
`
const P = styled.p`
    width: 39.5vw;
    font-size: 1.2rem;
`
const Span = styled.span`
    font-weight: bold;
    font-size: 3rem;
    color: #037143;
`
const TextSection = styled.section`
    display: flex;
    flex-direction: column;
    margin: 3% 0 0 6%;
`
const ImgSection = styled.section`
    margin: 13.6% 0 0 0.15%;
    display: flex;
    align-items: baseline;
`
const MainIMG = styled.img`
    height: 55vh;
    position: absolute;
    margin: 8% 0 0 68%;
`
const Button = styled.button`
    font-family: "Inter", sans-serif;
    font-weight: bold;
    background-color: #037143;
    width: 11vw;
    height: 5.5vh;
    padding-top: 0.7%;
    margin-top: 2%;
    color: white;
    border: none;
    border-radius: 30px;
    cursor: pointer;
`
const Elipse = styled.img`
    height: 55vh;
`
const IMG = styled.img`
    cursor: pointer;
`
export default function Home(){
    const [copo, setCopo] = useState(Amarelo2x);
    const [elipse, setElipse] = useState(elipseAmarelo);

    const mudarLaranja = () => {
        setCopo(Laranja2x)
        setElipse(elipseVerde)
    }
    const mudarVermelho = () => {
        setCopo(Vermelho2x)
        setElipse(elipseVermelho)
    }
    const mudarAmarelo = () => {
        setCopo(Amarelo2x)
        setElipse(elipseAmarelo)
    }
    
    return(
        <Main>
            <MainIMG src={copo} alt="Copo Starbucks Amarelo" />
            <TextSection>
                <H1>Mais que Café</H1>
                <H1>Isso é <Span>Starbucks</Span></H1>
                <P>A Starbucks oferece uma variedade de cafés de alta</P>
                <P>qualidade. Alguns dos cafés mais populares incluem o Caffè</P>
                <P>Americano, o Cappuccino, o Latte Macchiato e o Espresso.</P>
                <P>Além disso, a Starbucks oferece bebidas quentes e frias,</P>
                <P>doces diferenciados e sanduíches.</P>
                <Button>SAIBA MAIS</Button>
            </TextSection>
            <ImgSection>
                <IMG onClick={mudarAmarelo} src={Amarelo}/>
                <IMG onClick={mudarVermelho} src={Vermelho}/>
                <IMG onClick={mudarLaranja} src={Laranja}/>
                <Elipse src={elipse}/>
            </ImgSection>
        </Main>
    )
}