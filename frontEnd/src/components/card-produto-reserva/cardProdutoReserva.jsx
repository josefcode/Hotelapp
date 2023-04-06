
import "./style.css"

export function CardProdutoReserva(props){
    function ajustarData(data){
        
        const dia = data.slice(8,10)
        const mes = data.slice(5,7)
        const ano = data.slice(0,4)

        return dia+"-"+mes+"-"+ano
        
    }

    
    return(
        <div className="card-produto-reserva">
            <div >
                <img className="card-produto-reserva-img" src={props.dados.img} />
            </div>
            <div className="card-produto-reserva-content">
                <h3 className="card-produto-reserva-content-text">{props.dados.nome}</h3>
                <h5 className="card-produto-reserva-content-text">Data de chegada: {ajustarData(props.dados.dataInicial)}</h5>
                <h5 className="card-produto-reserva-content-text">Data de saída: {ajustarData(props.dados.dataFinal)}</h5>
                <h5 className="card-produto-reserva-content-text">Hora de entrada: {props.dados.horaEntrada}</h5>
            </div>
        </div>
    )
}