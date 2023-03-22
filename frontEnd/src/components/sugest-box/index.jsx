import './styles.css'
import { LocationOnOutlinedIcon } from './icon'

export function SuggestBox(props){

    return(
        <div className="suggestBox">
            <LocationOnOutlinedIcon sx={{color:'#545776'}}/>
            <div className="suggestBox-content">
                {/* <p className="suggestBox-content-city">{props.lista.cidade}</p> */}
                <p className="suggestBox-content-city">{props.nome}</p>

                {/* <p className="suggestBox-content-country">{props.lista.pais}</p> */}
                <p className="suggestBox-content-country">{props.pais}</p>

            </div>
        </div>
    )


}