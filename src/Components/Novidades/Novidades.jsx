import styled from "styled-components";
import torra from "../../assets/torra.png";

const Section = styled.section`
    background-color: #1E3932;
    height: 84vh;
    color: white;
    display: flex;
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
    width: 30vw;
    height: 54vh;
`
export default function Novidades(){
    return(
        <Section>
            <section>
                <H3>PREPARAÇÃO</H3>
                <H1>Níveis de torra</H1>
                <P>Qual a torra que prefere? Starbucks® Torra Clara, <br /> Torra Média ou Torra Escura? Estas sãos as torras <br />que fazem parte dos níveis de torra Starbucks®</P>
                <Button>SAIBA MAIS</Button>
            </section>
            <IMG src={torra} alt="Torra" />
        </Section>
    )
}