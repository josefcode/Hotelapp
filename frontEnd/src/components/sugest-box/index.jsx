import './styles.css'
import { LocationOnOutlinedIcon } from './icon'

export function SuggestBox(props){
    const { produto } = props;
    const { nome, sigla, pais } = produto;
  
    return(
        <div className="suggestBox">
            <LocationOnOutlinedIcon sx={{color:'#545776'}}/>
            <div className="suggestBox-content">
                <p className="suggestBox-content-city">{nome}
                    <span className="suggestBox-content-sigla">-{sigla}</span>
                </p>
                <p className="suggestBox-content-country">{pais}</p>
            </div>
        </div>
    )


}
