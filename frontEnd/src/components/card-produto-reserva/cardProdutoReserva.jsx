import "./style.css"

export function CardProdutoReserva(props){
    
    return(
        <div className="card-produto-reserva">
            <div >
                <img className="card-produto-reserva-img" src={props.dados.imagensEntityList[0].url} />
            </div>
            <div className="card-produto-reserva-content">
                <h3 className="card-produto-reserva-content-text">{props.dados.nome}</h3>
                <h5 className="card-produto-reserva-content-text">Data de chegada: {props.element.dataInicial}</h5>
                <h5 className="card-produto-reserva-content-text">Data de saída: {props.element.dataFinal}</h5>
                <h5 className="card-produto-reserva-content-text">Hora de entrada: {props.element.horaInicial}</h5>
            </div>
        </div>
    )
}