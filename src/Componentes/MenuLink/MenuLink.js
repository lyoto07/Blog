import { Link, useLocation } from "react-router-dom";
import Styles from "./menulink.module.css";

function MenuLink({children, to}){
    const localizacao = useLocation();
    
    return(
        <Link className={`
            ${Styles.Link}
            ${localizacao.pathname === to ? Styles.linkDestacado : ''}
        `} to = {to}>
           {children}
        </Link>
    )
}

export default MenuLink;