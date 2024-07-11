import Styles from './postModelo.module.css';

export default function PostModelo({children,fotoCapa, titulo}){
    return (
        <article className={Styles.postModeloContainer}>
            <div className={Styles.fotoCapa}
                style={{backgroundImage: `url(${fotoCapa})`}}
            >
            </div>

            <div className={Styles.titulo}>
                {titulo}
            </div>

            <div className={Styles.postConteudoContainer}>
                {children}
            </div>
        </article>
    )
}