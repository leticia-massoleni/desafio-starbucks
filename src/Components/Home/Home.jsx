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
        <main>
            <h1>Mais que Café</h1>
            <h1>Isso é Starbucks</h1>
            <p>A Starbucks oferece uma variedade de cafés de alta qualidade. Alguns dos cafés mais populares incluem o Caffè Americano, o Cappuccino, o Latte Macchiato e o Espresso. Além disso, a Starbucks oferece bebidas quentes e frias, doces diferenciados e sanduíches.</p>
            <button>SAIBA MAIS</button>
            <img src={copo} alt="Copo Starbucks Amarelo" />
            <section>
                <img onClick={mudarAmarelo} src={Amarelo} alt="" />
                <img onClick={mudarVermelho} src={Vermelho} alt="" />
                <img onClick={mudarLaranja} src={Laranja} alt="" />
            </section>
            <img src={elipse}/>
        </main>
    )
}