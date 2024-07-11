import Styles from "./menu.module.css";
import MenuLink from "../MenuLink";

function menu (){
    return (
        <header>
            <nav className={Styles.navegacao}>
                <MenuLink to="/">
                    Inicio
                </MenuLink>
                <MenuLink to="/sobremim">
                    Sobre Mim
                </MenuLink>
            </nav>
        </header>
    ) 
}

export {menu};