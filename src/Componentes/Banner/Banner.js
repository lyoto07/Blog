import styles from "./banner.module.css";
import circuloColorido from "assets/circulo_colorido.png"
import minhaFoto  from "assets/minha_foto.jpg"
function banner(){
    return(
        <div className={styles.banner}>
            <div className={styles.apresentacao}>
                <h1 className={styles.titulo}>
                Olá, Mundo!
                </h1>
                <p className={styles.paragrafo}>
                        Boas vindas ao meu espaço pessoal! Eu sou Guilherme Serafim, Aluno de Front-end da Alura.
                </p>
            </div>

            <div className={styles.imagens}>
                <img className={styles.circuloColorido}
                    src={circuloColorido}
                    alt="circulo colorido"
                />

                <img className={styles.minhaFoto}
                    src={minhaFoto} alt="foto sorrindo"
                />
            </div>
        </div>
    )
}

export default banner;