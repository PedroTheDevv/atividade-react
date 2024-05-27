
import styles from './Components.module.css'
export function Contato(props) {
    return (
        // <h1>Contato</h1>
        
        <div>

        <h1>{props.nomePagina}</h1>
        
        <div className={styles.card}>
            <ul>
                <li>Telefone: {props.telContato}</li>
                <li>E-mail: {props.emailContato}</li>
            </ul>
        </div>

        </div>
    )
}