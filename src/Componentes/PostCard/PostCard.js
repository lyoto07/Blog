import { Link } from "react-router-dom";
import Styles from "./post.module.css";
import BotaoPrincipal from "Componentes/BotaoPrincipal";

function postCard ({post}){
    return (
        <Link to={`/posts/${post.id}`}>
            <div className={Styles.post}>
                <img
                    className={Styles.capa}
                    src={`/assets/posts/${post.id}/capa.png`}
                    alt="Imagem de capa post"
                
                />

                <h2 className={Styles.titulo}>{post.titulo}</h2>
                <BotaoPrincipal>Ler</BotaoPrincipal>
            </div>
        </Link>


    )
}

export default postCard;