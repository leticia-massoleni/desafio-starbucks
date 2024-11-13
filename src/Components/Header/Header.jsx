import {Link} from "react-router-dom";
import Logo from "../../assets/logo.png";

export default function Header(){
    return(
        <header>
            <img src={Logo} alt="logomarca" />
            <nav>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/novidades">Novidades</Link>
                    </li>
                    <li>
                        <Link to="/sobre">Sobre</Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}