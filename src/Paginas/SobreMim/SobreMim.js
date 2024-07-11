import PostModelo from "Componentes/Postmodelo";
import fotoCapa from "assets/sobre_mim_capa.png";
import Styles from "./sobreMim.module.css";
import fotoSobreMmim from "assets/sobreMimFoto.jpg";

const sobreMim = () => {
    return(
        <PostModelo
            titulo="Sobre mim"
            fotoCapa={fotoCapa}
        >
            <h3 className={Styles.subtitulo}>
                Olá, eu sou o Guilherme
            </h3>

            <img 
                src={fotoSobreMmim}
                alt="foto do Guilherme "
                className={Styles.fotoSobreMim}
            />

            <p className={Styles.paragrafo}>
                Olá, tudo bem? Eu sou estudante de desenvolvimento de sistemas e estou muito feliz de te ver por aqui.
            </p>
            <p className={Styles.paragrafo}>
                Minha história com programação começou em casa, quando eu mexia nos computadores e ficava curioso sobre como tudo funcionava. Foi aí que decidi fazer um curso generalista de informática, onde tive meu primeiro contato com banco de dados, programação e informática em geral. Esse curso despertou ainda mais minha paixão por tecnologia.
            </p>
            <p className={Styles.paragrafo}>
                Mais tarde, fiz um curso técnico de informática no SENAI. Lá, eu aprendi muito sobre redes e hardware, o que me deu uma base sólida para entender como os computadores funcionam por dentro.
            </p>
            <p className={Styles.paragrafo}>
                Paralelamente, decidi me aprofundar ainda mais e me inscrevi no curso de Análise e Desenvolvimento de Sistemas na Anhembi Morumbi, onde aprendi sobre várias linguagens de programação e me especializei em desenvolvimento de software. 
            </p>
            <p className={Styles.paragrafo}>
                Também fiz um curso técnico em Desenvolvimento de Sistemas na ETEC, onde tive a oportunidade de trabalhar em diversos projetos práticos e adquiri uma boa base teórica e prática no desenvolvimento de sistemas.
            </p>
            <p className={Styles.paragrafo}>
                Tenho uma experiência maior com suporte técnico, onde atuei por um bom tempo solucionando problemas de hardware e software. No meu último estágio, além de prestar suporte técnico, eu também fazia manutenção em código Java, o que me deu uma visão mais ampla sobre o ciclo de desenvolvimento de software.
            </p>
            <p className={Styles.paragrafo}>
                Foi essa mistura de suporte técnico e desenvolvimento que me trouxe até aqui. Hoje, como estudante, adoro aprender coisas novas e compartilhar conhecimento com outras pessoas interessadas em programação. Acredito que a educação transforma vidas, e estou animado para continuar essa jornada de aprendizado. Espero que você aproveite cada momento e aprenda bastante!
            </p>
        </PostModelo>
    )
}

export default sobreMim;