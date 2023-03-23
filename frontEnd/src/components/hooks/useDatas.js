import { useState } from "react"
import { createContext, useContext } from "react"

// Ciração do Contexto
const DatasContext = createContext()

// Criação do Provedor para o Contexto
export function DatasProvider(props) {

    // State que irá controlar qual Tema a aplicação está usando
    const [startDate, setStartDate] = useState("")
    const [endDate, setEndDate] = useState("")
    const [cidadeValue, setCidadeValue] = useState("")
    // Função responsável por Trocar o Tema

    function changeStartDate(categoria) {
        setStartDate(categoria)
    }
    function changeEndDate(categoria) {
        setEndDate(categoria)
    }
    function changeCidadeValue(categoria) {
        setCidadeValue(categoria)
    }

    return(

        // Construção dos Elementos para utilizarmos o Contexto em nossa Aplicação, tudo o que for contido no "value" será exportado e poderá ser utilizado em Componentes que utilizarem o Hook Customizado "useTheme"
        <DatasContext.Provider value={{startDate, endDate, cidadeValue, changeStartDate, changeEndDate, changeCidadeValue}}>
            { props.children }
        </DatasContext.Provider>

    )

}

// Hook Personalizado que irá ser utilizado quando quisermos utilizar alguma das Funcionalidades contidas em nosso Contexto
export function useDatas() {

    const context = useContext(DatasContext)

    return context

}