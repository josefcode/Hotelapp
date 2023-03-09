import './styles.css'
import { LocationOnOutlinedIcon } from './icon'

export function SuggestBox(props){

    return(
        <div className="suggestBox">
            <LocationOnOutlinedIcon sx={{color:'#545776'}}/>
            <div className="suggestBox-content">
                <p className="suggestBox-content-city">{props.produto.nome}
                    <span className="suggestBox-content-sigla">-{props.produto.sigla}</span>
                </p>
                <p className="suggestBox-content-country">{props.produto.pais}</p>
            </div>
        </div>
    )


}
