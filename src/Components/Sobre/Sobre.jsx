import loja from "../../assets/loja-starbucks.png"

export default function Sobre(){
    return(
        <section>
            <img src={loja} alt="" />
            <section>
                <h3>PREPARAÇÃO</h3>
                <h1>Níveis de torra</h1>
                <p>Qual a torra que prefere? Starbucks® Torra Clara, Torra Média ou Torra Escura? Estas sãos as torras que fazem parte dos níveis de torra Starbucks®</p>
                <button>SAIBA MAIS</button>
            </section>
        </section>
    )
}