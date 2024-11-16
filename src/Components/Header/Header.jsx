import {Link} from "react-router-dom";
import Logo from "../../assets/logo.png";
import styled from "styled-components";

const HEADER = styled.nav`
    display: flex;
    align-items: center;
    height: 16vh;
`
const UL = styled.ul`
    display: flex;
    justify-content: flex-end;
    width: 80vw;
    gap: 5%;
    list-style: none;
`
const IMG = styled.img`
    margin-top: 1.8%;
    margin-left: 5%;
    width: 6vw;
`
export default function Header(){
    return(
        <HEADER>
            <IMG src={Logo} alt="logomarca" />
            <nav>
                <UL>
                    <li>
                        <Link to="/" style={{textDecoration: 'none', color: '#1E3932'}}>Home</Link>
                    </li>
                    <li>
                        <Link to="/novidades" style={{textDecoration: 'none', color: '#1E3932'}}>Novidades</Link>
                    </li>
                    <li>
                        <Link to="/sobre" style={{textDecoration: 'none', color: '#1E3932'}}>Sobre</Link>
                    </li>
                </UL>
            </nav>
        </HEADER>
    )
}