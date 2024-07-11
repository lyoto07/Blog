import Styles from "./BotaoPrincipal.module.css"
export default function BotaoPrincipal({children, tamanho}){
    return (
        <button className={`${Styles.botaoPrincipal} ${Styles[tamanho]}`}>
            {children}
        </button>
    )
}