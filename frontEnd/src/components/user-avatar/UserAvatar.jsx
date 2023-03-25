import React from 'react'
import './styles.css'
import CloseIcon from '@mui/icons-material/Close';
import { useLogin } from '../hooks/useLogin';
import { useToken } from '../hooks/useToken';
import CancelIcon from '@mui/icons-material/Cancel';

export default function UserAvatar() {
  
   const {changeLogin} = useLogin()
   const [userData, setUserData] = React.useState({})
   const [laoding, setLaoding] = React.useState(false)

   const {token , changeToken} = useToken()


   React.useEffect(()=> {
    async function fetchUserData() {
        setLaoding(true)
        try {
          const response = await fetch(`http://localhost:8081/user/${token}`);
          const userData = await response.json();
          // Atualiza os valores dos inputs com os dados da resposta
          setUserData({
            nome: userData.nome,
            sobrenome: userData.sobrenome,
            email: userData.email,
          });

          setLaoding(false)
        } catch (error) {
          console.error(error);
        }
      }

      fetchUserData()
   }, [token])

   const { nome, sobrenome } = userData
    const handleRemove = () => {

        changeToken(null)
         changeLogin(false)
    }

  return (
    <>
    { 
    laoding ? 
    
    <span className='loading-avatar'>loading...</span> 
  
     :
     <div className='avatar-container'>
    
     <div className='avatar-image'>
         {nome?.charAt(0).toUpperCase()}
         {sobrenome?.charAt(0).toUpperCase()}
  
     </div>
     <div className='avatar-text'>
         <span>Olá</span>
         <p>
         {nome} {sobrenome}
         </p>
     </div>
     <div className='avatar-close'>
     <CancelIcon onClick = {handleRemove} sx ={{fontSize: '20px',
 color: "#0F5EA2"}}/>
     </div>
 </div>

}
   
    </>
  )
}
