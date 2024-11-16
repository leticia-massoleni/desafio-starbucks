import loja from "../../assets/loja-starbucks.png"
import styled from "styled-components";

const Section = styled.section`
    height: 84vh;
    display: flex;
    color: #1E3932;
    justify-content: space-around;
    align-items: center;
`
const H1 = styled.h1`
    font-weight: 400;
    font-size: 3rem;
`
const H3 = styled.h3`
    font-family: "Inter", sans-serif;
`
const P = styled.p`
    font-size: 1.2rem;
`
const Button = styled.button`
    font-family: "Inter", sans-serif;
    font-weight: bold;
    background-color: #037143;
    width: 11vw;
    height: 5.5vh;
    margin-top: 4%;
    color: white;
    border: none;
    border-radius: 30px;
    cursor: pointer;
`
const IMG = styled.img`
    width: 25vw;
    height: 54vh;
`

export default function Sobre(){
    return(
        <Section>
            <IMG src={loja} alt="" />
            <section>
                <H3>PREPARAÇÃO</H3>
                <H1>Níveis de torra</H1>
                <P>Qual a torra que prefere? Starbucks® Torra Clara, <br /> Torra Média ou Torra Escura? Estas sãos as torras <br />que fazem parte dos níveis de torra Starbucks®</P>
                <Button>SAIBA MAIS</Button>
            </section>
        </Section>
    )
}